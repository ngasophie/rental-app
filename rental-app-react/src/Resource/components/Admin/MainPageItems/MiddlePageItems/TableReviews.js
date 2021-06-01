import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { convertDate } from './../../../../utils/convertDate';
import confirm from "reactstrap-confirm";
import {connect} from 'react-redux';
import {deletePost} from './../../../../actions/post_action'
class TableReview extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    let { value, indexOfTable } = this.props;
    console.log(value)
    if (value.length <= 0) return '';
    let list = value.map((x, index) => {
        if(x.post== null) return '';
      indexOfTable++;
      switch (x.status) {
        case 1: 
        x.status = <div className="dropdown">
                    <button className="badge badge-success admin-action" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Active
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <button className="dropdown-item" >Disable</button>
                    </div>
                  </div>;
          break;
        case 2: 
        x.status = <div className="dropdown">
                    <button className="badge badge-warning admin-action" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Waiting
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <button className="dropdown-item" >Enable</button>
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
                      <button className="dropdown-item" >Enable</button>
                    </div>
                  </div>;
          break;
      }
      return (
        <tr key={index + 1}>
          <th scope="row">{indexOfTable}</th>
          <td>{x.post.title}</td>
          <td>{x.user_name}</td>
          <td>{x.content}</td>
          <td>{convertDate(x.createdAt)}</td>
          <td>{x.rating}</td>
          <td>{x.status}</td>
          <td>
            <Link to={`/dashboard/admin/detail/${x.post.id}`}>
              <i className="far fa-eye"></i>
            </Link>
          </td>
        </tr>)
    }
    )
    return (
      <table className="table table-bordered mt-1">
        <thead>
          <tr>
            <th scope="col">Listing</th>
            <th scope="col" className="cell-2">Post title</th>
            <th scope="col" className="cell-2">User name</th>
            <th scope="col" className="cell-2">Content</th>
            <th scope="col" className="cell-2">Date</th>
            <th scope="col" className="cell-2">Rating</th>
            <th scope="col">Status</th>
            <th scope="col">View post</th>
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
    }
  }
}
export default connect(null,mapDispatchToProps) (TableReview);