import {chats} from './../actions/post_action';
import Pusher from 'pusher-js';
import {connect} from 'react-redux';
export const  listenChatChannel = () =>{
    let pusher = new Pusher('86ff88e2747664ae84f1', {
        cluster: 'ap3'
      });
      let channel = pusher.subscribe('chat-channel');
      channel.bind('send-message', (data) =>{
        const chat = {
            content:data[0],
            email:data[1]
        }
        console.log(this)
        // this.props.fetchChats(chat);
      });
}
const mapDispatchToProps = (dispatch,props)=>{
    // fetchChats:(data) =>{
    //     dispatch(chats(data))
    // }
}
export default connect(null,mapDispatchToProps)(listenChatChannel);