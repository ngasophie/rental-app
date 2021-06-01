import React, {Component} from 'react';
import PostList from './../../GeneralItems/PostList'
class RecommendPosts extends Component{
    constructor(props){
        super(props);
    }
    render(){
        //  truyen tu mainpage qua => truyen sang post list
        const {value} = this.props;
        return(
            <section className="recommend-posts">
            <div className="container">
               <PostList value = {value}></PostList>
            </div>
        </section>
         )
    }
}
export default RecommendPosts;