import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {currentPage} from './../../../actions/index'
import {actFetchAllPostsRequest, actFetchAllOwnersRequest} from './../../../actions/index';
import { filterRequest } from '../../../actions/post_action';
class Pagination extends Component{
  static pageNumbers=0;
  static current =1;
    constructor(props){
        super(props);
        this.state = {
          currentPage:1,
        }
    }
    handleClickNext = ( event) =>{
      let currentPage = this.state.currentPage;
      if(currentPage < Pagination.pageNumbers){
        currentPage = currentPage+1;
        const {url} = this.props

        this.props.getCurrentPage(currentPage);
        if(url === '/list-post'){
          this.props.fetchAllPosts(currentPage)

        }
        else if(url === '/list-owner'){
          this.props.fetchAllOwner(currentPage)
        }
        else if(url === '/filter-post'){
          this.props.filterPost(currentPage)

        }      }
      this.setState({
        currentPage,
    
      });
    }
    handleClickPrev = (event) =>{
      let currentPage = this.state.currentPage;
      if(currentPage >=2){
        currentPage = currentPage-1;
        this.props.getCurrentPage(currentPage);
        const {url} = this.props
        if(url === '/list-post'){
          this.props.fetchAllPosts(currentPage)

        }
        else if(url === '/list-owner'){
          this.props.fetchAllOwner(currentPage)

        }
        else if(url === '/filter-post'){
          this.props.filterPost(currentPage)

        }
      }
      this.setState({
        currentPage
      });
    }
    render(){
      const {url} = this.props
      const {currentPage} = this.state;
      const data = '';
      if(this.state.data){
        data = this.state.data
      }
      if(url === '/list-owner'){
        Pagination.pageNumbers = this.props.lastPageAllOwner;
      }
      else  if(url === '/filter-post'){
        Pagination.pageNumbers = this.props.lastFilterPage;
      }
      else if(url == '/list-post'){
        Pagination.pageNumbers = this.props.lastPageAllPost;
      }
      Pagination.current = currentPage;
      let linkCurrent = `${url}/page-${currentPage}`;
      let nextPage ;
      let prevPage;
      if(currentPage <= 1){
        nextPage = `${url}/page-${currentPage+1}`;
         prevPage = `${url}/page-${currentPage}`;
      }
      else if(currentPage >= Pagination.pageNumbers){
        nextPage = `${url}/page-${Pagination.pageNumbers}`;
        prevPage = `${url}/page-${currentPage-1}`;
      }
      else{
        nextPage = `${url}/page-${currentPage+1}`;
         prevPage = `${url}/page${currentPage-1}`;
      }
        return(
            <nav aria-label="...">
            <ul className="pagination">
              <li className="page-item"onClick = {this.handleClickPrev}>
                <Link to ={prevPage} className="page-link">Previous</Link>
              </li>
              <li className="page-item active">
              <Link to={linkCurrent} className="page-link">{currentPage} <span className="sr-only">(current)</span></Link>
              </li>
              {/* <li className="page-item"><Link to={linkCurrent} className="page-link">{currentPage}</Link></li>
              <li className="page-item"><a className="page-link" href="#">3</a></li> */}
              <li className="page-item" onClick = {this.handleClickNext}>
                <Link to = {nextPage} className="page-link" >Next</Link>
              </li>
            </ul>
          </nav>
         )
    }
    componentDidMount(){
      this.props.getCurrentPage(1);
    }

}
const mapStateToProps = state =>{
  console.log(state);
  return{
    allPosts: state.allPosts,
    lastPageAllPost:state.lastPageAllPost,
    lastPageAllOwner:state.lastPageAllOwner,
    filterPosts:state.filterPosts,
    lastFilterPage:state.lastFilterPage,
    allOwner:state.allOwner
  }
}
const mapDispatchToProps  = (dispatch, props)=>{
  return{
    getCurrentPage : (current) =>{
        //  luu vao store
        dispatch(currentPage(current))
    },
    fetchAllPosts :(number) =>{
      dispatch(actFetchAllPostsRequest(number))
    },
    filterPost:(data, number) =>{
      dispatch(filterRequest(data,number))
    },
    fetchAllOwner:(number)=>{
      dispatch(actFetchAllOwnersRequest(number))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps) (Pagination);