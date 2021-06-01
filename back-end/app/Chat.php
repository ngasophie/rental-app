<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Chat extends Model
{
    //
    protected $table = 'chat';
    protected $fillable = [
        'owner_email','conversation_id','content'
    ];
}
