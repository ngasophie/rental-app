import React, {Component} from 'react';
import Title from './MainPageItems/MiddlePageItems/Title'
import Pagination from './MainPageItems/MiddlePageItems/Pagination'
import TopPage from './MainPageItems/TopPageItems/TopPage';
import Footer from './MainPageItems/Footer/Footer';
import ReviewList from './MainPageItems/MiddlePageItems/ReviewList'
class Reviews extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
    
            <div className="right-page">
                <TopPage></TopPage>
                <div className="middle">
                    <div className="container">
                       <Title></Title>
                        <ReviewList></ReviewList>
                        <Pagination></Pagination>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}
export default Reviews;