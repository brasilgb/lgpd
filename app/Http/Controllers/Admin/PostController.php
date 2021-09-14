<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;
use Intervention\Image\Facades\Image;
use Illuminate\Support\Str;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $posts = Post::with('category')->orderByDesc('id_post')->where('type', 1)->paginate(10);
        $reload = false;
        return Inertia::render('admin/posts', ['posts' => $posts, 'reload' => $reload, 'postTitle' => 'Postagens cadastradas']);
    }

    public function search(Request $request)
    {
        $term = $request->search;
        $reload = true;
        $posts = Post::with('category')->where('title', 'like', "%$term%")->where('type', 1)->paginate(200);
        return Inertia::render('admin/posts', ['posts' => $posts, 'reload' => $reload, 'postTitle' => 'Postagens buscadas']);
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $categories = Category::orderByDesc('categoryname')->get();
        return inertia::render('admin/posts/Create', ['categories' => $categories, 'postTitle' => 'Cadastrar postagem']);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $seExtensionImage = $request->file('featured') ? ' Sua imagem é do tipo: ' . $request->featured->extension() : '';
        $setSizeImage = $request->file('featured') ? ' Sua imagem têm: ' . round($request->featured->getSize() / 1024) . 'KB' : '';
        $messages = [
            'required' => 'O campo :attribute deve ser preenchido!',
            'mimes' => 'O campo :attribute aceita somente arquivos (jpeg,jpg e png). ' . $seExtensionImage,
            'max' => 'A :attribute deve ter até 1500 KB.' . $setSizeImage
        ];
        $request->validate(
            [
                'title' => ['required'],
                'summary' => ['required'],
                'content' => ['required'],
                'featured' => ['mimes:jpeg,jpg,png', 'max:5000'],
                'category' => ['required']
            ],
            $messages,
            [
                'title' => 'título',
                'summary' => 'resumo',
                'content' => 'conteúdo',
                'category' => 'categoria',
                'featured' => 'imagem destaque'
            ]
        );

        if ($request->hasfile('featured')) {
            $image = $request->file('featured');
            $imageName = $image->getClientOriginalName();
            $fileName =  time() . sha1($imageName) . '.' . $image->getClientOriginalExtension();
            Image::make($image)->resize(1600, null, function ($constraint) {
                $constraint->aspectRatio();
            })->save(public_path('storage/post/' . $fileName));
        }

        $data = [
            'id_post' => Post::idpost(),
            'category_id' => $request->category,
            'title' => $request->title,
            'slug' => Str::slug($request->title),
            'summary' => $request->summary,
            'content' => $request->content,
            'featured' => $request->file('featured') ? $fileName : '',
            'social' => $request->social == true ? 1 : 0,
            'active' => $request->active == true ? 1 : 0,
            'type' => 1
        ];

        Post::create($data);
        Session::flash('success', 'Postagem criada com sucesso!');
        return Redirect::route('postagem.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\post  $post
     * @return \Illuminate\Http\Response
     */
    public function show(Post $post)
    {
        $categories = Category::orderByDesc('categoryname')->get();
        return Inertia::render('admin/posts/Edit', ['categories' => $categories, 'post' => $post, 'postTitle' => 'Editar postagem']);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\post  $post
     * @return \Illuminate\Http\Response
     */
    public function edit(Post $post)
    {
        return redirect()->route('postagem.show', ['post' => $post->id_post]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Post $post)
    {
        $seExtensionImage = $request->file('featured') ? ' Sua imagem é do tipo: ' . $request->featured->extension() : '';
        $setSizeImage = $request->file('featured') ? ' Sua imagem têm: ' . round($request->featured->getSize() / 1024) . 'KB' : '';
        $messages = [
            'required' => 'O campo :attribute deve ser preenchido!',
            'mimes' => 'O campo :attribute aceita somente arquivos (jpeg,jpg e png). ' . $seExtensionImage,
            'max' => 'A :attribute deve ter até 150 KB.' . $setSizeImage
        ];
        $request->validate(
            [
                'title' => ['required'],
                'summary' => ['required'],
                'content' => ['required'],
                'category' => ['required'],
                'featured' => ['mimes:jpeg,jpg,png', 'max:5000']
            ],
            $messages,
            [
                'title' => 'título',
                'summary' => 'resumo',
                'content' => 'conteúdo',
                'category' => 'categoria',
                'featured' => 'imagem destaque'
            ]
        );

        if ($request->hasfile('featured')) {
            $image = $request->file('featured');
            $imageName = $image->getClientOriginalName();
            $fileName =  time() . sha1($imageName) . '.' . $image->getClientOriginalExtension();
            Image::make($image)->resize(1600, null, function ($constraint) {
                $constraint->aspectRatio();
            })->save(public_path('storage/post/' . $fileName));
            if ($post->featured && file_exists(public_path('storage/post/' . $post->featured))) {
                unlink(public_path('storage/post/' . $post->featured));
            }
        }

        $data = [
            'category_id' => $request->category,
            'title' => $request->title,
            'slug' => Str::slug($request->title),
            'summary' => $request->summary,
            'content' => $request->content,
            'featured' => $request->file('featured') ? $fileName : $post->featured,
            'social' => $request->social == true ? 1 : 0,
            'active' => $request->active == true ? 1 : 0
        ];

        $post->update($data);
        Session::flash('success', 'Página editada com sucesso!');
        return Redirect::route('postagem.show', ['post' => $post->id_post]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\post  $post
     * @return \Illuminate\Http\Response
     */
    public function destroy(Post $post)
    {
        if ($post->featured != null && file_exists(public_path('storage/post/' . $post->featured))) {
            unlink(public_path('storage/post/' . $post->featured));
        }
        $post->delete();
        Session::flash('success', 'Página deletada com sucesso!');
        return Redirect::route('postagem.index');
    }
}
