import React, {Component} from 'react';
import Title from './MainPageItems/MiddlePageItems/Title'
import TopPage from './MainPageItems/TopPageItems/TopPage';
import Footer from './MainPageItems/Footer/Footer';
import FormProfile from './MainPageItems/MiddlePageItems/FormProfile';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
class Profile extends Component{
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
                        <FormProfile></FormProfile>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}
const mapStateToProps= state =>{
    return {
        owner:state.owner
    }
}
export default connect(mapStateToProps,null) (Profile);