<?php

namespace App;
use App\User;
use DB;
use App\Post;
use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    protected $fillable = [
        'content','post_id','user_id','user_name','user_avt','status',
        'rating'
    ];
    //
    public function owner()
    {
        return  DB::select('select * from reviews join
        users
         where reviews.user_id = users.id');
    }
    public function post(){
        return $this->belongsTo(Post::class) -> where('status','>',0);
    }
}
