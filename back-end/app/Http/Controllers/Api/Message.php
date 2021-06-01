<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Conversation;
use App\Chat;
use Validator;
use App\User;
use App\Notification;
class Message extends Controller
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
    public function getMessages(Request $request){
        $validator = Validator::make($request->all(), [
            'owner_email' => 'required|email',
            'other_email' => 'email'
        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }
        //  check admin
        $checkAdmin = User::where('email','=',$request['owner_email'])
                        -> where('role','=',2)->get();
        $conversation = '';
        if(count($checkAdmin)>0){
            $owner_email = $request['owner_email'];
        $other_email = $request['other_email'];
            $conversation = Conversation
            ::where(function ($query) use ($owner_email){
                $query->where('owner_email', '=', $owner_email)
                      ->orWhere('other_email', '=', $owner_email);
            })
            ->where(function($query) use($other_email){
                    $query -> where('other_email','=',$other_email)
                            -> orWhere('owner_email','=',$other_email);
            })
            ->get();
        }
        else{
            $owner_email = $request['owner_email'];
                $conversation = Conversation
                ::where(function ($query) use ($owner_email){
                    $query->where('owner_email', '=', $owner_email)
                          ->orWhere('other_email', '=', $owner_email);
                }) ->get();
        }
        $data =[];
        $id = 0;
        if(count($conversation) == 0){
            return $data;
        }
        else{
            $id = $conversation[0]['id'];
            $chat = Chat::where('conversation_id','=',$id)->get();
            return $chat; 
        }
    }
    public function getConversations (Request $request){
        $conversations = Conversation::with('user','chat')->orderBy('created_at')->get();
        return $conversations;
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
