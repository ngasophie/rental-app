<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Pusher\Pusher;
use Validator;
use App\Conversation;
use App\Chat;
use App\User;
use App\Notification;
class SendMessageController extends Controller
{
    public function index()
    {
        return view('send_message');
    }
    // get message per owner
  
    public function sendMessage(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'owner_email' => 'required|email',
            'other_email' => 'email',
            'content' => 'required|string',
            'user_id' => 'required'
        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }
        $checkAdmin = User::where('email','=',$request['owner_email'])
                            ->where('role','=',2)->get();
        $other_email = $request['other_email'];
        $checkConversation = '';
        if(count($checkAdmin)>0){
            $owner_email = $request['owner_email'];
            $other_email = $request['other_email'];
            $checkConversation = Conversation
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
            $result = User::where('role','=',2)->get();
            $other_email = $result[0]['email'];
            $owner_email = $request['owner_email'];
                $checkConversation = Conversation
                ::where(function ($query) use ($owner_email){
                    $query->where('owner_email', '=', $owner_email)
                          ->orWhere('other_email', '=', $owner_email);
                }) ->get();
        }
        $id = 0;
        if(count($checkConversation) == 0){
            $conversation = new Conversation([
                'owner_email' =>$request['owner_email'],
                'other_email'=>$other_email,
                'user_id' =>$request['user_id']
            ]);
            $conversation->save();
            $id = $conversation['id'];
        }
        else{
            $id = $checkConversation[0]['id'];
        }
        $chat = new Chat ([
            'content' =>$request['content'],
            'owner_email'=>$request['owner_email'],
            'conversation_id'=>$id
        ]);
        $chat->save();
        
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
        $request['content'],
        $request['owner_email'],
        $request['other_email'],
        $id
    ];
//    save to database
// update not_seen_notice
    $currentReceiveMes = User::where('email','=',$other_email)->get();
    $user_id = $currentReceiveMes[0]['id'];
    $notice = $currentReceiveMes[0]['not_seen_notice'];
    $notice++;
    User::where('email','=',$other_email)->update([
        'not_seen_notice'=> $notice
    ]);
// update table notifications => content
    $notification = new Notification([
        'type'=> 1,
        'content' => 'you have a message',
        'user_id'=>$user_id
    ]);
    $notification ->save();
  $pusher->trigger('chat-channel', 'send-message', $data);
        return $request;
    }
}
