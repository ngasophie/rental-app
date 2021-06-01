import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { convertDate } from './../../../../utils/convertDate';
import confirm from "reactstrap-confirm";
import {connect} from 'react-redux';
import {deletePost} from './../../../../actions/post_action'
class TableBordered extends Component {
  constructor(props) {
    super(props)
  }
  onDeletePost = async (id) => {
    let result = await confirm(); //will display a confirmation dialog with default settings
     //if the user confirmed, the result value will be true, false otherwhise
     if(result){
      //  delete from store 
        this.props.deletePostAct(id);
     }
  }
  render() {
    console.log(this.state);
    let { value, indexOfTable } = this.props;
    if (value.length <= 0) return '';
    let list = value.map((x, index) => {
      let edit = <Link to={`/dashboard/edit-post/${x.id}`}>
                 <span className="badge badge-primary">Edit</span>
                </Link>
      indexOfTable++;
      if(x.status != 2 ){
        edit = <span className="badge badge-secondary">Not edit</span>
      }
      switch (x.status) {
        case 1: x.status = <span className="badge badge-success">Active</span>;
          break;
        case 2: x.status = <span className="badge badge-warning">Waiting</span>;
          break;
        case 0: x.status = <span className="badge badge-secondary">Disabled</span>;
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
            {edit}
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
    }
  }
}
export default connect(null,mapDispatchToProps) (TableBordered);