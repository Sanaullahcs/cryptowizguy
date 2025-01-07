<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddVerifiedByUserToEmaildataTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('emails', function (Blueprint $table) {
            $table->unsignedBigInteger('verified_by_user')->nullable();

            // Optional: if you want to enforce a foreign key relationship

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
}
