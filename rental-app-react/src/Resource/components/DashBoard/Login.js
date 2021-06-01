import React, {Component} from 'react';
import {Route, Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import { validateEmail } from '../../utils/validate';
import * as Config from './../../constants/Config';
import axios from 'axios';
import { actDispatchIdUser } from '../../actions/dashboardAction/getAction';
class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            email:"",
            password:"",
            emailEr : '',
            passwordEr:'',
            role:1,
        }
    }
    onChange = (event) =>{
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
        [name]: value
        });
    }
    onSubmit = (event) =>{
        event.preventDefault();
        let {history} = this.props;
        let {email, password,role} = this.state;
        if(password.length<6){
            let passwordEr="Password must be greater than 6 letters";
            this.setState({
                passwordEr
            });
            return ;
        }
        else{
            let passwordEr="";
            this.setState({
                passwordEr
            });
        }
        if(!validateEmail(this.state.email)){
            this.setState({
                emailEr:"Invalid email"
            })
            return;
        }
        else{
            this.setState({
                emailEr:""
            })
        }
        axios({
            method: 'POST',
            url: `${Config.API_BACKEND}/api/auth/owner/login`,
            data: {email,password,role},
            }).then(res=>{
                if(res){
                    console.log(res)
                    sessionStorage.setItem('owner/admin-login',res.data.access_token);
                    this.setState({
                        email:"",
                    })
                    this.props.dispatchIdUser(res.data.user);
                }})
            .catch(err =>{
                console.log(err)
            })
        }
    render(){
        if(sessionStorage.getItem('owner/admin-login')){
            return <Redirect to='/dashboard/main-page'  />
        }
        return(
            <div className="login-page user-page">
            <div className="user-form" >
                    <div className="form-box"data-aos="fade-down">
                    <Link to='/' className="close-left">
                        <i className="fas fa-times left"  id="close-1" data-dismiss="modal" aria-label="Close"></i>
                    </Link>  
                        <div className="btn-box">
                            Login
                        </div>
                        <div className="icon-box">
                            <img src="../images/social_icon/fb.png" alt=""/>
                            <img src="../images/social_icon/lk.png" alt=""/>
                            <img src="../images/social_icon/tw.png" alt=""/>
                        </div>
                        <form className="form" id="form-login"
                        onSubmit = {this.onSubmit}
                        >
                            <input type="email" className="email mt-1" name="email" placeholder="Email" required
                            onChange= {this.onChange}
                            />
                            <small className="email-error error-disable">{this.state.emailEr}</small>
                            <input type="password" className="password mt-1" name="password" placeholder="Password" required
                            onChange= {this.onChange}
                            />
                            <small className="password-error error-disable" >{this.state.passwordEr}</small>
                            <button type="submit" className="btn-submit mt-1">Login</button>
                        </form>
                        <Link to='/dashboard/register' className= 'register-nav'>
                            <span className='hight-light'>Don't have an account? Register</span>
                            </Link>  
                    </div>
          </div>
    </div>
         )
    }
}
const mapDispatchToProps = (dispatch, props) =>{
    return{
        dispatchIdUser:(owner) =>{
            dispatch(actDispatchIdUser(owner))
        }
    };
}
export default connect(null, mapDispatchToProps) (Login);