import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
class Logo extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
             <div className="nav-brand">
                 <Link to ="/" className="text-gray logo"><img className='img-logo' src="https://code-theme.com/html/findhouses/images/logo-gray.svg" alt=""/>
EA </Link>
            </div>
           
        )
    }
}
export default Logo;