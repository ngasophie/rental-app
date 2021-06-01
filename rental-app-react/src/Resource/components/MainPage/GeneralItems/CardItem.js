import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {convertDate} from './../../../utils/convertDate';
class CardItem extends Component{
    constructor(props){
        super(props);
    }
    render(){
      //  tuyen tu cardlist qua
      //  thay img sau
      const {card} = this.props;
      if(!card) return '';
      console.log(card)
      let {img_src } = this.props;
      img_src = img_src.concat('img_post');

        return(
          <Link to = {`/detail-page/${card.id}`}>
            <div className="card" data-aos="flip-left">
                        <div id="#myCarousel1" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                              <div className="carousel-item active">
                                <img className="d-block w-100" src={`${img_src}/${card.images[0].img_src}`}/>
                              </div>
                            </div>
                          </div>
                        <div className="card-body">
                          <h5 className="card-title">{card.title}</h5>
                          <div className="details">
                              <div className="price"> <i className="fas fa-dollar-sign"></i> {card.facilities.price} VND</div>
                              <div className="area"><i className="fa fa-object-group" aria-hidden="true"></i> {card.facilities.area} m<sup><small>2</small></sup></div>
                              <div className="date-modified"><i className="far fa-calendar-alt"></i> {convertDate(card.createdAt)}</div>
                              <div className="located"><i className="fas fa-location-arrow"></i> {card.address.city}</div>
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
export default connect(mapStateToProps,null)(CardItem);