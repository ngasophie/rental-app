import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
class CardItem extends Component{
    constructor(props){
        super(props);
    }
    render(){
        //  truyen tu recentpostlist qua
        //  img thay sau
        let {value,img_src} = this.props;
        img_src = img_src.concat('img_post')
        return(
          <div className="recent-post-content"data-aos="fade-right">
                        <img src={`${img_src}/${value.images[0].img_src}`} alt=""/>
                        <div className="recent-post-text">
                            <div className="title"  data-aos="fade-up">{value.title}</div>
                            <div className="description"  data-aos="fade-up"><span>{value.description}</span></div>
                            <div className="details"  data-aos="fade-up">
                                <div className="post-infor-content">
                                    <div className="region">{value.address.city}</div>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <div className="price">{value.facilities.price} VND</div>
                                    <div className="area"><i className="fas fa-arrows-alt"></i> {value.facilities.area} m<sup><small>2</small></sup></div>
                                </div>
                                <Link to ={`detail-page/${value.id}`}> <button className="btn"  data-aos="fade-up">View details <i className="fas fa-arrow-right"></i></button></Link>
                            </div>
                        </div>
                    </div>
        );
    }
}
const mapStateToProps = state =>{
    return {
      img_src:state.img_src
    }
  }
export default connect(mapStateToProps,null) (CardItem);