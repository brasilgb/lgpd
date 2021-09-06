<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Setting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;
use Intervention\Image\Facades\Image;

class SettingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if (!Setting::count()) :
            Setting::create(['id_setting' => 1]);
        endif;
        $setting = Setting::orderByDesc('id_setting')->first();
        return Inertia::render('admin/settings', ['setting' => $setting, 'settingTitle' => 'Ito é um título da configuração geral, ok!']);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Setting  $setting
     * @return \Illuminate\Http\Response
     */
    public function show(Setting $setting)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Setting  $setting
     * @return \Illuminate\Http\Response
     */
    public function edit(Setting $setting)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Setting  $setting
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Setting $setting)
    {
        $data = $request->all();

        $messages = [
            'required' => 'O campo :attribute deve ser preenchido!',
        ];

        $request->validate(
            [
                'title' => 'required',
                'description' => 'required',
                'address' => 'required',
                'contacts' => 'required',
                'maps' => 'required'
            ],
            $messages,
            [
                'title' => 'título',
                'description' => 'descrição',
                'address' => 'endereço',
                'contacts' => 'contatos',
                'maps' => 'mapas'
            ]
        );

        if ($request->hasfile('logo')) {
            $image = $request->file('logo');
            $fileName =  'logo' . $image->getClientOriginalExtension();
            Image::make($image)->resize(100, null,function ($constraint) {
                $constraint->aspectRatio();
            })->save(public_path('storage/images/' . $fileName));
            if ($setting->logo && file_exists(public_path('storage/images/' . $setting->logo))) {
                unlink(public_path('storage/images/' . $setting->logo));
            }
        }

        $data['logo'] =  $request->file('logo') ? $fileName : $setting->logo;
        $setting->update($data);
        Session::flash('success', 'Dados do site salvos com successo');
        return Redirect::route('configuracao');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Setting  $setting
     * @return \Illuminate\Http\Response
     */
    public function destroy(Setting $setting)
    {
        //
    }
}
