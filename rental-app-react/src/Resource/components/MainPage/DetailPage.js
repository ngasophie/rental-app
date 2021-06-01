import React, {Component} from 'react';
import Description from './DetailPageItems/Description'
import Details from './DetailPageItems/Details'
import FormAddReview from './DetailPageItems/FormAddReview'
import ImageBox from './DetailPageItems/ImageBox'
import OwnerInfor from './DetailPageItems/OwnerInfor'
import RecentPostRelative from './GeneralItems/RecentPostRelative'
import ReviewList from './DetailPageItems/ReviewList'
import Title from './DetailPageItems/Title';
import {connect} from 'react-redux';
import {fetchPostRequest} from './../../actions/index';
class DetailPage extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {post} = this.props;
        let {recommendPosts} = this.props;
        let arr1= recommendPosts.slice(21,24);
        if(Object.values(post).length===0){return '';}
        return(
           <div>
               <div className="details-page">
                   {/* xu li sau */}
                <ImageBox img = {post.images}></ImageBox>
                <div className="container">
                    <div className="aside-left">
                        <Title title = {post.title} location = {post.address.city} 
                        price={post.facilities.price} />
                        <Description description= {post.description}></Description>
                        <Details value = {post}></Details>
                        <ReviewList value = {post.reviews}></ReviewList>
                        <FormAddReview post_id = {post.id}></FormAddReview>
                    </div>
                    <div className="aside-right">
                        {/*  xu li sau */}
                        <OwnerInfor owner={post.user}></OwnerInfor>
                        <RecentPostRelative value={arr1}></RecentPostRelative>
                    </div>
                </div>
            </div>
               <br/>
            </div>
        )
    }
    componentDidMount(){
        let {match} = this.props;
        if(match){
            let id = match.params.id;
            this.props.fetchPost(id);
        }
    }
}
const mapStateToProps = state =>{
    return{
        post:state.post,
        recommendPosts: state.recommendPosts
    }
}
const mapDispatchToProps = (dispatch, props)=>{
    return {
        fetchPost : (id) =>{
            dispatch(fetchPostRequest(id));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (DetailPage);