import React, {Component} from 'react';
import Nav from './MainPageItems/Nav';
import Title from './MainPageItems/MiddlePageItems/Title'
import FormAddPost from './MainPageItems/MiddlePageItems/FormAddPost'
import Pagination from './MainPageItems/MiddlePageItems/Pagination'
import TableBordered from './MainPageItems/MiddlePageItems/TableBordered'
import TopPage from './MainPageItems/TopPageItems/TopPage';
import Footer from './MainPageItems/Footer/Footer';
import {Redirect} from 'react-router-dom';
import UploadMulImage from './MainPageItems/MiddlePageItems/UploadMulImage';
class DisablePosts extends Component{
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
                        <FormAddPost></FormAddPost>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}
export default DisablePosts;