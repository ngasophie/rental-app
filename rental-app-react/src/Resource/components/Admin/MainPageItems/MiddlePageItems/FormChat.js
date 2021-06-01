import React, {Component} from 'react';
import MessageMine from './MessageMine';
import MessageOther from './MessageOther';
import Conversation from './Conversation';
import Pusher from 'pusher-js';
import {sendMessage} from './../../../../actions/post_action';
import {getMessages} from './../../../../actions/post_action'
import {connect} from 'react-redux';
let isFirst = true;
class FormChat extends Component{
    constructor(props){
        super(props);
        this.state = {
            content:'',
            messagesActive:[],
            listenChat:[],
            chats:[],
            conversationActive:{},
            isChoose:'',
            conversationIndex:'',
            otherEmailActive:'',
        }
    }
    onChange = (event) =>{
        let {content} = this.state;
        content = event.target.value;
        this.setState({content})
    }
    onClick = (index)=>{
        let {conversations,user} = this.props;
        let {conversationActive,chats} = this.state;
        let isChoose = 'conversation-active';
        let messagesActive = conversations[0][index].chat;
        let conversationIndex=index;
        let otherEmailActive='';
        conversationActive = conversations[0][index]
        if(conversations[0][index].owner_email == user.email){
            otherEmailActive = conversations[0][index].other_email;
        }
        else{
            otherEmailActive = conversations[0][index].owner_email;
        }
        chats = [];
        let owner_email = user.email;
        let other_email = otherEmailActive
        this.props.fetchChats({owner_email,other_email})
        this.setState({
            isChoose,
            messagesActive,
            conversationIndex,
            otherEmailActive,
            conversationActive,
            chats
        });

    }
    onSubmit = (event) =>{
        event.preventDefault();
        const {conversations,user} = this.props
        let {chats,content,otherEmailActive,conversationActive}= this.state;
        let id = '';
        if(otherEmailActive == ''){
            if(conversations[0][0].owner_email == user.email){
                otherEmailActive = conversations[0][0].other_email;
            }
            else{
                otherEmailActive = conversations[0][0].owner_email;
            }
        }
        if(conversationActive.id){
            id = conversationActive.id
        }
        else{
            id = conversations[0][0].id;
            conversationActive = conversations[0][0]
        }
        const owner_email=user.email;
        if(content!=''){
            chats.push({content,owner_email,id})
        }
        sendMessage({
            content:content,
            owner_email:user.email,
            other_email:otherEmailActive,
            user_id :user.id
        })
        this.setState({
            content:'',
            owner_email:user.email,
            chats,
            conversationActive
        })
        
    }
    render(){
        let {chats,isChoose,conversationIndex,conversationActive,messagesActive} = this.state;
        let {user,conversations,messages} = this.props;
        let {img_src} = this.props;
        img_src = img_src.concat('avt');
        console.log(chats)
        if(messagesActive.length == 0 && conversations){
            messagesActive = conversations[0][0].chat;
            conversationActive = conversations[0][0]
        }
        if(isFirst&&conversations){
            messages = conversations[0][0].chat;
            isFirst= false;
            conversationActive = conversations[0][0]
            // messages = this.props.fetchChats({owner_email,other_email})
        }
        let otherInf = {
            img_src:'',
            email:'',
            name:''
        };
        if(conversationActive.id){
            if(conversationActive.owner_email == user.email){
                otherInf.email = conversationActive.other_email
            }
            else{
                otherInf.email = conversationActive.owner_email
            }

            otherInf.img = conversationActive.user.img_src;
            otherInf.name = conversationActive.user.name;
        }
        let listMessage = '';
        if(messages){
            listMessage = messages.map((value,index)=>{
                if(value.owner_email!= user.email){
                    return <MessageOther content={value.content}/>
                }
                else{
                    return <MessageMine content={value.content}/>
                }
            })
        }
        let listChat = chats.map((value,index)=>{
            if(value.id == conversationActive.id){
                if(value.owner_email!= user.email){
                    return <MessageOther content={value.content}/>
                }
                else{
                    return <MessageMine content={value.content}/>
                }
            }
        })
        let listConversations='';
        if(conversations){
            listConversations=conversations[0].map((value,index)=>{
                if(value.owner_email!= user.email){
                    if(index == conversationIndex){
                        return <Conversation 
                        id = {index}
                        img = {`${img_src}/${value.user.img_src}`}
                        user_name = {value.user.name}
                        email = {value.user.email}
                        key={index}
                        admin = {user}
                        onClick = {this.onClick}
                        className = "conversation-active"
                        />
                    }
                    else{
                        return <Conversation 
                        id = {index}
                        img = {`${img_src}/${value.user.img_src}`}
                        user_name = {value.user.name}
                        email = {value.user.email}
                        key={index}
                        admin = {user}
                        onClick = {this.onClick}
                        className = ""
                        />
                    }
                }
            })
        }
        return(
        <div className = 'form-chat'>
            <div className='conversation-box'>
                <div className='my-inf'>
                    {/* <div className="avt">
                        <img src={`${img_src}/${user.img_src}`}alt=""/>
                    </div>
                    <div className = 'left-content'>
                        <div className='user-name'>
                        {user.name}
                        </div>
                        <div className='email'>{user.email}</div>
                    </div> */}
                   <i className="fas fa-comments" aria-hidden="true"></i> Conversations
                </div>
                <div className = 'conversations'>
                   
                   {listConversations}
                </div>
            </div>
            <div className="chat">
                <div className='other-inf'>
                    <div className='avt'>
                        <img src={`${img_src}/${otherInf.img}`} alt=""/>
                    </div>
                    <div className = 'left-content'>
                        <div className='user-name'>{otherInf.name}</div>
                        <div className='email'>{otherInf.email}</div>
                    </div>
                </div>
            <div className="message-box">
                {listMessage}
                    {listChat}
            </div>
            <form id="form-add-message" onSubmit = {this.onSubmit}>
                <input type="text" placeholder="message" onChange={this.onChange} value ={this.state.content}/>
                <button type="submit"><i className="fas fa-paper-plane"></i></button>
            </form>
        </div>
    </div>
        );
    }
    componentDidMount(){
        
        let pusher = new Pusher('86ff88e2747664ae84f1', {
            cluster: 'ap3'
          });
          let channel = pusher.subscribe('chat-channel');
          channel.bind('send-message', (data) =>{
            const {chats} = this.state;
            const {user}= this.props;
            const chat = {
                content:data[0],
                owner_email:data[1],
                other_email:data[2],
                id : data[3]
            }
            if(chat.owner_email!= user.email){
                chats.push(chat);
                this.setState({chats})
            }
          });
    }
}
const mapStateToProps = (state) =>{
    console.log(state);
    return {
        user:state.owner,
        conversations:state.conversations,
        img_src:state.img_src,
        messages:state.messages
    }
}
const mapDispatchToProps = (dispatch,props) =>{
    return {
        fetchChats :(data)=>{
            dispatch(getMessages(data))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (FormChat);