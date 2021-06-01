import React, {Component} from 'react';
class Toggle extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="toggle-collapse">
                <div className="toggle-icons">
                    <i className="fas fa-bars"></i>
                </div>
            </div> 
        )
    }
}
export default Toggle;