import React, {Component} from 'react';
import confirm from "reactstrap-confirm";
class Title extends Component{
    constructor(props){
        super(props);
        this.state={
            _like:false,
            favourite:false,
            report:false
        }
    }
    onLike = () =>{
        let {_like } = this.state;
        _like =!_like
        if(sessionStorage.getItem('auth_token')){
            this.setState({
                _like
            })
        }
        else{
            alert('login to continue')
        }
    }
    onFavourite = () =>{
        let {favourite} = this.state;
        if(sessionStorage.getItem('auth_token')){
            this.setState({
                favourite:!favourite
            })
        }
        else{
            alert('login to continue')
        }
    }
    onReport = async ()=>{
        if(sessionStorage.getItem('auth_token')){
           let result =  await confirm();
            if(result){
                this.setState({
                    report:true
                })
            }
        }
        else{
            alert('login to continue')
        }
    }
    render(){
        const {_like,favourite,report} = this.state;
        return(
            <div className="title-box">
                <div className="title">{this.props.title}</div>
                <div className="location">{this.props.location}</div>
                <div className="price">{this.props.price} VND</div>
                <i class={`fas fa-thumbs-up like ${_like?'like-click':''}`} onClick ={this.onLike}>{this.props.like_number}</i>
                <i class={`fas fa-heart favoutite ${favourite?'favourite-click':''}`} onClick = {this.onFavourite}>{this.props.favourite_number}</i>
                <button type="button" class="btn-report" disabled={report} onClick = {this.onReport}>Report</button>
            </div>
         )
    }
}
export default Title;