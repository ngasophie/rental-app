<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOwnersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('owners', function (Blueprint $table) {
            $table-> increments('id');
            $table -> integer('address_id');
            $table -> string('email',50);
            $table -> string('identification',50);
            $table -> string('img_src',50);
            $table -> string('name',50);
            $table -> string('password',50);
            $table -> string('phone_number',50);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('owners');
    }
}
