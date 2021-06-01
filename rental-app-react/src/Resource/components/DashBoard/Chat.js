import React, {Component} from 'react';
import Title from './MainPageItems/MiddlePageItems/Title'
import TopPage from './MainPageItems/TopPageItems/TopPage';
import Footer from './MainPageItems/Footer/Footer';
import FormChat from './MainPageItems/MiddlePageItems/FormChat';
import {connect} from 'react-redux';
import {getMessages} from './../../actions/post_action';
import {Redirect} from 'react-router-dom';
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
        const {owner} = this.props;
        console.log(owner)
        let owner_email = owner.email;
        this.props.fetchChats({owner_email});
    }
}
const mapStateToProps= state =>{
    return {
        owner:state.owner,
    }
}
const mapDispatchToProps = (dispatch,props) =>{
    return {
        fetchChats :(data)=>{
            dispatch(getMessages(data))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (Chat);