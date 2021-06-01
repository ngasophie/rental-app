import React, {Component} from 'react';
import {connect} from 'react-redux';
class PreviewImage extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let {value} = this.props;
        if(!value) return;
        let list = value.map((x, index)=>{
            return (
              <figure className="col-md-4 img-preview-box" >
                <img alt="picture" src={URL.createObjectURL(x)}
                  className="img-fluid"/>
                  <i class="fas fa-times-circle icon-delete" onClick = {this.props.onClick.bind(this,index )}></i>
            </figure>
            )
        })
        return(
            <div className="row">
            <div className="form-row col-md-12 flex-row">
              {list}
              </div>

          </div>
        )
    }
}
export default PreviewImage;