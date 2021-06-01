<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Notification extends Model
{
    //
    protected $table = 'notifications';
    protected $fillable = [
        'type','content','user_id','owner_id','post_id'
    ];
}
