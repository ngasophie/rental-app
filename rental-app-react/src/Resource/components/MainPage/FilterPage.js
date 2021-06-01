import React, {Component} from 'react';
import PostList from './GeneralItems/PostList'
import CardList from './GeneralItems/CardList'
import Pagination from './GeneralItems/Pagination'
import FormSearchForFilter from './GeneralItems/FormSearchForFilter'
import RecentPostRelative from './GeneralItems/RecentPostRelative';
import {actFetchAllPostsRequest} from './../../actions/index';

import {connect} from 'react-redux';
class FilterPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            itemsPerPage:9,
        }
    }

    render(){
        const {filterPosts, img_src,currentPage} = this.props;
        console.log(filterPosts)
        if(!filterPosts) return '';
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
                <div className="title">Filter Post</div>
                <div className="list-page-body">
                    <div className="aside-left">
                        <CardList cards ={filterPosts} img_src = {img_src}/>
                        <Pagination url={'/filter-post'} data={this.state.data}></Pagination>
                    </div>
                    <div className="aside-right">
                    <FormSearchForFilter dataLocation={location}></FormSearchForFilter>
                    <RecentPostRelative value = {arr1}/>
                    </div>
                </div>     
            </div>
        </div>
        )
    }
}
const mapStateToProps = state=>{
    return {
        filterPosts: state.filterPosts,
        recommendPosts: state.recommendPosts,
        currentPage:state.currentPage,
        dataLocation:state.dataLocation,
        img_src:state.img_src
    }
}
export default connect(mapStateToProps,null) (FilterPage);