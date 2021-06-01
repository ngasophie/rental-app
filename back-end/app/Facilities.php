<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Facilities extends Model
{
    //
    protected $table = 'facilities';
    protected $fillable = [
        'air_cond', 'area', 'bath_rooms','kitchen','internet','other',
        'price','rooms','water_price','electric_price','bancony','general_owner',
        'price_unit','internet_price_unit'
    ];
}
