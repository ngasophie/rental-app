import React, {Component} from 'react';
export default class MessageOther extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {content}= this.props;
        return (
            <div className="message other">
                    <span>{content}</span>
                </div>
        )
    }
}