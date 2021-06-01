<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFacilitiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('facilities', function (Blueprint $table) {
            $table->increments('id');
            $table-> boolean('air_cond',50) -> default(false);
            $table -> integer('area');
            $table -> boolean('bath_rooms')  -> default(false);
            $table -> boolean('kitchen')  -> default(false);
            $table -> boolean('internet')  -> default(false);
            $table -> string('other',255)-> nullable();
            $table -> double('price');
            $table -> integer('rooms');
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
        Schema::dropIfExists('facilities');
    }
}
