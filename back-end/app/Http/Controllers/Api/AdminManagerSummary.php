<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use JWTAuth;
use App\Post;
use DB;
use App\User;
class AdminManagerSummary extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    //  get summary: like, favourite, review, post
    public function index()
    {
        if (JWTAuth::parseToken()->authenticate()) {
            $id = (JWTAuth::parseToken()->authenticate())['id'];
            $checkAdmin = User::where('id','=',$id)->where('role','=',2)->get();
            if(count($checkAdmin)>0){

                //count total post per owner
                $date = \Carbon\Carbon::today()->subDays(7);
                $numPost = DB::table('posts')
                    ->where('posts.created_at', '>=', $date)
                    ->count();
                    $numLike = DB::table('posts')->sum('like_number');
                $numLove = DB::table('favourites')
                    ->join('posts', 'favourites.post_id', '=', 'posts.id')
                    ->where('favourites.created_at', '>=', $date)
                    ->count();
                $numReview = DB::table('reviews')
                    ->join('posts', 'reviews.post_id', '=', 'posts.id')
                    ->where('reviews.created_at', '>=', $date)
                    ->count();
                return response()->json
                    ([
                    'post' => $numPost,
                    'like' => $numLike,
                    'love' => $numLove,
                    'review' => $numReview,
                ]);
            }
        }
        return response()->json(['error' => 'Unauthorized'], 401);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
