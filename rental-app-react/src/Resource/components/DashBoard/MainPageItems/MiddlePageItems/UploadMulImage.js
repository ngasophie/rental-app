import React from 'react';
import PreviewImage from './PreviewImage';
import ImageUploader from 'react-images-upload';
import axios from 'axios';
import callApiBackEnd from './../../../../utils/apiDashboardCall';
class UploadMulImage extends React.Component {
 
    constructor(props) {
        super(props);
         this.state = { pictures: [] };
         this.onDrop = this.onDrop.bind(this);
    }
 
    onDrop(picture) {
        this.setState({
            pictures: picture,
        });
        this.props.onDrop(picture)
    }
    onDelete = (index) =>{
        let {pictures} = this.state;
        pictures.splice(index,1);
        this.setState({pictures})
    }
    render() {
        let {pictures} = this.state;
        let list = '';
        if(pictures.length != 0){
        list = <PreviewImage value = {pictures} onClick = {this.onDelete}></PreviewImage>
        }
        return (
            <div className= 'img-upload'>
                {list}
            <ImageUploader className='ipn-upload'
                    withIcon={true}
                    buttonText='Choose images'
                    onChange={this.onDrop}
                    imgExtension={['.jpg', '.gif', '.png', '.gif']}
                    maxFileSize={5242880}
                />
            </div>
        );
    }
}
export default UploadMulImage;