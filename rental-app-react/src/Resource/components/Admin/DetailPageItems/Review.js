import React, {Component} from 'react';
import {connect} from 'react-redux';
import {convertDate} from './../../../utils/convertDate';
class Review extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let {review, img_src} = this.props;
        img_src = img_src.concat('avt')
        return(
          <div className="review">
          <div className="avt">
              <img src={`${img_src}/${review.user_avt}`} alt=""/>
          </div>
          <div className="right">

          <span className="name">{review.user_name}</span>
          <br/>
          <span className="date-modified">{convertDate(review.created_at)}</span>
          <div className="review-rate">
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
          </div>
          <p>{review.content} </p>
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
export default connect(mapStateToProps,null) (Review);