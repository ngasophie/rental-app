import React, {Component} from 'react';
import {Link} from 'react-router-dom'
class ModalConfirm extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {url} = this.props
        return (
                <div id="myModal" className="modal fade">
                    <div className="modal-dialog modal-confirm">
                        <div className="modal-content">
                            <div className="modal-header">
                                <div className="icon-box">
                                    <i className="material-icons">&#xE876;</i>
                                </div>				
                                <h4 className="modal-title w-100">Awesome!</h4>	
                            </div>
                            <div className="modal-body">
                                <p className="text-center">You are register success!</p>
                            </div>
                            <div className="modal-footer">
                                <Link to={url} className="btn btn-success btn-block" data-dismiss="modal">OK</Link>
                            </div>
                        </div>
                    </div>
                </div>     
        );
    }
}
export default ModalConfirm;