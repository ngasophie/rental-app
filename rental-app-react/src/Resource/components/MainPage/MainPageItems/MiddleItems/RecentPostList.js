import React, {Component} from 'react';
import RecentPost from './RecentPost'
class CardItem extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {value} = this.props;
        const listPost = value.map((index) =>
            <RecentPost value ={index} key = {index.id}/>
        )
        return(
          <div className="recent-post" data-aos="fade-up">
            <div className="container">
                <div className="recent-post-list">
                 {listPost}
                </div>
            </div>
          </div>
        )
    }
}
export default CardItem;