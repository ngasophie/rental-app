import React, {Component} from 'react';
import Nav from './MainPageItems/Nav';
import Title from './MainPageItems/MiddlePageItems/Title'
import GridBoxList from './MainPageItems/MiddlePageItems/GridBoxList'
import Pagination from './MainPageItems/MiddlePageItems/Pagination'
import TableBordered from './MainPageItems/MiddlePageItems/TableBordered'
import TopPage from './MainPageItems/TopPageItems/TopPage';
import Footer from './MainPageItems/Footer/Footer'
class RecentPosts extends Component{
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
                        <button type="button" className="btn btn-primary mt-2 ml-1"><i className="fas fa-plus-circle"></i>  Add post</button>
                        <TableBordered></TableBordered>
                        <Pagination></Pagination>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}
export default RecentPosts;