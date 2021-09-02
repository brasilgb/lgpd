<?php

namespace App\Http\Middleware;

use App\Models\Category;
use App\Models\Post;
use App\Models\Setting;
use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request)
    {
        return parent::version($request);
    }

    /**
     * Defines the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function share(Request $request)
    {
        return array_merge(parent::share($request), [
            'success' => session()->get('success'),
            'error' => session()->get('error'),

            'auth.user' => fn () => $request->user()
                ? $request->user()->only('id_user', 'name', 'email')
                : '',

            'settings' => fn () => Setting::first()
                ? Setting::orderByDesc('id_setting')->first(['id_setting', 'title', 'description', 'logo'])
                : '',

            'categories' => fn () => Category::get()
                ? Category::orderBy('categoryname')->get()
                : '',

            'pages' => fn () => Post::get()
                ? Post::where('type', 0)->orderBy('title')->get()
                : ''
        ]);
    }
}
