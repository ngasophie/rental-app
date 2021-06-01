import React, {Component} from 'react';
import Login from './GeneralItems/Login'
class MainPage extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="login-page user-page mt-1">
                <Login></Login>

            </div>
        )
    }
}
export default MainPage;