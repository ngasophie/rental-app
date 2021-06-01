import React, {Component} from 'react';
import Review from './Review'
class ReviewList extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let {value,classN} = this.props;
        if(!classN) {classN = '';}
        if(value.length ==0) return '';
        let list = value.map((item, index)=>
            <Review review = {item} key = {index}/>
        )
        return(
            <div className={`reviews-box ${classN}`}>
                <div className="title"> {value.length} Reviews</div>
               {list}
            </div>
         )
    }
}
export default ReviewList;