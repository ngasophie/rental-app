<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

use App\Post;
use JWTAuth;
use App\Type;
use App\Address;
use App\User;
use App\Facilities;
use App\React;
use App\Favourite;
use App\Image;
use Validator;
use App\City;
use App\District ;
use App\Notification;
use Pusher\Pusher;
class AllPostsPerOwner extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //get all post p
        if(JWTAuth::parseToken()->authenticate()){
            $id = (JWTAuth::parseToken()->authenticate())['id'];
            $checkOwner = User::where('id','=',$id)
            ->where('role','=',1)
            ->orWhere('role','=',2)
            ->get();
            if(count($checkOwner)>0){
                // get all post per owner
              $recentPosts = Post::with('address')
              -> where('user_id','=',$id)
              -> where('status','>=',0)
              ->orderBy('created_at','desc')
              -> paginate(5);
              return $recentPosts; 
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
    // create post
    public function store(Request $request)
    {
        //create post
        if(JWTAuth::parseToken()->authenticate()){
            $user_id = (JWTAuth::parseToken()->authenticate())['id'];
            $user = User::where('id','=',$user_id)->get();
            $id = $user[0]['id'];
            $checkOwner = User::where('id','=',$id)
            ->where('role','=',1)
            ->get();
            $checkAdmin = User::where('id','=',$id)
            ->where('role','=',2)
            ->get();
        if(count($checkAdmin)>0){
            $validator = Validator::make($request->all(), [
                'title'=>'required|string|max:255',
                'address'=>'required|string|max:255',
                'description' =>'required|string|max:255',
                'city' =>'required|string|max:50',
                'district'=>'required|string|max:50',
                'type'=>'required|string',
                'rooms'=>'required|numeric|min:1|max:9',
                'bath_rooms'=>'required|string|max:50',
                'water_price'=>'required|string|max:50',
                'area' =>'required|numeric',
                'internet'=>'required|string|max:50',
                'price'=>'required|string|max:50',
                'air_cond'=>"required|boolean",
                'bancony'=>"required|boolean",
                'general_owner'=>"required|boolean",
                'remain'=>'required|boolean',
                'files'=>'required|array|min:3',
                'kitchen'=>'required|string',
                'electric_price'=>'required|string|max:50',
                'price_unit'=>'required|string|max:50',
                'internet_price_unit'=>'required|string|max:50'
            ]);
    
            if($validator->fails()){
                return response()->json($validator->errors()->toJson(), 400);
            }
            $existCity = City::where('city','=',$request['city'])->get();
            if(count($existCity) >0){
                $id = $existCity[0]['id'];
                $existDistrict = District::where('district','=',$request['district'])
                                        ->where('city_id','=',$id) ->get();
                if(count($existDistrict)>0){
                   $checkType = Type::where('type','=',$request['type'])->get();
                   if(count($checkType)>0){   
                       // insert into db
                       // get auto increment id
                       $address = new Address (
                           [
                               'city' => $request['city'] ,
                               'district'=>$request['district'],
                               'address'=>$request['address']
                           ]
                       );
                       $address->save();
                       $facilities = new Facilities(
                           [
                               'air_cond'=>$request['air_cond'],
                               'area'=>$request['area'],
                               'bath_rooms' =>$request['bath_rooms'],
                               'kitchen'=>$request['kitchen'],
                               'internet'=>$request['internet'],
                               'other'=>$request['other'],
                               'price'=>$request['price'],
                               'rooms'=>$request['rooms'],
                               'water_price'=>$request['water_price'],
                               'electric_price' =>$request['electric_price'],
                               'bancony'=>$request['bancony'],
                               'general_owner'=>$request['general_owner'],
                               'price_unit'=>$request['price_unit'],
                               'internet_price_unit' =>$request['internet_price_unit']
                           ]
                           );
                       $facilities->save();
                       $react = new React(
                           [
                               'like_number'=>0,
                               'report_number'=>0,
                               'favourite_number'=>0,
                               'user_id'=>$id
                           ]
                       );
                       $react->save();
                       $type_id = Type::where('type','=',$request['type'])->value('id');
                       $post = new Post([
                           'address_id'=>$address['id'],
                           'user_id'=>$user_id,
                           'description'=>$request['description'],
                           'facilities_id'=>$facilities['id'],
                           'react_id'=>$react['id'],
                           'status'=>1,
                           'title'=>$request['title'],
                           'isRecommended'=>0,
                           'remain'=>$request['remain'],
                           'type_id'=>$type_id
                       ]);
                       $post->save();
                       $data = $request->file('files');
                       foreach ($data as $key => $file) {
                           $file->move(public_path('uploads/img_post'), $file->getClientOriginalName());
                           $image = new Image([
                               'img_src'=>$file->getClientOriginalName(),
                               'post_id'=>$post['id'],
                               'isDisplay'=>1
                           ]);
                           $image->save();
                       };
                   return $post;
                   return response() ->json('success',201);

                   }
                    return response() ->json('type not found',401);
                }
                else{ return response()->json('district is not exist!');}
            }
            else{ return response()->json('city is not exist!');}
        }
        if(count($checkOwner)>0){
             $validator = Validator::make($request->all(), [
                 'title'=>'required|string|max:255',
                 'address'=>'required|string|max:255',
                 'description' =>'required|string|max:255',
                 'city' =>'required|string|max:50',
                 'district'=>'required|string|max:50',
                 'type'=>'required|string',
                 'rooms'=>'required|numeric|min:1|max:9',
                 'bath_rooms'=>'required|string|max:50',
                 'water_price'=>'required|string|max:50',
                 'area' =>'required|numeric',
                 'internet'=>'required|string|max:50',
                 'price'=>'required|string|max:50',
                 'air_cond'=>"required|boolean",
                 'bancony'=>"required|boolean",
                 'general_owner'=>"required|boolean",
                 'remain'=>'required|boolean',
                 'files'=>'required|array|min:3',
                 'kitchen'=>'required|string',
                 'electric_price'=>'required|string|max:50',
                 'price_unit'=>'required|string|max:50',
                 'internet_price_unit'=>'required|string|max:50'
             ]);
     
             if($validator->fails()){
                return response()->json($validator->errors()->toJson(), 400);
            }
            $existCity = City::where('city','=',$request['city'])->get();
            if(count($existCity) >0){
                $id = $existCity[0]['id'];
                $existDistrict = District::where('district','=',$request['district'])
                                        ->where('city_id','=',$id) ->get();
                if(count($existDistrict)>0){
                   $checkType = Type::where('type','=',$request['type'])->get();
                   if(count($checkType)>0){   
                       // insert into db
                       // get auto increment id
                       $address = new Address (
                           [
                               'city' => $request['city'] ,
                               'district'=>$request['district'],
                               'address'=>$request['address']
                           ]
                       );
                       $address->save();
                       $facilities = new Facilities(
                           [
                               'air_cond'=>$request['air_cond'],
                               'area'=>$request['area'],
                               'bath_rooms' =>$request['bath_rooms'],
                               'kitchen'=>$request['kitchen'],
                               'internet'=>$request['internet'],
                               'other'=>$request['other'],
                               'price'=>$request['price'],
                               'rooms'=>$request['rooms'],
                               'water_price'=>$request['water_price'],
                               'electric_price' =>$request['electric_price'],
                               'bancony'=>$request['bancony'],
                               'general_owner'=>$request['general_owner'],
                               'price_unit'=>$request['price_unit'],
                               'internet_price_unit' =>$request['internet_price_unit']
                           ]
                           );
                       $facilities->save();
                       $react = new React(
                           [
                               'like_number'=>0,
                               'report_number'=>0,
                               'favourite_number'=>0,
                               'user_id'=>$id
                           ]
                       );
                       $react->save();
                       $type_id = Type::where('type','=',$request['type'])->value('id');
                       $post = new Post([
                           'address_id'=>$address['id'],
                           'user_id'=>$user_id,
                           'description'=>$request['description'],
                           'facilities_id'=>$facilities['id'],
                           'react_id'=>$react['id'],
                           'status'=>2,
                           'title'=>$request['title'],
                           'isRecommended'=>0,
                           'remain'=>$request['remain'],
                           'type_id'=>$type_id
                       ]);
                       $post->save();
                       $data = $request->file('files');
                       foreach ($data as $key => $file) {
                           $file->move(public_path('uploads/img_post'), $file->getClientOriginalName());
                           $image = new Image([
                               'img_src'=>$file->getClientOriginalName(),
                               'post_id'=>$post['id'],
                               'isDisplay'=>1
                           ]);
                           $image->save();
                       };
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
                          4,
                          'one post is waiting now',
                          $post
                      ];
                      $pusher->trigger('manager', 'action', $data);
                      $currentReceiveNotice = User::where('id','=',$post['user_id'])->get();
                      $notice = $currentReceiveNotice[0]['not_seen_notice'];
                      $notice++;
                      User::where('id','=',$post['user_id'])->update([
                          'not_seen_notice'=> $notice,
                      ]);
                      // update table notifications => content
                      $notification = new Notification([
                          'type'=> 4,
                          'content' => 'one post is disabled now',
                          'user_id'=>$currentReceiveNotice[0]['id'],
                          'post_id' =>$post['id']
                      ]);
                      $notification ->save();
                   return $post;
                   return response() ->json('success',201);

                   }
                    return response() ->json('type not found',401);
                }
                else{ return response()->json('district is not exist!');}
            }
            else{ return response()->json('city is not exist!');}

         }
    }
     return response() -> json('you are log out or city is not exist!');
    }
    // edit post
    public function edit(Request $request, $post_id)
    {
        if(JWTAuth::parseToken()->authenticate()){
            $user_id = (JWTAuth::parseToken()->authenticate())['id'];
            $user = User::where('id','=',$user_id)->get();
             $validator = Validator::make($request->all(), [
                 'title'=>'required|string|max:255',
                 'address'=>'required|string|max:255',
                 'description' =>'required|string|max:255',
                 'city' =>'required|string|max:50',
                 'district'=>'required|string|max:50',
                 'type'=>'required|string',
                 'rooms'=>'required|numeric|min:1|max:9',
                 'bath_rooms'=>'required|string|max:50',
                 'water_price'=>'required|string|max:50',
                 'area' =>'required|numeric',
                 'internet'=>'required|string|max:50',
                 'price'=>'required|string|max:50',
                 'air_cond'=>"required|boolean",
                 'bancony'=>"required|boolean",
                 'general_owner'=>"required|boolean",
                 'remain'=>'required|boolean',
                 'kitchen'=>'required|string',
                 'electric_price'=>'required|string|max:50',
                 'imgDeleteId'=>'required|array',
                 'files'=>'required|array',
                 'post_id'=>'required|numeric'
             ]);
     
             if($validator->fails()){
                 return response()->json($validator->errors()->toJson(), 400);
             }
             $countImageInDB = Image::where('post_id','=',$post_id)->where('isDisplay','=',1)->count();
             if(count($request['imgDeleteId'])>1 && ($countImageInDB+count($request['files'])-count($request['imgDeleteId']))<3){
                return response() ->json('select at least 3 images',400);
            }
             $existCity = City::where('city','=',$request['city'])->get();
             if(count($existCity) >0){
                 $id = $existCity[0]['id'];
                 $existDistrict = District::where('district','=',$request['district'])
                                         ->where('city_id','=',$id) ->get();
                 if(count($existDistrict)>0){
                    $checkType = Type::where('type','=',$request['type'])->get();
                    if(count($checkType)>0){   
                        // update into db
                        // get auto increment id
                        $posts = Post::where('id','=',$post_id)->get();
                        $post =$posts[0];
                        $address_id = $post['address_id'];
                        $facilities_id = $post['facilities_id'];
                        $address = Address::where('id','=',$address_id);
                        $address ->update([
                            'city'=>$request['city'],
                            'district'=>$request['district'],
                            'address'=>$request['address']
                        ]);
                        // facilities
                        $facilities = Facilities::where('id','=',$facilities_id);
                        $facilities->update([
                            'air_cond' => $request['air_cond'],
                            'area' => $request['area'],
                             'bath_rooms' => $request['bath_rooms'],                             
                             'kitchen' => $request['kitchen'],
                             'other' => $request['other'],
                             'price' => $request['price'],
                            'rooms' => $request['rooms'],
                            'water_price' => $request['water_price'],
                            'electric_price' => $request['electric_price'],
                            'bancony' => $request['bancony'],
                            'general_owner' =>$request['general_owner'],
                            'price_unit' => $request['price_unit'],
                            'internet_price_unit' => $request['internet_price_unit']

                        ]);
                        $type_id = Type::where('type','=',$request['type'])->value('id');
                        
                        $post-> description=$request['description'];
                        $post-> title=$request['title'];
                        $post-> type_id=$type_id;
                        $post->save();

                        $imgDeleteId = $request['imgDeleteId'];
                        if($request['imgDeleteId'][0]!= ""){
                            foreach($imgDeleteId as $key => $id){
                                $image = Image::where('id','=',$id);
                                $image ->update([
                                    'isDisplay'=>0
                                ]);
                            }
                        }
                        $data = $request->file('files');
                        if($request['files'][0]!=null){
                            foreach ($data as $key => $file) {
                                $file->move(public_path('uploads/img_post'), $file->getClientOriginalName());
                                $image = new Image([
                                    'img_src'=>$file->getClientOriginalName(),
                                    'post_id'=>$post['id'],
                                    'isDisplay'=>1
                                ]);
                                $image->save();
                            };
                        }
                    return response() ->json('success',201);

                    }
                     return response() ->json('type not found',401);
                 }
                 else{ return response()->json('district is not exist!');}
             }
             else{ return response()->json('city is not exist!');}

         }
         return response() -> json('you are log out or city is not exist!');
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
        //delete post
        if(JWTAuth::parseToken()->authenticate()){
                $user_id = (JWTAuth::parseToken()->authenticate())['id'];
                $user = User::where('id','=',$user_id)->get();
                $post = Post::where('id','=',$id)->get();
                $post[0] -> status = -1;// disable = delete post
                $post[0] -> save();
                return response() ->json('delete success',200);
             }
             return response() -> json('you are log out or city is not exist!');
        

    }
}
