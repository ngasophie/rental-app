import React, {Component} from 'react';
import Nav from './MainPageItems/Nav';
import Title from './MainPageItems/MiddlePageItems/Title'
import GridBoxList from './MainPageItems/MiddlePageItems/GridBoxList'
import Pagination from './MainPageItems/MiddlePageItems/Pagination'
import TableOwner from './MainPageItems/MiddlePageItems/TableOwner';
import TopPage from './MainPageItems/TopPageItems/TopPage';
import Footer from './MainPageItems/Footer/Footer';
import {connect} from 'react-redux';
import {Redirect,Link} from 'react-router-dom';
import { allOwnerManagerRequest } from '../../actions/adminAction/getAction';
class ListOwner extends Component{
    constructor(props){
        super(props);

    }
    render(){
        const {allOwner} = this.props;

        if(!allOwner) return '';

        return(
    
            <div className="right-page">
                <TopPage></TopPage>
                <div className="middle">
                    <div className="container">
                       <Title></Title>
                       <Link to ='/dashboard/admin/add-post-page'>
                            <button type="button" className="btn-add mt-1"><i className="fas fa-plus-circle"></i>  Add post</button>
                        </Link>                        
                        <TableOwner value ={allOwner}
                        indexOfTable = {(this.props.currentPage-1)*5}
                        ></TableOwner>
                        <Pagination url={'/dashboard/admin/active-posts'}></Pagination>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        );
    }
    componentDidMount(){
        this.props.fetchAllOwner(1)
    }
}
const mapStateToProps = state =>{
    return {
        dataLocation:state.dataLocation,
        img_src:state.img_src,
        owner:state.owner,
        summary : state.summaryManager,
        allOwner:state.allOwnerManager,
        currentPage:state.currentPage
    }
}
const mapDispatchToProps = (dispatch, props)=>{
    return {
       fetchAllOwner:(page)=>{
           dispatch(allOwnerManagerRequest(page))
       }
    }
    }
export default connect(mapStateToProps,mapDispatchToProps) (ListOwner);