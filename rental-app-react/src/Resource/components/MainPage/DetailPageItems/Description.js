import React, {Component} from 'react';
class Description extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
          <div className="des-box">
          <div className="title">Description</div>
          <div className="content">{this.props.description}</div>
      </div>
         )
    }
}
export default Description;