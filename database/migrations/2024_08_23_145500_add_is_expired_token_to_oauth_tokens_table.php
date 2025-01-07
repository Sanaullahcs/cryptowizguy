<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::table('oauth_tokens', function (Blueprint $table) {
            $table->boolean('is_expired_token')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     */
};