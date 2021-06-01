import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import {addRenterRequest, registerRequest} from './../../../actions/post_action';
import {connect} from 'react-redux';
import ModalConfirm from './ModalConfirm';
import { validateEmail } from '../../../utils/validate';
import  { Redirect } from 'react-router-dom'
import * as Config from './../../../constants/Config';
import axios from 'axios';
class Register extends Component{
    constructor(props){
        super(props);
        this.state = {
                name :"",
                email:"",
                password:"",
                passwordCf :"",
                remember:false,
                emailEr:"",
                passwordEr:"",
                passwordCfEr:""
        }
    }
    onChange = (event) =>{
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]:value
        }) 
    }
    onSubmit = (e) =>{
        e.preventDefault();
        if(!validateEmail(this.state.email)){
            this.setState({
                emailEr:"Invalid email"
            })
            return;
        }
        if(this.state.password.length >=6){
           
            if(this.state.passwordCf === this.state.password){
                this.setState({
                    passwordEr:"",
                    passwordCfEr:""
                })
                const data = {
                    name: this.state.name,
                    email: this.state.email,
                    password:this.state.password,
                    password_confirmation:this.state.passwordCf
                }
                axios({
                    method: 'POST',
                    url: `${Config.API_BACKEND}/api/auth/register`,
                    data: data,
                    }).then(res=>{
                        localStorage.setItem('register','yes');
                        if(res){
                            this.setState({
                                email:""
                            })
                        }})
                    .catch(err =>{
                        console.log(err)
                    })
                }
            
            else{
                let er="Password confirm is not match";
                this.setState({
                    passwordCfEr:er,
                    passwordEr:""
                })
            }
        }
        else{
            let er = "Password must be more than 6 letters";
            this.setState({
                passwordEr:er,
                passwordCfEr:""
            })
        }
    }
    render(){
        if(sessionStorage.getItem('auth_token')){
            return <Redirect to='/login'  />
        }
        return(
            <div className="user-form">
            <div className="form-box" data-aos="fade-down">
                    <Link to='/' className="close-left">
                        <i className="fas fa-times left"  id="close-1" data-dismiss="modal" aria-label="Close"></i>
                    </Link>                 
                <div className="btn-box">
                    Register
                </div>
                <div className="icon-box">
                    <img src="./images/social_icon/fb.png" alt=""/>
                    <img src="./images/social_icon/lk.png" alt=""/>
                    <img src="./images/social_icon/tw.png" alt=""/>
                </div>
                <form className="form" id="form-register" onSubmit = {this.onSubmit}>
                    <input type="text" className="name" name="name" placeholder="User name" 
                    required 
                    onChange = {this.onChange}
                    />
                    {/* <small className="name-error error-disable" >error</small> */}
                    <input type="email" className="email" name="email" placeholder="Email"  
                    required
                    onChange = {this.onChange}
                    />
                    <small className="email-error error-disable"
                    
                     > {this.state.emailEr}</small>
                    <input type="password" className="password" name="password" placeholder="Password" 
                    required
                    onChange = {this.onChange}
                    />
                    <small className="password-error error-disable"
                     
                    > {this.state.passwordEr}</small>
                    <input type="password" className="password" name="passwordCf" placeholder="Confirm your password" 
                    required
                    onChange = {this.onChange}
                    />
                    <small className="password-cf-error error-disable"
                       
                    >{this.state.passwordCfEr}</small>
                    {/* <div className="check-box">
                        <input type="checkbox"id="agree" className="check-box-input" name="remember" 
                        required
                        onChange = {this.onChange}
                        checked={this.state.remember}/>
                        <span>I agree the conditon</span>
                    </div> */}
                    <button type="submit" className="btn-submit mt-1">Register
                    <div className="text-center">
                            {/* <!-- Button HTML (to Trigger Modal) --> */}
                            <Link to="#myModal" className="trigger-btn"  data-toggle="modal"></Link>
                        </div>
                    </button>
                    <ModalConfirm url={'/login'}></ModalConfirm>
                    <Link to='/login' className= 'register-nav'>
                        <span className='hight-light'>Have an account? Login</span>
                    </Link>  
                </form>
            </div>
        </div>
         )
    }

}

const mapDispatchToProps = (dispatch, props) =>{
    return{
        addRenter:(data) =>{
            dispatch(addRenterRequest(data));
        }
    }
}
export default connect(null, mapDispatchToProps)(Register);