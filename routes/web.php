<?php

use Illuminate\Support\Facades\Route;

// Controller do admin
use App\Http\Controllers\Admin\HomeController as HomeAdmin;
use App\Http\Controllers\Admin\CategoryController as CategoryAdmin;
use App\Http\Controllers\Admin\PostController as PostAdmin;
use App\Http\Controllers\Admin\PageController as PageAdmin;
use App\Http\Controllers\Admin\SettingController as SettingAdmin;
use App\Http\Controllers\Admin\UserController as UserAdmin;

// Controller do site
use App\Http\Controllers\Site\HomeController as HomeSite;
use App\Http\Controllers\Site\CategoryController as CategorySite;
use App\Http\Controllers\Site\PostController as PostSite;
use App\Http\Controllers\Site\PageController as PageSite;
use App\Http\Controllers\Site\GalleryController as GallerySite;
use App\Http\Controllers\Site\MediaController as MediaSite;

Route::group(['middleware' => ['auth']], function () {

Route::get('/admin', [HomeAdmin::class, 'index'])->name('admin');

// Rotas Admin Categorias
Route::post('/admin/categoria/search', [CategoryAdmin::class, 'search'])->name('categoria.search');
Route::resource('/admin/categoria', CategoryAdmin::class)->parameters(['categoria' => 'category']);

// Rotas Admin Postagens
Route::post('/admin/postagem/search', [PostAdmin::class, 'search'])->name('postagem.search');
Route::resource('/admin/postagem', PostAdmin::class)->parameters(['postagem' => 'post']);

// Rotas Admin páginas
Route::post('/admin/pagina/search', [PageAdmin::class, 'search'])->name('pagina.search');
Route::resource('/admin/pagina', PageAdmin::class)->parameters(['pagina' => 'page']);

Route::get('/admin/configuracao', [SettingAdmin::class, 'index'])->name('configuracao');
Route::put('/admin/configuracao/{setting}', [SettingAdmin::class, 'update'])->name('configuracao.alterar');

// Rotas Admin usuários
Route::post('/admin/usuario/search', [UserAdmin::class, 'search'])->name('usuario.search');
Route::resource('/admin/usuario', UserAdmin::class)->parameters(['usuario' => 'user']);

});

Route::get('/', [HomeSite::class, 'index'])->name('home');
Route::get('/categoria/{category}', [CategorySite::class, 'index'])->name('categoria');
Route::get('/postagem/{post}', [PostSite::class, 'index'])->name('postagem');
Route::get('/pagina/{page}', [PageSite::class, 'index'])->name('pagina');
Route::get('/site/galeria/{gallery}', [GallerySite::class, 'index'])->name('galeria');