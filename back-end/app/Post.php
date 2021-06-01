<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Type;
use App\Address;
use App\Admin;
use App\Facilities;
use App\User;
use App\React;
use App\Image;
use App\Review;
class Post extends Model
{
    protected $table = 'posts';
    protected $fillable = [
        'address_id', 'user_id', 'description','facilities_id','react_id','status',
        'title','type_id','isRecommended','remain'
    ];
    public function type()
    {
        return $this->belongsTo(Type::class);
    }
    public function address()
    {
        return $this->belongsTo(Address::class);
    }
//  post 1-1 facilities
    public function facilities()
    {
        return $this->belongsTo(Facilities::class);
    }
    public function react()
    {
        return $this->belongsTo(React::class);
    }
    //  post belong to user
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    //  post has many images
    //  1-n
    public function images(){
        return $this -> hasMany('App\Image') ->where('isDisplay', 1);
    }
    public function reviews(){
        return $this -> hasMany('App\Review') ->where('status',1);
    }
    public function ManageReviews(){
        return $this -> hasMany('App\Review');
    }
   
}
