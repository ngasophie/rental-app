<?php

namespace App;
use App\User;
use Illuminate\Database\Eloquent\Model;

class Conversation extends Model
{
    //
    protected $table = 'conversation';
    protected $fillable = [
        'owner_email','other_email'
    ];
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function chat(){
        return $this ->hasMany(Chat::class);
    }
}
