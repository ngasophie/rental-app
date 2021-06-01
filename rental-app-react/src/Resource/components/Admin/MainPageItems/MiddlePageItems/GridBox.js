import React, {Component} from 'react';
class GridBox extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className={this.props.className}>
            <div className="title">{this.props.children}</div>
            <div className="number">{this.props.number}</div>
            <div className="date-modified">Since last week</div>
        </div>
        )
    }
}
export default GridBox;