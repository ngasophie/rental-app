import React, { Component } from 'react';
import Nav from './Admin/MainPageItems/Nav';
import routes from './../routers';
import Login from './Admin/Login';
import { connect } from 'react-redux';
import {listenChatChannel} from './../utils/listenPusher';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import {userProfileRequest} from './../actions/dashboardAction/getAction';
class AdminPage extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    let token = sessionStorage.getItem('owner/admin-login');
    if (!token || !(sessionStorage.getItem('user-login')== 'admin-login')) 
    return <Redirect to='/dashboard/admin-login' />
    const {user} = this.props;
    if(!user) return '';
    console.log(user)
    return (

      <div className="dashboard-page">
          <Switch>
          <Route exact path="/dashboard/admin-login">
            <Login />
          </Route>
          <Router>
            <Nav></Nav>
            {this.showContentMenu(routes)}
          </Router>
        </Switch>
      </div>
    );
  }
  showContentMenu = (routes) => {
    let result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (<Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />)
      });
    }
    return <Switch>{result}</Switch>
  }
  componentDidMount(){
    let token = sessionStorage.getItem('owner/admin-login');
    if(token && (sessionStorage.getItem('user-login')=='admin-login')){
      this.props.fetchProfileUser();
    }
  }
}
const mapStateToProps =state =>{
  return {
    user:state.owner
  }
}
const mapDispatchToProps = (dispatch,props) => {
  return {
    fetchProfileUser: () => {
      dispatch(userProfileRequest());
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps) (AdminPage);