import React, {Component} from 'react';
import  MessageMine from './MessageMine';
import MessageOther from './MessageOther';
import Pusher from 'pusher-js';
import {connect} from 'react-redux';
import {sendMessage} from './../../../../actions/post_action';
import {getMessages} from './../../../../actions/post_action';
import {ADMIN_EMAIL} from './../../../../constants/actionTypes';
class FormChat extends Component{
    constructor(props){
        super(props);
        this.state = {
            content:'',
            chats:[]
        }
    }
    onChange = (event) =>{
        let {content} = this.state;
        content = event.target.value;
        this.setState({content})
    }
    onSubmit = (event) =>{
        const {user,messages} = this.props;
        let owner_email = user.email;
        event.preventDefault();
        const {chats,content}= this.state;
        if(content!=''){
            let conversationId = messages[0].conversation_id
            chats.push({content,owner_email,conversationId});
            //  call api
            sendMessage({
                content:content,
                owner_email:user.email,
                user_id:user.id
            })
        }
        this.setState({
            content:''
        })
    }
    render(){
        const {chats}= this.state;
        const {user,messages}= this.props;
        let listChat = chats.map((value,index)=>{
            if(messages && (value.conversationId == messages[0].conversation_id )){
                if(value.owner_email!= user.email){
                    return <MessageOther content={value.content} key={index}/>
                }
                else{
                    return <MessageMine content = {value.content} key={index}/>
                }
            }
            else if(messages && messages.length==0){
                return <MessageMine content = {value.content} key={index}/>

            }
        });
        let listMessage='';
        if(messages){
             listMessage = messages.map((value,index)=>{
                if(value.owner_email!= user.email){
                    return <MessageOther content={value.content} key={index}/>
                }
                else{
                    return <MessageMine content = {value.content} key={index}/>
                }
            })
        }
        return(
            <div className="chat">
            <div className="message-box">
                {listMessage}
                {listChat}
            </div>
            <form id="form-add-message" onSubmit = {this.onSubmit}>
                <input type="text" placeholder="message" onChange = {this.onChange} value={this.state.content}/>
                <button type="submit"><i className="fas fa-paper-plane"></i></button>
            </form>
        </div>
        );
    }
    componentDidMount(){
        let {chats} = this.state;
        const {user} = this.props;
        let pusher = new Pusher('86ff88e2747664ae84f1', {
            cluster: 'ap3'
          });
          let channel = pusher.subscribe('chat-channel');
          channel.bind('send-message', (data) =>{
            const chat = {
                content:data[0],
                owner_email:data[1],
                other_email:data[2],
                conversationId : data[3]
            }
            if(chat.owner_email!= user.email){
                chats.push(chat);
                this.setState({chats})
            }
        });
    }
}
const mapStateToProps = state=>{
    console.log(state)
    return{
        user:state.owner,
        messages:state.messages
    }
}

export default connect(mapStateToProps,null) (FormChat);