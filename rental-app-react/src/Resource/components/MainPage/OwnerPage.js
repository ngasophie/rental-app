import React, {Component} from 'react';
import OwnerList from './OwnerItems/OwnerList';
import Pagination from './GeneralItems/Pagination'
import FormSearchSmall from './GeneralItems/FormSearchSmall'
import RecentPostRelative from './GeneralItems/RecentPostRelative';
import {connect} from 'react-redux';
import {actFetchAllOwnersRequest} from './../../actions/index'
class OwnerPage extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {allOwners, recommendPosts} = this.props;
        if(allOwners.length ===0) return '';
        console.log(allOwners);
        let arr1= recommendPosts.slice(21,24);
        let {dataLocation} = this.props;
        let location = []
        if(dataLocation){
            location = dataLocation.location
        }
        return(
            <div className="list-post-page">
                <div className="container">
                    <div className="title">All Owner</div>
                        <div className="list-page-body">
                            <div className="aside-left">
                                <OwnerList value = {allOwners}></OwnerList>
                                <Pagination url={'/list-owner'}></Pagination>
                            </div>
                            <div className="aside-right">
                                <FormSearchSmall dataLocation={location}></FormSearchSmall>
                                <RecentPostRelative value = {arr1}></RecentPostRelative>
                            </div>
                    </div>
                </div>
             </div>
        )
    }
    componentDidMount(){
        //  fetch data
        this.props.fetchAllOwners(1);
    }
}
const mapStateToProps = state =>{
    console.log(state);
    return {
        allOwners:state.allOwners,
        recommendPosts: state.recommendPosts,
        dataLocation: state.dataLocation,
    }
}
const mapDispatchToProps = (dispatch,props) =>{
    return {
        fetchAllOwners : (number) =>{
            dispatch(actFetchAllOwnersRequest(number));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (OwnerPage);