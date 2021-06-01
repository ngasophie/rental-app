// import React, { Component } from 'react';
// import NavItem from './NavItems/NavItem'
import Avatar from './NavItems/Avatar'
import {NavItem} from 'reactstrap'
import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
const menus = [
  {
    name:' Dashboard',
    to :'/dashboard/admin-page',
    exact:true,
    icon:<i class="fas fa-signal" aria-hidden="true"></i>
  },
  {
    name:' Profile',
    to:'/dashboard/admin/profile',
    exact:false,
    icon:<i class="fas fa-user-alt" aria-hidden="true"></i>
  },
  {
    name:' Active posts',
    to:'/dashboard/admin/active-posts',
    exact:false,
    icon:<i class="fas fa-check-circle" aria-hidden="true"></i>
  },
  {
    name:' Disable posts',
    to:'/dashboard/admin/disable-posts',
    exact:false,
    icon:<i class="fas fa-times-circle" aria-hidden="true"></i>
  },
  {
    name:' All posts',
    to:'/dashboard/admin/all-posts',
    exact:false,
    icon:<i class="fas fa-globe" aria-hidden="true"></i>
  },
  {
    name:' Waiting posts',
    to:'/dashboard/admin/waiting-posts',
    exact:false,
    icon:<i class="fas fa-ellipsis-h"></i>
  },
  {
    name:' All owners',
    to:'/dashboard/admin/all-owners',
    exact:false,
    icon:<i class="fas fa-users"></i>
  },
  {
    name:' All reviews',
    to:'/dashboard/admin/all-reviews',
    exact:false,
    icon:<i class="far fa-comment-alt"></i>
  },
  {
    name:' My posts',
    to:'/dashboard/admin/my-posts',
    exact:false,
    icon:<i class="fas fa-globe" aria-hidden="true"></i>
  },

  {
    name:' Chat',
    to:'/dashboard/admin/chat',
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