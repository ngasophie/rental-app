import React, {Component} from 'react';
import Owner from './Owner'
class DetailPage extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const { value} = this.props;
        const list = value.map((index)=>
        <Owner item = {index} key = {index.id} ></Owner> 
        )
        return(
            <div className="card-list">
                   {list}
            </div>
        )
    }
}
export default DetailPage;