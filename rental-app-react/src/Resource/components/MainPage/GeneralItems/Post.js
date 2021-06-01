import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from'react-redux';
class Post extends Component{
    constructor(props){
        super(props);
    }
    render(){
        //  truyen tu postList  qua
        //  thay img sau
        let {post, img_src} = this.props;
        img_src = img_src.concat('img_post');

        return(
            <Link to = {`/detail-page/${post.id}`}>
                <div className="post"data-aos="fade-right">
                            <img src={`${img_src}/${post.images[0].img_src}`} alt=""/>
                            
                            <div className="post-infor">
                                <div className="post-fade">
                                </div>
                                <div className="post-infor-content">
                                    <div className="region">{post.address.city}</div>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <div className="price">{post.facilities.price} VND</div>
                                    <div className="area">{post.facilities.area} m <sup><small>2</small></sup></div>
                                </div>
                            </div>
                        </div>
            </Link>
         )
    }
}
const mapStateToProps = state =>{
    return {
      img_src:state.img_src
    }
  }
export default connect(mapStateToProps,null) (Post);