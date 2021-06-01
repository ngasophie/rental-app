import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { convertDate } from '../../../../utils/convertDate';
import confirm from "reactstrap-confirm";
import {connect} from 'react-redux';
import {deletePost} from '../../../../actions/post_action';
import { actActivePost,actDisabledPost, actNoRecommendPost, actRecommendPost } from '../../../../actions/adminAction/postAction';
class TableBordered extends Component {
  constructor(props) {
    super(props)
  }
  noRecommend = (id ) =>{
    this.props.actNoRecommend(id)
  }
  recommend = (id) =>{
    this.props.actRecommend(id);
  }
  onEnabled = (id) =>{
    this.props.actActive(id)
  }
  onDisabled = (id) =>{
    this.props.actDisabled(id)
  }
  render() {
    console.log(this.state);
    let { value, indexOfTable } = this.props;
    if (value.length <= 0) return '';
    let list = value.map((x, index) => {
      indexOfTable++;
      switch (x.status) {
        case 1: 
        x.status = <div className="dropdown">
                    <button className="badge badge-success admin-action" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Active
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <button className="dropdown-item" onClick = {() =>this.onDisabled(x.id)}>Disable</button>
                    </div>
                  </div>;
          break;
        case 2: 
        x.status = <div className="dropdown">
                    <button className="badge badge-warning admin-action" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Waiting
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <button className="dropdown-item" onClick = {() =>this.onEnabled(x.id)}>Enable</button>
                      <button className="dropdown-item" >Disable</button>
                    </div>
                  </div>;
          break;
        case 0: 
        x.status = <div className="dropdown">
                    <button className="badge badge-secondary admin-action" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Disabled
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <button className="dropdown-item" onClick = {() =>this.onEnabled(x.id)}>Enable</button>
                    </div>
                  </div>;
          break;
      }
      switch(x.isRecommended){
        case 1:x.isRecommended=<span className="badge badge-success admin-action" onClick ={() =>this.noRecommend(x.id)}>Recommend</span>;
        break;
        case 0:x.isRecommended=<span className="badge badge-primary admin-action"onClick ={() =>this.recommend(x.id)}>No recommend</span>
        break;
      }
      return (
        <tr key={index + 1}>
          <th scope="row">{indexOfTable}</th>
          <td>{x.title}</td>
          <td>{convertDate(x.created_at)}</td>
          <td>{`${x.address.district}, ${x.address.city}`}</td>
          <td>{x.status}</td>
          <td>
            <Link to={`/dashboard/view-post/${x.id}`}>
              <i className="far fa-eye"></i>
            </Link>
          </td>
          <td>
            <Link to={`/dashboard/edit-post/${x.id}`}>
              <i className="far fa-edit"></i>
            </Link>
          </td>
          <td>
            <i className="far fa-trash-alt" onClick={() => this.onDeletePost(x.id)}></i>
          </td>

        </tr>)
    }
    )
    return (
      <table className="table table-bordered mt-1">
        <thead>
          <tr>
            <th scope="col">Listing</th>
            <th scope="col" className="cell-2">Post name</th>
            <th scope="col">Date</th>
            <th scope="col">Located</th>
            <th scope="col">Status</th>
            <th scope="col">View</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {list}
        </tbody>
      </table>
    )
  }
}
const mapDispatchToProps=(dispatch,props) =>{
  return{
    deletePostAct:(id)=>{
      dispatch(deletePost(id))
    },
    actRecommend:(id) =>{
      dispatch(actRecommendPost(id))
    },
    actNoRecommend:(id) =>{
      dispatch(actNoRecommendPost(id))
    },
    actActive:(id) =>{
      dispatch(actActivePost(id))
    },
    actDisabled:(id) =>{
      dispatch(actDisabledPost(id))
    }
  }
}
export default connect(null,mapDispatchToProps) (TableBordered);