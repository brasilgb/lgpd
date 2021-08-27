<?php

use Illuminate\Support\Facades\Route;

// Controller do admin
use App\Http\Controllers\Admin\HomeController as HomeAdmin;
use App\Http\Controllers\Admin\CategoryController as CategoryAdmin;
use App\Http\Controllers\Admin\PostController as PostAdmin;
use App\Http\Controllers\Admin\SettingController as SettingAdmin;
use App\Http\Controllers\Admin\UserController as UserAdmin;
// Controller do site
use App\Http\Controllers\Site\HomeController as HomeSite;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/admin', [HomeAdmin::class, 'index'])->name('admin');

// Rotas Admin Categorias
Route::post('/admin/categoria/search', [CategoryAdmin::class, 'search'])->name('categoria.search');
Route::resource('/admin/categoria', CategoryAdmin::class)->parameters(['categoria' => 'category']);

Route::resource('/admin/postagem', PostAdmin::class)->parameters(['postagem' => 'post']);

Route::resource('/admin/configuracao', SettingAdmin::class)->parameters(['configuracao' => 'setting']);

Route::resource('/admin/usuario', UserAdmin::class)->parameters(['usuario' => 'user']);

Route::resource('/', HomeSite::class);