import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {currentPage} from './../../../../actions/index';
import {allPostManagerRequest, activePostManagerRequest, disablePostManagerRequest,
  waitingPostManagerRequest
} from './../../../../actions/adminAction/getAction';
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
        if(url === '/dashboard/admin/all-posts'){
          this.props.allPostManager(currentPage)

        }
        else if(url === '/dashboard/admin/active-posts'){
          this.props.activePostManager(currentPage)

        }
        else if(url === '/dashboard/admin/disable-posts'){
          this.props.disablePostManager(currentPage)

        }      
        else if(url === '/dashboard/admin/waiting-posts'){
          this.props.waitingPostManager(currentPage)

        }      
      }
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
        if(url === '/dashboard/admin/all-posts'){
          this.props.allPostManager(currentPage)

        }
        else if(url === '/dashboard/admin/active-posts'){
          this.props.activePostPerOwner(currentPage)

        }
        else if(url === '/dashboard/admin/disable-posts'){
          this.props.disblePostManager(currentPage)

        }
        else if(url === '/dashboard/admin/waiting-posts'){
          this.props.waitingPostManager(currentPage)

        }
      }
      this.setState({
        currentPage
      });
    }
    render(){
      const {url} = this.props
      const {currentPage} = this.state;
      if(url === '/dashboard/admin/active-posts'){
        Pagination.pageNumbers = this.props.lastActivePostManager;
      }
      else if(url === '/dashboard/admin/disable-posts'){
        Pagination.pageNumbers = this.props.lastDisablePostManager;
      }
      else if(url === '/dashboard/admin/all-posts'){
        Pagination.pageNumbers = this.props.lastAllPostManager;
      }
      else if(url === '/dashboard/admin/waiting-posts'){
        Pagination.pageNumbers = this.props.lastWaitingPostManager;
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
    lastAllPostManager:state.lastAllPostManager,
    lastActivePostManager:state.lastActivePostManager,
    lastDisablePostManager:state.lastDisablePostManager,
    lastWaitingPostManager:state.lastWaitingPostManager,
    owner:state.owner
  }
}
const mapDispatchToProps  = (dispatch, props)=>{
  return{
    getCurrentPage : (current) =>{
        //  luu vao store
        dispatch(currentPage(current))
    },
    allPostManager :(number) =>{
      dispatch(allPostManagerRequest(number))
  },
    activePostManager :(number) =>{
      dispatch(activePostManagerRequest(number))
  },
    disablePostManager :(number) =>{
      dispatch(disablePostManagerRequest(number))
  },
    waitingPostManager :(number) =>{
      dispatch(waitingPostManagerRequest(number))
  }
  }
}
export default connect(mapStateToProps,mapDispatchToProps) (Pagination);