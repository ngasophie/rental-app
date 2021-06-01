<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Review;
use JWTAuth;
use Validator;
use App\User;
use Pusher\Pusher;
use App\Notification;
use App\Post;
class ReviewsController extends Controller
{
    public function index(){
        $reviews = Review::with('renter')->get();
        return $reviews;
    }
    public function postReview(Request $request){
        if (JWTAuth::parseToken()->authenticate()) {
            $id = (JWTAuth::parseToken()->authenticate())['id'];
            $user = User::where('id','=',$id)->get();
            $validator = Validator::make($request->all(), [
                'content' => 'required|string|between:1,100',
                'rating' => 'required|numeric|min:0|max:5',
                'post_id'=>'required|numeric'
            ]);
            if($validator->fails()){
                return response()->json($validator->errors()->toJson(), 400);
            }
            $review = new Review([
                'content'=>$request['content'],
                'post_id'=>$request['post_id'],
                'user_id'=>$id,
                'user_name'=>$user[0]['name'],
                'user_avt'=>$user[0]['img_src'],
                'status'=>2,
                'rating'=>$request['rating']
            ]);
            $review->save();
            //    save to database
            // update not_seen_notice
                $options = array(
                    'cluster' => 'ap3',
                    'useTLS' => true
                );
                $pusher = new Pusher(
                    '86ff88e2747664ae84f1',
                    'f020ab6bb9709c528a81',
                    '1126307',
                    $options
                );
                $currentReceiveMes = User::where('role','=',2)->get();
                $user_id = $currentReceiveMes[0]['id'];
                $notice = $currentReceiveMes[0]['not_seen_notice'];
                $notice++;
                User::where('role','=',2)->update([
                    'not_seen_notice'=> $notice
                ]);
            // update table notifications => content
                $notification = new Notification([
                     3,
                    'content' => 'you have a review',
                    'user_id'=>$user_id
                ]);
                $post = Post::where('id','=',$request['id'])->get();
                $data = [
                    5,
                    'content'=>'you have a review',
                    'post'=>$post[0]
                ];
                $notification ->save();
            $pusher->trigger('manager', 'action', $data);
            return $review;
        }
    }
    public function passReview($id){
        if (JWTAuth::parseToken()->authenticate()) {
            $id = (JWTAuth::parseToken()->authenticate())['id'];
            $user = User::where('id','=',$id)->where('role','=',2)->get();
            if(count($user)>0){
                $review = Review::where('id','=',$id);
                $review->update([
                    'status'=>1
                ]);
                return true;
            }
    }
}
    public function disbaledReview($id){
        if (JWTAuth::parseToken()->authenticate()) {
            $id = (JWTAuth::parseToken()->authenticate())['id'];
            $user = User::where('id','=',$id)->where('role','=',2)->get();
            if(count($user)>0){
                $review = Review::where('id','=',$id);
                $review->update([
                    'status'=>0
                ]);
                return true;
            }
        }
    }
}
