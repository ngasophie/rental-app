import React, {Component} from 'react';
import GridBox from './GridBox'
class Avatar extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {summary} = this.props;
        if(!summary) return '';
        return(
            <div className="grid-boxes">
                <GridBox className="grid-box box-1" number={summary.post}>Post</GridBox>
                <GridBox className="grid-box box-2" number={summary.like}><i class="fas fa-thumbs-up"></i> Like</GridBox>
                <GridBox className="grid-box box-3" number={summary.love}><i class="fas fa-heart"></i> Love</GridBox>
                <GridBox className="grid-box box-4" number={summary.review}>Review</GridBox>
            </div>
        )
    }
}
export default Avatar;