import React, {Component} from 'react';
import Title from './MainPageItems/MiddlePageItems/Title'
import TopPage from './MainPageItems/TopPageItems/TopPage';
import Footer from './MainPageItems/Footer/Footer';
import {connect} from 'react-redux';
import FormEdit from './MainPageItems/MiddlePageItems/FormEdit';
import {fetchPostRequest} from './../../actions/index';
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
                        <FormEdit post = {this.props.post}></FormEdit>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        );
    }
    componentDidMount() {
        let {match} = this.props;
        if(match){
            let id = match.params.id;
            this.props.fetchPost(id);
        }
    }
    
}

const mapDispatchToProps = (dispatch, props) => {
    return{
        fetchPost:(id)=>{
            dispatch(fetchPostRequest(id))
        }
    }
}
const mapStateToProps = state => {
    return {
    post:state.post
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (DisablePosts);