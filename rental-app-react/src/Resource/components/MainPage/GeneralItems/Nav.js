// import React, { Component } from 'react';
// import NavItem from './NavItems/NavItem'
import Logo from './NavItems/Logo'
import Toggle from './NavItems/Toggle';
import {NavItem} from 'reactstrap'
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Route, Link} from 'react-router-dom';
import {actDispatchIdUser} from './../../../actions/index';
const menus = [
  {
    name:'Home',
    to :'/',
    exact:true
  },
  {
    name:'Posts',
    to:'/list-post',
    exact:false
  },
  {
    name:'Owners',
    to:'/list-owner',
    exact:false
  },
];
const MenuLink = ({label, to , activeOnlyExact}) =>{
  return (
    <Route
      path={to}
      exact={activeOnlyExact}
      children = {({match})=>{
        let active = match ? 'active' : '';
        return (
            <li className="nav-link">
                <Link to={to}>
                    {label}
                </Link>           
            </li>
          
        )
      }}
    />
  );
}
class Nav extends Component {
  constructor(props){
    super(props);
  }
  onClick = () =>{
  //  log out
          sessionStorage.removeItem('auth_token');
          this.props.dispatchIdUser(null);
      }
  render(){
      let {owner,img_src} = this.props;
      img_src = img_src.concat('avt');
      let link = '';
      if(!owner){
        link =  <MenuLink
                  label = 'Login'
                  to = '/login'
                  activeOnlyExact = {false}
                />
        }
        else{
            link = 
            <li>
              <div className="dropdown">
                  <button className="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                     <div className="avt"><img src={`${img_src}/${owner.img_src}`} alt=""/></div>
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <Link to ='/profile-detail' className="dropdown-item" >Profile details</Link>
                    <button className="dropdown-item" onClick={this.onClick}>
                      Log out
                        </button>
                  </div>
                </div>
                </li>
        }
        return (
            <nav className="nav">
            <div className="nav-menu flex-row">
                    <Logo></Logo>
                    <Toggle></Toggle>
                    <div className="social text-gray">
                    <ul className="nav-items">

                        {this.showMenu(menus)}
                        {link}
                    </ul>
                    </div>
                </div>
            </nav>
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
            />
          )
        })
      }
      return result;
    }
}
const mapStateToProps= state =>{
  console.log(state)
  return {
      owner:state.owner,
      img_src:state.img_src
  }
}
const mapDispatchToProps = (dispatch,props)=>{
  return {
    dispatchIdUser:(user)=>{
      dispatch(actDispatchIdUser(user))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps) (Nav);
