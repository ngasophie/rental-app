import React, {Component} from 'react';
import {Button} from 'reactstrap';
class FormSearch extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <form className="form-inline">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn-search">Search</button>
          </form>
        )
    }
}
export default FormSearch;