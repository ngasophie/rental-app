import React, {Component} from 'react';
import {Route, Link, Redirect} from 'react-router-dom';
import { loginRequest } from '../../../actions/post_action';
import {connect} from 'react-redux';
import callApiBackEnd from './../../../utils/apiCallBackend'
import { validateEmail } from '../../../utils/validate';
import * as Config from './../../../constants/Config';
import { actDispatchIdUser } from '../../../actions/dashboardAction/getAction';
import axios from 'axios';
class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            email:"",
            password:"",
            emailEr : '',
            passwordEr:''
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
        let {email, password} = this.state;
        if(!validateEmail(this.state.email)){
            this.setState({
                emailEr:"Invalid email"
            })
            return;
        }
        axios({
            method: 'POST',
            url: `${Config.API_BACKEND}/api/auth/login`,
            data: {email,password},
            }).then(res=>{
                if(res){
                    this.props.dispatchIdUser(res.data.user);
                    sessionStorage.setItem('auth_token',res.data.access_token);
                    this.setState({
                        email:""
                    })
                }})
            .catch(err =>{
                console.log(err)
            })
        }
    render(){
        if(sessionStorage.getItem('auth_token')){
            return <Redirect to='/'  />
        }
        return(
            <div className="user-form" >
                    <div className="form-box"data-aos="fade-down">
                    <Link to='/' className="close-left">
                        <i className="fas fa-times left"  id="close-1" data-dismiss="modal" aria-label="Close"></i>
                    </Link>  
                        <div className="btn-box">
                            Login
                        </div>
                        <div className="icon-box">
                            <img src="./images/social_icon/fb.png" alt=""/>
                            <img src="./images/social_icon/lk.png" alt=""/>
                            <img src="./images/social_icon/tw.png" alt=""/>
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
                            {/* <div className="check-box">
                                <input type="checkbox"id="remember-password" className="check-box-input" name="remember"/>
                                <span>Remember your password</span>
                            </div> */}
                            <button type="submit" className="btn-submit mt-1">Login</button>
                            <Link to='/register' className= 'register-nav'>
                            <span className='hight-light'>Don't have an account? Register</span>
                            </Link>  
                        </form>
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
export default connect(null,mapDispatchToProps) (Login);