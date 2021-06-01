import React, {Component} from 'react';
import IndexPage from '../../IndexPage';
import Post from './Post'
class PostList extends Component{
    constructor(props){
        super(props);
    }
    render(){
        
        //  truyen tu recommend post qua
        const {value} = this.props;

        const listPost = value.map((index)=>
            <Post 
            key = {index.id}
            post={index}
            >
            </Post>
        );
        return(
            <div className="posts">
                {listPost}
            </div>
         )
    }
}
export default PostList;