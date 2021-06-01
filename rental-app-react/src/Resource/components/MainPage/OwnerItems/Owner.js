import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
class Owner extends Component{
    constructor(props){
        super(props);
    }
    onClick = (id)=>{
        console.log(id);
    }
    render(){
        let {item, img_src} = this.props
        img_src = img_src.concat('avt');
        let id = item.id
        //  avatar thay sau
        return(
            // <Link to = {`/owner-detail/${item.id}`}>

            <div className="card" data-aos="flip-left" onClick = {()=>this.onClick(id)} >
            <img className="d-block w-100" src={`${img_src}/${item.img_src}`}/>
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <div className="details">
                <div className="location infor">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>{item.address.city}</span>
                </div>
                <div className="phone infor">
                    <i className="fas fa-phone-alt"></i>
                    <span>{item.phone_number}</span>
                </div>
                <div className="email infor">
                    <i className="far fa-envelope"></i>
                    <span>{item.email}</span>
                </div>
              </div>
            </div>
        </div>
            // </Link>
        )
    }
}
const mapStateToProps = state =>{
    return {
        img_src : state.img_src
    }
}
export default connect(mapStateToProps,null) (Owner);