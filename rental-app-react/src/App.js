
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import React, {Component} from 'react';
import DashboardPage from './Resource/components/DashboardPage';
import AdminPage from './Resource/components/AdminPage';
import IndexPage from './Resource/components/IndexPage';
import Login from './Resource/components/DashBoard/Login';
import AdminLogin from './Resource/components/Admin/Login';
import {listenChatChannel} from './Resource/utils/listenPusher';
import OwnerRegister from './Resource/components/DashBoard/Register';
import ProfileDetail from './Resource/components/MainPage/ProfileDetail';
class App extends Component{
  constructor(props){
    super(props)
  }
    render(){
      return (
        <div className="App">
            <Router>
                <Switch>
                  <Route exact  path="/" children={<IndexPage />} />
                  <Route exact  path="/dashboard/login" children={<Login />} />
                  <Route exact  path="/dashboard/register" children={<OwnerRegister />} />
                  <Route exact  path="/dashboard/admin-login" children={<AdminLogin />} />
                  <Route exact  path="/dashboard/main-page" children={<DashboardPage />} />
                  <Route exact  path="/dashboard/admin-page" children={<AdminPage />} />
                </Switch>
            </Router>
          </div>
        
      );
    }
}
  
export default App;
