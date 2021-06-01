import React, {Component} from 'react';
import FormSearch from './MainPageItems/MiddleItems/FormSearch'
import RecommendText from './MainPageItems/MiddleItems/RecommendText'
import RecommendPosts from './MainPageItems/MiddleItems/RecommendPosts'
import CarouselEx from './MainPageItems/MiddleItems/CarouselEx';
import CardList from './GeneralItems/CardList'
import RecentPostList from './MainPageItems/MiddleItems/RecentPostList';
import {connect} from 'react-redux';
import {actFetchRecommendPostRequest, actFetchLocationRequest} from './../../actions/index';
class MainPage extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let {recommendPosts, img_src} = this.props;
        let arr1= recommendPosts.slice(0,4);
        let arr2= recommendPosts.slice(4,12);
        let arr3= recommendPosts.slice(12,16);
        let arr4= recommendPosts.slice(16,20);
        let {dataLocation} = this.props;
        let location = []
        if(dataLocation){
            location = dataLocation.location
        }
        return(
           <div>
               <section className="body-content">
                    <section className="body-title" data-aos="zoom-in-right">
                        <div className="body-title-fade"></div>
                        <div className="body-title-text">
                            <h3  data-aos="fade-up">EA</h3>
                            <h1  data-aos="fade-up">Find accomodate easy than ever </h1>
                            <FormSearch dataLocation = {location}></FormSearch>
                        </div>
                    </section>
                    <RecommendText></RecommendText>
                    <RecommendPosts value = {arr1}></RecommendPosts>
                    <RecommendText></RecommendText>
                    <div className="container carousel-list">
                        <CarouselEx value={arr2}></CarouselEx>
                   
                    </div>
                    <RecommendText></RecommendText>
                    <div className="container">
                        <CardList cards ={ arr3} ></CardList>
                    </div>
                    <RecommendText></RecommendText>
                    <RecentPostList value={arr4}></RecentPostList>
                </section>
                <br/>
            </div>
        )
    }
    componentDidMount(){
        this.props.fetchAllRecommendPosts();
        this.props.fetchLocation();
    }
}
const mapStateToProps = state =>{
    return {
        recommendPosts:state.recommendPosts,
        dataLocation:state.dataLocation,
        img_src:state.img_src
    }
}
const mapDispatchToProps = (dispatch, props)=>{
    return {
        fetchAllRecommendPosts:() =>{
            dispatch(actFetchRecommendPostRequest());
        },
        fetchLocation:() =>{
            dispatch(actFetchLocationRequest());
        },
       
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (MainPage);