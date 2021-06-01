import React, {Component} from 'react';
import Title from './MainPageItems/MiddlePageItems/Title'
import GridBoxList from './MainPageItems/MiddlePageItems/GridBoxList'
import TableBordered from './MainPageItems/MiddlePageItems/TableBordered'
import TopPage from './MainPageItems/TopPageItems/TopPage';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {listenChatChannel} from './../../utils/listenPusher';
import { actFetchLocationRequest} from './../../actions/index';
import {recentPostPerOwnerRequest, summaryPerOwnerRequest, userProfileRequest} from './../../actions/dashboardAction/getAction';
import {
   Link
  } from "react-router-dom";
class MainPage extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let token = sessionStorage.getItem('owner/admin-login');
        if(!token){
            return <Redirect to='/dashboard/login'  />
        }
        const {recentPost,summary} = this.props;       
        console.log(this.props)
         if(!recentPost) return '';
        return(
            
            <div className="right-page">
                <TopPage></TopPage>
                <div className="middle">
                    <div className="container">
                       <Title></Title>
                         <GridBoxList summary = {summary}></GridBoxList>
                        <Link to ='/dashboard/add-post-page'>
                            <button type="button" className="btn-add"><i className="fas fa-plus-circle"></i>  Add post</button>
                        </Link>
                        <TableBordered value = {recentPost}
                        indexOfTable={0}
                        onDeletePost = {this.onDeletePost}
                        ></TableBordered>
                    </div>
                </div>
            </div>
        );
    }
    componentDidMount(){
        this.props.fetchRecentPostPerOwner();
        this.props.fetchSummaryPerOwner();
        this.props.fetchLocation();
        // listenChatChannel();

    }
}
const mapStateToProps = state =>{
return {
    recentPost:state.recentPostPerOwner,
    dataLocation:state.dataLocation,
    img_src:state.img_src,
    owner:state.owner,
    summary : state.summaryPerOwner
}
}
const mapDispatchToProps = (dispatch, props)=>{
return {
    fetchRecentPostPerOwner:() =>{
        dispatch(recentPostPerOwnerRequest());
    },
    fetchSummaryPerOwner:() =>{
        dispatch(summaryPerOwnerRequest())
    },
    fetchLocation:() =>{
        dispatch(actFetchLocationRequest());
    },
    
}
}
export default connect(mapStateToProps,mapDispatchToProps) (MainPage);