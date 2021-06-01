import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getMessages} from './../../../../actions/post_action';
export  class Conversation extends Component{
    constructor(props){
        super(props);
        this.state = {
            isChoose : ''
        }
    }
    onClick = (id)=>{
        this.props.onClick(id)
    }
    render(){
        const {img, user_name, email,className,id} = this.props
        return(
              <div className={`conversation ${className}`} onClick={() => this.onClick(id)}>
                    <div className='avt'>
                        <img src={img} alt=""/>
                    </div>
                    <div class="left-content">
                        <div className='user-name'>{user_name}</div>
                        <div className='email-chat'>{email}</div>
                    </div>
                </div>
        )
    }
}
const mapDispatchToProps = (dispatch,props) =>{
    return {
        fetchChats :(data)=>{
            dispatch(getMessages(data))
        }
    }
}
export default connect(null,mapDispatchToProps)(Conversation);