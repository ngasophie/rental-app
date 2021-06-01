<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use JWTAuth;
use App\User;
use DB;
use Validator;
use App\City;
use App\District;
use App\Address;
use App\Image;
use App\Post;
class ProfileDetails extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        if(JWTAuth::parseToken()->authenticate()){
            $id = (JWTAuth::parseToken()->authenticate())['id'];
            $user = User::with('address','notification')
            // ->join('address','users.address_id','=','address.id')
            ->where('users.id','=',$id)->get();
            $userRes = [
                $user[0],
                $user[0]['address']
            ];
            return $userRes;
        }
        return '';
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
        //update
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
    public function update(Request $request)
    {
        if(JWTAuth::parseToken()->authenticate()){
           $user_id = (JWTAuth::parseToken()->authenticate())['id'];
           $user = User::where('id','=',$user_id)->get();
           $address_id = $user[0]['address_id'];
            $validator = Validator::make($request->all(), [
                'name' => 'required|string|max:50',
                'address'=>'required|string|max:255',
                'city' =>'required|string|max:50',
                'district'=>'required|string|max:50',
                'identification'=>'required|digits:9',
                'phone_number'=>'required|digits_between:8,10'
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
                    $data = $request->file('files');
                    if(count($data)>0 &&$data[0]!=null){
                        foreach ($data as $key => $file) {
                            $file->move(public_path('uploads/avt'), $file->getClientOriginalName());
                             User::where('id','=',$user_id)
                            ->update([
                                'img_src'=>$file->getClientOriginalName(),
                            ]);
                        };
                    }
                    User::where('id','=',$user_id)
                        ->update(['name'=>$request['name'],'identification'=>$request['identification'],
                                 'phone_number'=>$request['phone_number'],'description'=>$request['description'],
                        ]);
                    Address::where('id','=',$address_id)->update([
                        'city'=>$request['city'],
                        'district'=>$request['district'],
                        'address'=>$request['address']
                    ]);                    
                    return response() ->json('update success',200);
                }
            }
            return response()->json('district is not exist!');
        }
        return response() -> json('you are log out or city is not exist!');
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
    // owner-profile
    public function ownerProfile($id){
        $owner = User::with('address')->where('id','=',$id)->get();
        $posts = Post::with('address','facilities','type')
                ->where('user_id','=',$owner[0]['id'])->orderBy('created_at','desc')->paginate(6);
        $data = [
            $owner[0],
            $posts
        ];
        return $data;

    }
    public function viewNotice (Request $request){
        if(JWTAuth::parseToken()->authenticate()){
            $user_id = (JWTAuth::parseToken()->authenticate())['id'];
            $user = User::where('id','=',$user_id);
            $user->update([
                'not_seen_notice'=>0
            ]);
            $user = User::with('address','notification')
            // ->join('address','users.address_id','=','address.id')
            ->where('id','=',$user_id)->get();
            $userRes = [
                $user[0],
                $user[0]['address']
            ];
            return $userRes;
        }
    }
}
