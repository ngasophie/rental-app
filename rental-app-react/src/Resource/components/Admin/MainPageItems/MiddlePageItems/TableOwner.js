import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { convertDate } from './../../../../utils/convertDate';
import confirm from "reactstrap-confirm";
import {connect} from 'react-redux';
import {deletePost} from './../../../../actions/post_action'
class TableOwner extends Component {
  constructor(props) {
    super(props)
  }
  render() {
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
          <td>{x.name}</td>
          <td>{x.phone_number}</td>
          <td>{`${x.address.district}, ${x.address.city}`}</td>
          <td>{x.email}</td>
          <td>{convertDate(x.created_at)}</td>
          <td>{x.status}</td>
          <td>
            <Link to={`/dashboard/admin/detail/${x.id}`}>
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
            <th scope="col" className="cell-2">Name</th>
            <th scope="col" className="cell-2">Phone Number</th>
            <th scope="col" className="cell-2">Address</th>
            <th scope="col">Email</th>
            <th scope="col">Date</th>
            <th scope="col">Status</th>
            <th scope="col">View</th>
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
export default connect(null,mapDispatchToProps) (TableOwner);