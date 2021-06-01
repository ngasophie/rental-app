import React, {Component} from 'react';
import {connect} from 'react-redux';
class ViewImages extends Component{
    constructor(props){
        super(props);
    }
    render(){
        console.log('render')
        let {value,img_src} = this.props;
        //  neu dang xoa image cu di
        img_src = img_src.concat('img_post');
        if(!value) return;
        let list = value.map((x, index)=>{
            return (
              <figure className="col-md-4 img-preview-box" >
                <img alt="picture" src={`${img_src}/${x.img_src}`}
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
export default  ViewImages;