import React, {Component} from 'react';
import Register from './GeneralItems/Register'
class RegisterPage extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="register-page user-page">
                <Register></Register>
            </div>
        )
    }
}
export default RegisterPage;