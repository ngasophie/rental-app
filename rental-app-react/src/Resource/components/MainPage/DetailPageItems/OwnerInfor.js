import React, {Component} from 'react';
import {connect} from 'react-redux';
class OwnerInfor extends Component{
    constructor(props){
        super(props);
    }
    render(){
        // 
        let {owner, img_src} = this.props;
        img_src = img_src.concat('avt')
        return(
            <div className="owner-infor">
            <div className="title">Agent infor</div>
            <div clasName="top">
            <div className="avt"><img src={`${img_src}/${owner.img_src}`} alt=""/></div>
            <div className="name">{owner.name}</div>

            </div>
            <div className="phone infor">
                <i className="fas fa-phone-alt"></i>
                <span>{owner.phone_number}</span>
            </div>
            <div className="email infor">
                <i className="far fa-envelope"></i>
                <span>{owner.email}</span>
            </div>
        </div>
         )
    }
}
const mapStateToProps = state =>{
    return {
        img_src : state.img_src
    }
}
export default connect(mapStateToProps,null) (OwnerInfor);