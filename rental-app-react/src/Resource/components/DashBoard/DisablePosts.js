import React, {Component} from 'react';
import Nav from './MainPageItems/Nav';
import Title from './MainPageItems/MiddlePageItems/Title'
import GridBoxList from './MainPageItems/MiddlePageItems/GridBoxList'
import Pagination from './MainPageItems/MiddlePageItems/Pagination'
import TableBordered from './MainPageItems/MiddlePageItems/TableBordered'
import TopPage from './MainPageItems/TopPageItems/TopPage';
import Footer from './MainPageItems/Footer/Footer';
import {disablePostPerOwnerRequest} from './../../actions/dashboardAction/getAction';
import {connect} from 'react-redux';
import {Redirect,Link} from 'react-router-dom';
class DisablePosts extends Component{
    constructor(props){
        super(props);

    }
    render(){
        const{disablePost} = this.props;
        if(!disablePost) return '';

        return(
    
            <div className="right-page">
                <TopPage></TopPage>
                <div className="middle">
                    <div className="container">
                       <Title></Title>
                       <Link to ='/dashboard/add-post-page'>
                            <button type="button" className="btn-add mt-1"><i className="fas fa-plus-circle"></i>  Add post</button>
                        </Link>                        
                        <TableBordered
                        value = {disablePost}
                        indexOfTable = {(this.props.currentPage-1)*5}
                        ></TableBordered>
                        <Pagination
                        url={'/dashboard/disable-posts'}
                        ></Pagination>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        );
    }
    componentDidMount(){
        this.props.fetchDisablePostPerOwner(1)
    }
}

const mapStateToProps = state =>{
console.log(state);
return {
    dataLocation:state.dataLocation,
    img_src:state.img_src,
    owner:state.owner,
    summary : state.summaryPerOwner,
    disablePost:state.disablePostPerOwner,
    currentPage:state.currentPage
}
}
const mapDispatchToProps = (dispatch, props)=>{
return {
   fetchDisablePostPerOwner:(page)=>{
       dispatch(disablePostPerOwnerRequest(page))
   }
}
}
export default connect(mapStateToProps, mapDispatchToProps) (DisablePosts);