<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use JWTAuth;
use App\User;
use App\Post;
use App\Favourite;
use Validator;
class ReactController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }
    public function addLike(Request $request){
        if(JWTAuth::parseToken()->authenticate()){
            $user_id = (JWTAuth::parseToken()->authenticate())['id'];
            $user = User::where('id','=',$user_id)->get();
            $validator = Validator::make($request->all(), [
                'post_id'=>'required|numeric'
            ]);
            if($validator->fails()){
                return response()->json($validator->errors()->toJson(), 400);
            }
            $post = Post::where('id','=',$request['post_id'])->get();
            $like_number= $post[0]['like_number'];
            $like_number++;
            Post::where('id','=',$request['post_id'])->update([
                'like_number'=>$like_number
            ]);
            return true;
        }
    }
    public function addReport(Request $request){
        if(JWTAuth::parseToken()->authenticate()){
            $user_id = (JWTAuth::parseToken()->authenticate())['id'];
            $user = User::where('id','=',$user_id)->get();
            $validator = Validator::make($request->all(), [
                'post_id'=>'required|numeric'
            ]);
            if($validator->fails()){
                return response()->json($validator->errors()->toJson(), 400);
            }
            $post = Post::where('id','=',$request['post_id'])->get();
            $report_number= $post[0]['report_number'];
            $report_number++;
            Post::where('id','=',$request['post_id'])->update([
                'report_number'=>$report_number
            ]);
            return true;
        }
    }
    public function addFavourite(Request $request){
        if(JWTAuth::parseToken()->authenticate()){
            $user_id = (JWTAuth::parseToken()->authenticate())['id'];
            $user = User::where('id','=',$user_id)->get();
            $validator = Validator::make($request->all(), [
                'post_id'=>'required|numeric',
                'user_id'
            ]);
            if($validator->fails()){
                return response()->json($validator->errors()->toJson(), 400);
            }
            $favoriteNum = new Favourite([
                'post_id'=>$request['post_id'],
                'user_id'=>$request['user_id']
            ]);
            $favoriteNum->save();
            return $favoriteNum;
        }
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
