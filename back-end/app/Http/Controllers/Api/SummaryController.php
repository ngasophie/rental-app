<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use DB;
use Illuminate\Http\Request;
use JWTAuth;
use App\User;
class SummaryController extends Controller {
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index() {
        //
        if (JWTAuth::parseToken()->authenticate()) {
            $id = (JWTAuth::parseToken()->authenticate())['id'];
            $checkOwner = User::where('id','=',$id)
            ->where('role','=',1)
            ->get();
        if(count($checkOwner)>0){
            
            //count total post per owner
            $date = \Carbon\Carbon::today()->subDays(7);
            $numPost = DB::table('posts')
                ->where('user_id', '=', $id)
                ->where('posts.created_at', '>=', $date)
                ->count();
            $numLike = DB::table('posts')
            ->where('user_id','=',$id)
            ->sum('like_number');
            $numLove = DB::table('favourites')
                ->join('posts', 'favourites.post_id', '=', 'posts.id')
                ->where('posts.user_id', '=', $id)
                ->where('favourites.created_at', '>=', $date)
                ->count();
            $numReview = DB::table('reviews')
                ->join('posts', 'reviews.post_id', '=', 'posts.id')
                ->where('posts.user_id', '=', $id)
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
    public function create() {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request) {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id) {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id) {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id) {
        //
    }
}
