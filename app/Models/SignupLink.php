<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SignupLink extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'referral_key',
        'is_active',
        'expiry_date'
    ];
}