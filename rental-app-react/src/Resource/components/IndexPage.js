import React, {Component} from 'react';
import NavIndex from './MainPage/GeneralItems/Nav';
import Footer from './MainPage/GeneralItems/Footer';
import {userProfileRequest} from './../actions/index';
import {connect} from 'react-redux';
import routes from './../routers';
import {Redirect} from 'react-router-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
class IndexPage extends Component{
    constructor(props){
        super(props);

    }
    render(){
     
        return(
            <div className="index-page">
                <Router>
                    <NavIndex></NavIndex>
                    {this.showContentMenu(routes)}
                </Router>
                <Footer></Footer>
            </div>
        );
    }
    showContentMenu = (routes) =>{
        let result = null;
        if(routes.length >0){
          result = routes.map((route,index)=>{
            return (<Route
              key={index}
              path={route.path}
              exact = {route.exact}
              component = {route.main}
            />)
          });
        }
        return <Switch>{result}</Switch>
    }    
    componentDidMount(){
      if(sessionStorage.getItem('auth_token')){
        this.props.fetchUser()
      }
    }
}
const mapDispatchToProps=(dispatch,props)=>{
  return {
      fetchUser:()=>{
        dispatch(userProfileRequest())
    }
  }
}
export default connect(null,mapDispatchToProps) (IndexPage);