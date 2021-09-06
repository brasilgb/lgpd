<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PostController extends Controller
{
    public function index($post) 
    {
        $posts = Post::orderByDesc('id_post')->where('slug', $post)->get();
dd($posts);
        return Inertia::render(['posts' => $posts]);
    }
}
