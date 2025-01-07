<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Emaildata extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'emails';
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'subject',
        'btc_username',
        'btc_price',
        'verified_by_user'
    ];

    protected $dates = ['deleted_at'];
}
