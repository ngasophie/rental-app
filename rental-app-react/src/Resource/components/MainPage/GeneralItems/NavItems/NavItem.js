import React, {Component} from 'react';
class NavItem extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <li className="nav-link">
                <a href="index.html">Home</a>
            </li>
        )
    }
}
export default NavItem;