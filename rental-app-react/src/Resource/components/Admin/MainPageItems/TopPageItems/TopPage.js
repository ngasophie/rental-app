import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import Pusher from 'pusher-js';
import {seenNotice} from './../../../../actions/dashboardAction/getAction'

import { actDispatchIdUser } from './../../../../actions/dashboardAction/getAction';
class TopPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            notifications:0,
            eventNotice:[]
        }
    }
    viewNotice = () =>{
        seenNotice();
        this.setState({
            notifications:0,
        })
    }
    onClick = () =>{
//  log out
        sessionStorage.removeItem('owner/admin-login');
        sessionStorage.removeItem('user-login');
        this.props.dispatchIdUser(null);
    }
    render(){
        let{owner, img_src} = this.props;
        let {eventNotice, notifications} = this.state;
        console.log(notifications)
        if(notifications == 0) {notifications = '';}
        img_src= img_src.concat('avt');
        let listNotice = '';
        if(eventNotice.length != 0){
            listNotice = eventNotice.map((value,index)=>{
                if(!value.post ) 
                return <div className="dropdown-item" >{value.content}</div>
                return  <Link to={`/dashboard/view-post/${value.post.id}`} className="dropdown-item" >{value.content}</Link>

            })
        }
        return(
            <div className="top">
            <div className="container">
                <div className="toggle-collapse">
                    <div className="toggle-icons">
                        <i className="fas fa-bars"></i>
                    </div>
                </div> 
                <div>
                   
                <div className="dropdown">
                           <button className="admin-action notification" 
                           type="button" id="dropdownMenuButton" data-toggle="dropdown" 
                           aria-haspopup="true" aria-expanded="false"
                           onClick = {this.viewNotice}
                           >
                               <i className="far fa-bell"></i>
                               <span class="badge">{notifications}</span>
                           </button>
                       <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                           {listNotice}
                        </div>
                   </div>
                </div>
                <div>
                </div>
                <div className="avt"><img src={`${img_src}/${owner.img_src}`} alt=""/></div>
                <div className="dropdown">
                    <button className="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                     {owner.name}
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <Link to ='/dashboard/admin/profile' className="dropdown-item" >Profile details</Link>
                      <button className="dropdown-item" onClick={this.onClick}>
                         Log out
                          </button>
                    </div>
                  </div>
            </div>
        </div>
        )
    }
    componentDidMount(){
        const {owner} = this.props;
        let notificationNotSeen = owner.not_seen_notice;
        let eventNS = owner.notification;
        this.setState({
            notifications:notificationNotSeen,
            eventNotice:eventNS
        })
        let pusher = new Pusher('86ff88e2747664ae84f1', {
            cluster: 'ap3'
          });
          let channel = pusher.subscribe('manager');
          channel.bind('action', (data) =>{
              let {notifications,eventNotice} = this.state;
              console.log(owner)
              if(data[0]== 5 || data[0]==4||data[0]==2){
                  notifications +=1;
                  let notice = {};
                  notice.content = data[1];
                  notice.post = data[2];
                  eventNotice.push(notice);
                  this.setState({notifications,eventNotice})
               console.log(data);

              }
          });
    }
}
const mapStateToProps= state =>{
    return {
        owner:state.owner,
        img_src:state.img_src
    }
}
const mapDispatchToProps = (dispatch, props) =>{
    return{
        dispatchIdUser:(owner) =>{
            dispatch(actDispatchIdUser(owner))
        }
        
    };
}
export default connect(mapStateToProps,mapDispatchToProps) (TopPage);