import React, {Component} from 'react';
import Title from './MainPageItems/MiddlePageItems/Title'
import Pagination from './MainPageItems/MiddlePageItems/Pagination'
import TableBordered from './MainPageItems/MiddlePageItems/TableBordered'
import TopPage from './MainPageItems/TopPageItems/TopPage';
import Footer from './MainPageItems/Footer/Footer';
import {connect} from 'react-redux';
import {Redirect,Link} from 'react-router-dom';
import { waitingPostManagerRequest } from '../../actions/adminAction/getAction';
class WaitingPosts extends Component{
    constructor(props){
        super(props);

    }
    render(){
        const {waitingPost} = this.props;

        if(!waitingPost) return '';

        return(
    
            <div className="right-page">
                <TopPage></TopPage>
                <div className="middle">
                    <div className="container">
                       <Title></Title>
                       <Link to ='/dashboard/admin/add-post-page'>
                            <button type="button" className="btn-add mt-1"><i className="fas fa-plus-circle"></i>  Add post</button>
                        </Link>                        
                        <TableBordered value ={waitingPost}
                        indexOfTable = {(this.props.currentPage-1)*5}
                        ></TableBordered>
                        <Pagination url={'/dashboard/admin/waiting-posts'}></Pagination>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        );
    }
    componentDidMount(){
        this.props.fetchWaitingPost(1)
    }
}
const mapStateToProps = state =>{
    return {
        dataLocation:state.dataLocation,
        img_src:state.img_src,
        owner:state.owner,
        summary : state.summaryManager,
        waitingPost:state.waitingPostManager,
        currentPage:state.currentPage
    }
}
const mapDispatchToProps = (dispatch, props)=>{
    return {
       fetchWaitingPost:(page)=>{
           dispatch(waitingPostManagerRequest(page))
       }
    }
    }
export default connect(mapStateToProps,mapDispatchToProps) (WaitingPosts);