<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Auth;
use App\User;
use Validator;
use App\City;
use App\District;
use App\Address;
use Pusher\Pusher ;
use App\Notification;
class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct() {
        $this->middleware('auth:api', ['except' => 
        ['login', 'register',
        'logout',
        'logoutAsOwner',
        'loginAsOwner',
        'registerAsOwner'
        ]]);
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request){
        
    	$validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|string|min:6',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        if (! $token = auth()->attempt($validator->validated())) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return $this->createNewToken($token);
    }
    public function loginAsOwner(Request $request){
        
    	$validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|string|min:6',
            'role'=>'required'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        if (! $token = auth()->attempt($validator->validated())) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return $this->createNewToken($token);
    }

    /**
     * Register a User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(Request $request) {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|between:2,100',
            'email' => 'required|string|email|max:100|unique:users',
            'password' => 'required|string|confirmed|min:6',
        ]);

        if($validator->fails()){
            return response()->json($validator->errors()->toJson(), 400);
        }

        $user = User::create(array_merge(
                    $validator->validated(),
                    ['password' => bcrypt($request->password)]
                ));

        return response()->json([
            'message' => 'User successfully registered',
            'user' => $user
        ], 201);
    }
    public function registerAsOwner(Request $request) {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|between:2,100',
            'email' => 'required|string|email|max:100|unique:users',
            'password' => 'required|string|confirmed|min:6',
            'city'=>'required|string|max:255',
            'district'=>'required|string|max:255',
            'address'=>'required|string|max:255',
            'description'=>'required|string|max:255',
            'phone_number'=>'required|digits_between:8,10',
            'identification'=>'required|digits_between:7,13',
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
                   $user = new User([
                       'name'=>$request['name'],
                       'email' =>$request['email'],
                       'address_id'=>$address['id'],
                       'identification'=>$request['identification'],
                       'phone_number'=>$request['phone_number'],
                       'description'=>$request['description'],
                       'role'=>1,
                       'status'=>2,
                       'password'=> bcrypt($request['password'])
                   ]);
                   $user ->save();
                   $data = $request->file('files');
                    if($data[0]!=null){
                        foreach ($data as $key => $file) {
                            $file->move(public_path('uploads/avt'), $file->getClientOriginalName());
                             User::where('id','=',$user_id)
                            ->update([
                                'img_src'=>$file->getClientOriginalName(),
                            ]);
                        }
                    }
            //  notification
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
                $user_id = $user['id'];
                $data = [
                    'type'=>2,
                    'one owner is register now',
                    $user_id
                ];
                $pusher->trigger('owner', 'register', $data);
                $currentReceiveNotice = User::where('role','=',2)->get();
                $notice = $currentReceiveNotice[0]['not_seen_notice'];
                $notice++;
                User::where('id','=',$currentReceiveNotice[0]['id'])->update([
                    'not_seen_notice'=> $notice,
                ]);
                // update table notifications => content
                $notification = new Notification([
                    'type'=> 2,
                    'content' => 'one owner is waiting to be accepted',
                    'user_id'=>$currentReceiveNotice[0]['id'],
                    'owner_id'=>$user_id
                ]);
                $notification ->save();
               return response() ->json('success',201);
               }
            else{ return response()->json('district is not exist!');}
        }
        else{ return response()->json('city is not exist!');}
        return response()->json([
            'message' => 'User successfully registered',
            'user' => $user
        ], 201);
    }


    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout() {
        auth()->logout();

        return response()->json(['message' => 'User successfully signed out']);
    }
    public function logoutAsOwner() {
        auth()->logout();

        return response()->json(['message' => 'User successfully signed out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh() {
        return $this->createNewToken(auth()->refresh());
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function userProfile() {
        return response()->json(auth()->user());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function createNewToken($token){
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60*60*24,
            'user' => auth()->user()
        ]);
    }

}