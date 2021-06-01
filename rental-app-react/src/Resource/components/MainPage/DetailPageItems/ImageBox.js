import React, {Component} from 'react';
import {connect} from 'react-redux';
class ImageBox extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let {img, img_src} = this.props;
        console.log(img)
        img_src = img_src.concat('img_post');
        return(
          <div className="image-box">
            <div className="img-left">
                <img src={`${img_src}/${img[0].img_src}`} alt=""/>
            </div>
            <div className="img-right">
                <img src={`${img_src}/${img[1].img_src}`} alt=""/>
                <img src={`${img_src}/${img[2].img_src}`} alt=""/>
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