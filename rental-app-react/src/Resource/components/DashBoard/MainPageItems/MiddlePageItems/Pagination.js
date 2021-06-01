import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {currentPage} from './../../../../actions/index';
import {allPostPerOwnerRequest, activePostPerOwnerRequest, disablePostPerOwnerRequest
} from './../../../../actions/dashboardAction/getAction';
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
        const {url,owner} = this.props

        this.props.getCurrentPage(currentPage);
        if(url === '/dashboard/all-posts'){
          this.props.allPostPerOwner(currentPage)

        }
        else if(url === '/dashboard/active-posts'){
          this.props.activePostPerOwner(currentPage)

        }
        else if(url === '/dashboard/disable-posts'){
          this.props.diasblePostPerOwner(currentPage)

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
        const {url,owner} = this.props
        if(url === '/dashboard/all-posts'){
          this.props.allPostPerOwner(currentPage)

        }
        else if(url === '/dashboard/active-posts'){
          this.props.activePostPerOwner(currentPage)

        }
        else if(url === '/dashboard/disable-posts'){
          this.props.diasblePostPerOwner(currentPage)

        }
      }
      this.setState({
        currentPage
      });
    }
    render(){
      const {url} = this.props
      const {currentPage} = this.state;
      if(url === '/dashboard/active-posts'){
        Pagination.pageNumbers = this.props.lastPageActivePost;
      }
      else if(url === '/dashboard/disable-posts'){
        Pagination.pageNumbers = this.props.lastPageDisablePost;
      }
      else{
        Pagination.pageNumbers = this.props.lastPageAllPostDashboard;
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
  return{
    lastPageAllPostDashboard:state.lastPageAllPostDashboard,
    lastPageActivePost:state.lastPageActivePost,
    lastPageDisablePost:state.lastPageDisablePost,
    owner:state.owner
  }
}
const mapDispatchToProps  = (dispatch, props)=>{
  return{
    getCurrentPage : (current) =>{
        //  luu vao store
        dispatch(currentPage(current))
    },
    allPostPerOwner :(number) =>{
      dispatch(allPostPerOwnerRequest(number))
  },
    activePostPerOwner :(number) =>{
      dispatch(activePostPerOwnerRequest(number))
  },
    diasblePostPerOwner :(number) =>{
      dispatch(disablePostPerOwnerRequest(number))
  }
  }
}
export default connect(mapStateToProps,mapDispatchToProps) (Pagination);