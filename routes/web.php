<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\HomeController as HomeAdmin;
use App\Http\Controllers\Admin\CategoryController as CategoryAdmin;
use App\Http\Controllers\Admin\PostController as PostAdmin;
use App\Http\Controllers\Admin\SettingController as SettingAdmin;
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

Route::resource('/admin', HomeAdmin::class);

Route::resource('/admin/categoria', CategoryAdmin::class)->parameters(['categoria' => 'category']);

Route::resource('/admin/postagem', PostAdmin::class)->parameters(['postagem' => 'post']);

Route::resource('/admin/configuracao', SettingAdmin::class)->parameters(['configuracao' => 'setting']);

Route::resource('/', HomeSite::class);