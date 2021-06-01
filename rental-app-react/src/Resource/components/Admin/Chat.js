import React, {Component} from 'react';
import Title from './MainPageItems/MiddlePageItems/Title'
import TopPage from './MainPageItems/TopPageItems/TopPage';
import Footer from './MainPageItems/Footer/Footer';
import FormChat from './MainPageItems/MiddlePageItems/FormChat';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {getConversations} from './../../actions/post_action';
// import {getMessages}
class Chat extends Component{
    constructor(props){
        super(props);

    }
    render(){

        return(
    
            <div className="right-page">
                <TopPage></TopPage>
                <div className="middle">
                    <div className="container">
                        <FormChat></FormChat>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        );
    }
    componentDidMount(){
        this.props.fetchConversations();
    }
}
const mapStateToProps= state =>{
    return {
        owner:state.owner
    }
}
const mapDispatchToProps = (dispatch,props) =>{
    return {
        fetchConversations:()=>{
            dispatch(getConversations())
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (Chat);