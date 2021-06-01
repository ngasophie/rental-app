<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Post;
class Type extends Model
{
    //
    protected $table = 'types';
    public function post()
    {
        return $this->hasOne(Post::class);
    }
}
