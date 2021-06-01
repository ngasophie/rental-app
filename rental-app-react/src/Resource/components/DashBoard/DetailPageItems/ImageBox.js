import React, {Component} from 'react';
import {connect} from 'react-redux';
class ImageBox extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let {value, img_src} = this.props;
        img_src = img_src.concat('img_post');
        if(!value) return;
        let list = value.map((x,index)=>{
            return (
              <figure className="col-md-4" key={index}>
              <a href={`${img_src}/${x.img_src}`} data-size="1600x1067">
                <img alt="picture" src={`${img_src}/${x.img_src}`}
                  className="img-fluid"/>
              </a>
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
const mapStateToProps = state =>{
    return {
        img_src : state.img_src
    }
}
export default connect(mapStateToProps,null) (ImageBox);