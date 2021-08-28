<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
    use HasFactory;
    protected $table = 'settings';

    protected $primaryKey = 'id_setting';

    public $incrementing = false;

    protected $fillable = [
        'id_setting',
        'title',
        'description',
        'logo',
        'address',
        'contacts',
        'maps'
    ];
}
