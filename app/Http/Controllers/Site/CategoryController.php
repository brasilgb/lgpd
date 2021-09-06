<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class CategoryController extends Controller
{
    public function index($category) 
    {

        $categories_posts = Category::with('posts')->where('slug', $category)->get();
        return Inertia::render('site/categories', ['categories_posts' => $categories_posts]);

    }
}
