import React, {Component} from 'react';
import {connect} from 'react-redux';
class RecentPostRelative extends Component{
    constructor(props){
        super(props);
    }
    render(){
        //  truyen tu listPostPage qua
        //  img sua sau
        const {value} = this.props;
        let {img_src } = this.props;
        img_src = img_src.concat('img_post');
        let listPost = value.map((index) =>
        <div className="recent-post" key = {index.id}>
            <div className="recent-post-content">
                <img src={`${img_src}/${index.images[0].img_src}`} alt=""/>
                <div className="content">
                    <div className="name">{index.title}</div>
                    <div className="price">{index.facilities.price} VND</div>
                </div>
            </div>
        </div>
        )
        return(
          <div className="recent-posts">
          <div className="title">Recent posts</div>
            {listPost}
      </div>
        )
    }
}
const mapStateToProps = state =>{
    return {
      img_src:state.img_src
    }
  }
export default connect(mapStateToProps,null) (RecentPostRelative);