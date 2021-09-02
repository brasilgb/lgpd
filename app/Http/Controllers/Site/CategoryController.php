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
        
        $categories = DB::table('posts')
        ->orderByDesc('id_post')
        ->join('categories', 'posts.category_id', '=', 'categories.id_category')
        ->select('posts.*', 'categories.*')
        ->where('categories.slug', $category)
        ->get();
        
        return Inertia::render('site/category', ['categories' => $categories]);

    }
}
