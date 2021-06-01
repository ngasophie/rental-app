// import React, { Component } from 'react';
// import NavItem from './NavItems/NavItem'
import Avatar from './NavItems/Avatar'
import {NavItem} from 'reactstrap'
import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
const menus = [
  {
    name:' Dashboard',
    to :'/dashboard/main-page',
    exact:true,
    icon:<i class="fas fa-signal" aria-hidden="true"></i>
  },
  {
    name:' Profile',
    to:'/dashboard/profile',
    exact:false,
    icon:<i class="fas fa-user-alt" aria-hidden="true"></i>
  },
  // {
  //   name:'Recent posts',
  //   to:'/dashboard/recent-posts',
  //   exact:false
  // },
  {
    name:' Active posts',
    to:'/dashboard/active-posts',
    exact:false,
    icon:<i class="fas fa-check-circle" aria-hidden="true"></i>
  },
  {
    name:' Disable posts',
    to:'/dashboard/disable-posts',
    exact:false,
    icon:<i class="fas fa-times-circle" aria-hidden="true"></i>
  },
  // {
  //   name:' Reviews',
  //   to:'/dashboard/reviews',
  //   exact:false,
  //   icon:<i class="fas fa-comment-dots" aria-hidden="true"></i>
  // },
  {
    name:' All posts',
    to:'/dashboard/all-posts',
    exact:false,
    icon:<i class="fas fa-globe" aria-hidden="true"></i>
  },
  {
    name:' Chat',
    to:'/dashboard/chat',
    exact:false,
    icon:<i class="fas fa-comments" aria-hidden="true"></i>
  },
];
const MenuLink = ({label, to , activeOnlyExact,icon}) =>{
  return (
    <Route
      path={to}
      exact={activeOnlyExact}
      children = {({match})=>{
        let active = match ? 'active' : '';
        return (
                <Link to={to}>
                    {icon}
                    {label}
                </Link>                 
        )
      }}
    />
  );
}
class Nav extends Component {
    render(){

        return (
          <div className="left-page">
          <div className="left-page-content">
            <div className="close-nav">
              <i className="fas fa-times"></i>
            </div>
          <Avatar></Avatar>
            <div className="dashboard-link">
                {this.showMenu(menus)}
             </div>
             </div>
             </div>
        );
    }
    showMenu = (menus) =>{
      let result = null;
      if(menus.length >0){
        result = menus.map((menu,index)=>{
          return (
            <MenuLink
              key={index}
              label = {menu.name}
              to = {menu.to}
              activeOnlyExact = {menu.exact}
              icon = {menu.icon}
            />
          )
        })
      }
      return result;
    }
}

export default Nav;