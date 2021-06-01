import React, { Component } from 'react';
import Nav from './DashBoard/MainPageItems/Nav';
import Dashboard from './DashBoard/Dashboard'
import routes from './../routers';
import Login from './DashBoard/Login';
import {listenChatChannel} from './../utils/listenPusher';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import {userProfileRequest} from './../actions/dashboardAction/getAction';
class DashboardPage extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    let token = sessionStorage.getItem('owner/admin-login');
    if (!token) return <Redirect to='/dashboard/login' />
    const {user} = this.props;
    if(!user) return '';
    console.log(user)
    return (

      <div className="dashboard-page">
          <Switch>
          <Route exact path="/dashboard/login">
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
    if(token){
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
export default connect(mapStateToProps, mapDispatchToProps) (DashboardPage);