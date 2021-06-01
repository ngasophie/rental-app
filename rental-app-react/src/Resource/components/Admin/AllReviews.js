import React, {Component} from 'react';
import Nav from './MainPageItems/Nav';
import Title from './MainPageItems/MiddlePageItems/Title'
import GridBoxList from './MainPageItems/MiddlePageItems/GridBoxList'
import Pagination from './MainPageItems/MiddlePageItems/Pagination'
import TableReviews from './MainPageItems/MiddlePageItems/TableReviews';
import TopPage from './MainPageItems/TopPageItems/TopPage';
import Footer from './MainPageItems/Footer/Footer';
import {connect} from 'react-redux';
import {Redirect,Link} from 'react-router-dom';
import { allReviewRequest } from '../../actions/adminAction/getAction';
class AllReviews extends Component{
    constructor(props){
        super(props);

    }
    render(){
        const {reviewPost} = this.props;

        if(!reviewPost) return '';

        return(
    
            <div className="right-page">
                <TopPage></TopPage>
                <div className="middle">
                    <div className="container">
                       <Title></Title>
                       <Link to ='/dashboard/admin/add-post-page'>
                            <button type="button" className="btn-add mt-1"><i className="fas fa-plus-circle"></i>  Add post</button>
                        </Link>                        
                        <TableReviews value ={reviewPost}
                        indexOfTable = {(this.props.currentPage-1)*5}
                        ></TableReviews>
                        <Pagination url={'/dashboard/admin/active-posts'}></Pagination>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        );
    }
    componentDidMount(){
        this.props.fetchReview(1)
    }
}
const mapStateToProps = state =>{
    return {
        dataLocation:state.dataLocation,
        img_src:state.img_src,
        owner:state.owner,
        summary : state.summaryManager,
        reviewPost:state.allReview,
        currentPage:state.currentPage
    }
}
const mapDispatchToProps = (dispatch, props)=>{
    return {
       fetchReview:(page)=>{
           dispatch(allReviewRequest(page))
       }
    }
    }
export default connect(mapStateToProps,mapDispatchToProps) (AllReviews);