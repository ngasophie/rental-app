import React,{Component} from 'react';
import {connect} from 'react-redux';
import {userProfileRequest} from './../../actions/index';
import {Redirect} from 'react-router-dom';
class ProfileDetail extends Component{
    constructor(props){
        super(props)
    }
    render(){
      let {img_src, user}= this.props;
      img_src = img_src.concat('avt');
      if(!sessionStorage.getItem('auth_token')){
        return <Redirect to ='/'></Redirect>
      }
        return(
            <div className="container">
            <div className="main-body">
            
                  <div className="row gutters-sm">
                    <div className="col-md-4 mb-3">
                      <div className="card">
                        <div className="card-body">
                          <div className="d-flex flex-column align-items-center text-center">
                            <img src={`${img_src}/${user.img_src}`} alt="Admin" className="rounded-circle" width="150"/>
                            <div className="mt-3">
                              <h4>{user.name}</h4>
                              <input type ="file" className="text-secondary mb-1"/>
                              <p className="text-muted font-size-sm">{user.email}</p>
                              {/* <button className="btn btn-primary">Follow</button>
                              <button className="btn btn-outline-primary">Message</button> */}
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                    <div className="col-md-8">
                      <div className="card mb-3">
                        <div className="card-body profile">
                          <div className="row">
                            <div className="col-sm-3">
                              <h6 className="mb-0">Full Name</h6>
                            </div>
                            <input className="col-sm-9 text-secondary" defaultValue={user.name}>
                              
                            </input>
                          </div>
                          <hr/>
                          <div className="row">
                            <div className="col-sm-3">
                              <h6 className="mb-0">Email</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                              {user.email}
                            </div>
                          </div>
                          <hr/>
                          <div className="row">
                            <div className="col-sm-3">
                              <h6 className="mb-0">Phone</h6>
                            </div>
                            <input className="col-sm-9 text-secondary" defaultValue={user.phone_number?user.phone_number:''}>
                              
                            </input>
                          </div>
                          <hr/>

                          <div className="row">
                            <div className="col-sm-3">
                              <h6 className="mb-0">Address</h6>
                            </div>
                            <input className="col-sm-9 text-secondary" defaultValue= {user.address?user.address:''}>
                             
                            </input>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="save-change">
                         <button type="submit" className="btn-save-change mt-2 mb-2 ml-2">Save All Change</button>
                      </div>
                  </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
      if(sessionStorage.getItem('auth_token')){
        this.props.fetchProfileUser()
      }
    }
}
const mapStateToProps =state =>{
  return {
    user:state.owner,
    img_src:state.img_src
  }
}
const mapDispatchToProps = (dispatch,props) => {
  return {
    fetchProfileUser: () => {
      dispatch(userProfileRequest());
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProfileDetail)