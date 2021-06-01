import React, {Component} from 'react';
export default class MessageMine extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {content}= this.props
        return (
            <div className="message mine">
                <span>{content}</span>
            </div>
        )
    }
}