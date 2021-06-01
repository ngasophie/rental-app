import React, {Component} from 'react';
import PostList from './GeneralItems/PostList'
import CardList from './GeneralItems/CardList'
import Pagination from './GeneralItems/Pagination'
import FormSearchSmall from './GeneralItems/FormSearchSmall'
import RecentPostRelative from './GeneralItems/RecentPostRelative';
import {actFetchAllPostsRequest} from './../../actions/index';

import {connect} from 'react-redux';
class ListPostPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            itemsPerPage:9,
        }
    }

    render(){
        const {allPosts, img_src,currentPage} = this.props;
        if(allPosts.length == 0) return '';
        let {recommendPosts} = this.props;
        let arr1= recommendPosts.slice(21,24);
        let {dataLocation} = this.props;
        let location = []
        if(dataLocation){
            location = dataLocation.location
        }
        
        return(
            <div className="list-post-page">
            <div className="container">
                <div className="title">All Post</div>
                <div className="list-page-body">
                    <div className="aside-left">
                        <CardList cards ={allPosts} img_src = {img_src}/>
                        <Pagination url={'/list-post'}></Pagination>
                    </div>
                    <div className="aside-right">
                    <FormSearchSmall dataLocation={location}></FormSearchSmall>
                    <RecentPostRelative value = {arr1}/>
                    </div>
                </div>     
            </div>
        </div>
        )
    }
    componentDidMount(){
        this.props.fetchAllPosts(this.props.currentPage);
    }

}
const mapStateToProps = state=>{
    return {
        allPosts: state.allPosts,
        recommendPosts: state.recommendPosts,
        currentPage:state.currentPage,
        dataLocation:state.dataLocation,
        img_src:state.img_src
    }
}
const mapDispatchToProps = (dispatch, props)=>{
    return{
        fetchAllPosts :(number) =>{
            dispatch(actFetchAllPostsRequest(number))
        },
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (ListPostPage);