import React, {Component} from 'react';
import CardItem from './CardItem';
import {useParams} from 'react-router-dom';
import Pagination from './Pagination';
class Post extends Component{
    constructor(props){
        super(props);
        this.state = {
            itemsPerPage: 9
        }
    }
    render(){
        //  truyen tu mainpage qua
        const {cards} = this. props;
        if(cards.length==0) return '';
        const listCards = cards.map((index) =>
            <CardItem card = {index} key = {index.id} img_src = {this.props.img_src}/>
        )
        return(
                <div className="card-list">
                   {listCards}
                </div>
         )
    }
}
export default Post;