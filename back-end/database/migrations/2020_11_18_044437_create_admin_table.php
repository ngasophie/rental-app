
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAdminTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('admin', function (Blueprint $table) {
            $table->increments('id');
            $table -> integer('address');
            $table->timestamps();
            $table -> string('email',50);
            $table -> boolean('gender');
            $table -> string('identification', 50);
            $table -> string('img_src',255);
            $table -> string('name',50);
            $table -> string('password',50);
            $table -> string('phone_number',50);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('admin');
    }
}
