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
        $post_content = Post::where('slug', $post)->first();
        
        return Inertia::render('site/posts', ['post_content' => $post_content]);
    }
}
