<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class React extends Model
{
    //
    protected $table = 'reacts';
    protected $fillable = [
        'like_number', 'report_number','favourite_number','user_id'
    ];
}
