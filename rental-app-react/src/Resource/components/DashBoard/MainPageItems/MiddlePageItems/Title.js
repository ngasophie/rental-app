import React, {Component} from 'react';
import FormSearch from './FormSearch'
class Title extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <nav className="navbar">
                <div className="title">Dashboard</div>
                <FormSearch></FormSearch>
            </nav>
        )
    }
}
export default Title;