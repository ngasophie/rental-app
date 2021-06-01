<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Post;
use JWTAuth;
use Pusher\Pusher;
use App\User;
use App\Notification;
class AdminManagerPost extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    // get all-post
    public function index()
    {
         //get all post p
         if(JWTAuth::parseToken()->authenticate()){
            $id = (JWTAuth::parseToken()->authenticate())['id'];
            $checkAdmin = User::where('id','=',$id)->where('role','=',2)->get();
            if(count($checkAdmin)>0){
                // get all post per owner
              $recentPosts = Post::with('address','user')
              -> where('status','>=',0)
              ->orderBy('created_at','desc')
              -> paginate(5);
              return $recentPosts;
            }
        }
        return response()->json(['error' => 'Unauthorized'], 401);
    }
    public function activePosts()
    {
         //get all post p
         if(JWTAuth::parseToken()->authenticate()){
            $id = (JWTAuth::parseToken()->authenticate())['id'];
            $checkAdmin = User::where('id','=',$id)->where('role','=',2)->get();
            if(count($checkAdmin)>0){
                // get all post per owner
              $activePosts = Post::with('address','user')
              -> where('status','=',1)
              ->orderBy('created_at','desc')
              -> paginate(5);
              return $activePosts;

            }
        }
        return response()->json(['error' => 'Unauthorized'], 401);
    }
    public function disabledPosts()
    {
         //get all post p
         if(JWTAuth::parseToken()->authenticate()){
            $id = (JWTAuth::parseToken()->authenticate())['id'];
            $checkAdmin = User::where('id','=',$id)->where('role','=',2)->get();
            if(count($checkAdmin)>0){
                // get all post per owner
              $disabledPosts = Post::with('address','user')
              -> where('status','=',0)
              ->orderBy('created_at','desc')
              -> paginate(5);
              return $disabledPosts;
            }
        }
        return response()->json(['error' => 'Unauthorized'], 401);
    }
    public function waitingPosts()
    {
         //get all post p
         if(JWTAuth::parseToken()->authenticate()){
            $id = (JWTAuth::parseToken()->authenticate())['id'];
            $checkAdmin = User::where('id','=',$id)->where('role','=',2)->get();
            if(count($checkAdmin)>0){
                // get all post per owner
              $waitingPosts = Post::with('address','user')
              -> where('status','=',2)
              ->orderBy('created_at','desc')
              -> paginate(5);
              return $waitingPosts;

            }
        }
        return response()->json(['error' => 'Unauthorized'], 401);
    }
    public function recentPosts()
    {
         //get all post p
         if(JWTAuth::parseToken()->authenticate()){
            $id = (JWTAuth::parseToken()->authenticate())['id'];
            $checkAdmin = User::where('id','=',$id)->where('role','=',2)->get();
            if(count($checkAdmin)>0){
                // get all post per owner
              $recentPosts = Post::with('address','user')
              -> where('status','>=',0)
              ->orderBy('created_at','desc')
              -> paginate(5);
              return $recentPosts;

            }
        }
        return response()->json(['error' => 'Unauthorized'], 401);
    }
    public function adminRecommendPost($post_id)
    {
         //get all post p
         if(JWTAuth::parseToken()->authenticate()){
            $id = (JWTAuth::parseToken()->authenticate())['id'];
            $checkAdmin = User::where('id','=',$id)->where('role','=',2)->get();
            if(count($checkAdmin)>0){
                // get all post per owner
            Post::where('id','=',$post_id)->update([
                'isRecommended'=>1
            ]);
             $post = Post::where('id','=',$post_id)->get();
             
             return $post[0];
            }
        }
        return response()->json(['error' => 'Unauthorized'], 401);
    }
    public function adminNoRecommendPost($post_id)
    {
         //get all post p
         if(JWTAuth::parseToken()->authenticate()){
            $id = (JWTAuth::parseToken()->authenticate())['id'];
            $checkAdmin = User::where('id','=',$id)->where('role','=',2)->get();
            if(count($checkAdmin)>0){
                // get all post per owner
            Post::where('id','=',$post_id)->update([
                'isRecommended'=>0
            ]);
             $post = Post::where('id','=',$post_id)->get();
            
             return $post[0];
            }
        }
        return response()->json(['error' => 'Unauthorized'], 401);
    }
    public function adminActivePost($post_id)
    {
         //get all post p
         if(JWTAuth::parseToken()->authenticate()){
            $id = (JWTAuth::parseToken()->authenticate())['id'];
            $checkAdmin = User::where('id','=',$id)->where('role','=',2)->get();
            if(count($checkAdmin)>0){
                // get all post per owner 
             Post::where('id','=',$post_id)->update([
                 'status' =>1
             ]);
             $post = Post::where('id','=',$post_id)->get();
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
             $data = [
                 3,
                 'one post is active now',
                 $post[0]
             ];
             $pusher->trigger('manager', 'action', $data);
             $currentReceiveNotice = User::where('id','=',$post[0]['user_id'])->get();
             $notice = $currentReceiveNotice[0]['not_seen_notice'];
             $notice++;
             User::where('id','=',$post[0]['user_id'])->update([
                 'not_seen_notice'=> $notice,
             ]);
             // update table notifications => content
             $notification = new Notification([
                  "type"=>3,
                 'content' => 'one post is active now',
                 'user_id'=>$currentReceiveNotice[0]['id'],
                 'post_id'=>$post_id
             ]);
             $notification ->save();
             return $notification;
             return $post[0];
            }
        }
        return response()->json(['error' => 'Unauthorized'], 401);
    }
    public function adminDisabledPost($post_id)
    {
         //get all post p
         if(JWTAuth::parseToken()->authenticate()){
            $id = (JWTAuth::parseToken()->authenticate())['id'];
            $checkAdmin = User::where('id','=',$id)->where('role','=',2)->get();
            if(count($checkAdmin)>0){
                
                // get all post per owner
            Post::where('id','=',$post_id)->update([
                'status' =>1
            ]);
             $post = Post::where('id','=',$post_id)->get();
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
             $data = [
                 3,
                 'one post is disabled now',
                 $post[0]
             ];
             $pusher->trigger('manager', 'action', $data);
             $currentReceiveNotice = User::where('id','=',$post[0]['user_id'])->get();
             $notice = $currentReceiveNotice[0]['not_seen_notice'];
             $notice++;
             User::where('id','=',$post[0]['user_id'])->update([
                 'not_seen_notice'=> $notice,
             ]);
             // update table notifications => content
             $notification = new Notification([
                3,
                 'content' => 'one post is disabled now',
                 'user_id'=>$currentReceiveNotice[0]['id'],
                 'post_id' =>$post_id
             ]);
             $notification ->save();
             return $post[0];

            }
        }
        return response()->json(['error' => 'Unauthorized'], 401);
    }
    // gia han bai
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
