import React, {Component} from 'react';
import {connect} from 'react-redux';
class Avatar extends Component{
    constructor(props){
        super(props)
    }
    render(){
        let {img_src,owner} = this.props;
        img_src = img_src.concat('avt')
        return(
            <div className="title">
            <div className="avt"><img src={`${img_src}/${owner.img_src}`} alt=""/></div>
            <div className="name">{owner.name}</div>
        </div>
        )
    }
}
const mapStateToProps = state =>{
    return {
        img_src:state.img_src,
        owner:state.owner
    }
}
export default connect(mapStateToProps,null) (Avatar);