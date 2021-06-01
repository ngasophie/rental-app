import React, {Component} from 'react';
import {review} from './../../../actions/post_action';
class FormAddReview extends Component{
    constructor(props){
        super(props);
        this.state={
            content:'',
            star1:false,
            star2:false,
            star3:false,
            star4:false,
            star5:false,
        }
    }
    onType=(event)=>{
        let content = event.target.value;
        this.setState({
            content
        })
    }
    star1Click=()=>{
        let {star1} = this.state;
        star1=!star1;
        this.setState({
            star1
        })
    }
    star2Click=()=>{
        let {star2} = this.state;
        star2=!star2;
        this.setState({
            star2
        })
    }
    star3Click=()=>{
        let {star3} = this.state;
        star3=!star3;
        this.setState({
            star3
        })
    }
    star4Click=()=>{
        let {star4} = this.state;
        star4=!star4;
        this.setState({
            star4
        })
    }
    star5Click=()=>{
        let {star5} = this.state;
        star5=!star5;
        this.setState({
            star5
        })
    }

    onSubmit = (event)=>{
        const {content,star1,star2,star3,star4,star5} = this.state;
        let rating = 0;
        if(star1) rating++;
        if(star2) rating++;
        if(star3) rating++;
        if(star4) rating++;
        if(star5) rating++;
        event.preventDefault();
        let auth = localStorage.getItem('auth_token');
        if(auth){
            if(content!=''){
                const {post_id} = this.props;
                let data = {}
                data.rating= rating;
                data.content=content;
                data.post_id=post_id;
                review(data);
            }
        }
        else{
            alert('please login to review')
        }
    }
    render(){
        let {star1,star2,star3,star4,star5} = this.state;
        return(
          <div className="add-review">
            <span>Your rating for this</span>
            <div className="review-rate">
                
                     <i className={`fa fa-star ${star1?'rating-make':''}`} aria-hidden="true" onClick = {this.star1Click}>
                     </i>
                     <i className={`fa fa-star ${star2?'rating-make':''}`} aria-hidden="true" onClick = {this.star2Click} >
                     </i>
                     <i className={`fa fa-star ${star3?'rating-make':''}`} aria-hidden="true" onClick = {this.star3Click} >
                    
                     </i>
                     <i className={`fa fa-star ${star4?'rating-make':''}`} aria-hidden="true" onClick = {this.star4Click}>
                    
                     </i>
                     <i className={`fa fa-star ${star5?'rating-make':''}`} aria-hidden="true" onClick = {this.star5Click}>
                     
                     </i>
               
            </div>
            <form id="review" onSubmit = {this.onSubmit}>
                <div className="form-group">
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={this.onType}></textarea>
                  </div>
                  <input type="submit" className="btn-custom" value="Submit Review"/>
            </form>
      </div>
         )
    }
}
export default FormAddReview;