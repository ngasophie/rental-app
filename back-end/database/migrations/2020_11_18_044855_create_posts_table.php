<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->increments('id');
            $table -> integer('address_id');
            $table -> integer('admin_id');
            $table -> string('description',255);
            $table -> integer('facilities_id');
            $table -> integer('owners_id');
            $table -> integer('reacts_id');
            $table -> integer('status');
            $table -> string('title',255);
            $table -> integer('type_id');
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
        Schema::dropIfExists('posts');
    }
}
