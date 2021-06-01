import React, { Component } from 'react';
import UploadMulImage from './../MiddlePageItems/UploadMulImage';
import {connect} from 'react-redux';
import {editPost} from './../../../../actions/post_action';
import {fetchPostRequest} from './../../../../actions/index';
import ViewImages from './EditViewImage';
class FormEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            districts:[],
            typesChoose:[
                "Phòng trọ",
                "Chung cư mini",
                "Nhà nguyên căn",
                "Chung cư nguyên căn",
            ],
            roomsChoose:[
                1,2,3,4,5,6,7,8,9
            ],
            kitchenChoose:[
                'Bếp chung',
                "Bếp riêng",
                'Không nấu ăn'
            ],
            timeLineChoose:[
                "1 tháng",
                "3 tháng",
                "6 tháng",
                "1 năm"
            ],
            waterUnitChoose:[
                "1 số",
                "1 khối"
            ],
            type:'phòng trọ',
            rooms:1,
            kitchen:'Bếp chung',
            internet_price_unit:'1 tháng',
            price_unit:'1 tháng',
            other:'',
            air_cond: 0,
            bancony:0,
            general_owner:0,
            pictures:[],
            oldImages:[],
            imgDeleteId:[],
            disabledBtn:true,
            files:[]
        }
    }
    onChange = (event) => {
        if(event.target.name == 'city'){
            let city = event.target.value;
            let districts = this.state.districts;
            districts=[];
            let {dataLocation} = this.props;
            dataLocation = dataLocation.location
            for(let i=1; i<=63;i++){
                if(event.target.value == dataLocation[0][i].name){
                    console.log(Object.values(dataLocation[0][i].districts).length)
                    for(let j = 0; j<Object.values(dataLocation[0][i].districts).length;j++ ){
                        districts.push(Object.values(dataLocation[0][i].districts)[j]);
                    }
                    this.setState({
                        city,
                        districts,
                        disabledBtn:false
                    })
                    break;
                }
            }  
        }
        else{

            const target = event.target;
            const value = target.type === 'checkbox' ? target.checked : target.value;
            const name = target.name;
            this.setState({
            [name]: value,
            disabledBtn:false

            });
        }
    }
    onDrop = (picture)=>{
        this.setState({
            pictures:picture,
            disabledBtn:false

        })
    }
    onDelete = (index)=>{
        let {oldImages,imgDeleteId} = this.state;
        let imgDelete = oldImages.splice(index,1);
        console.log(imgDelete)
        imgDeleteId.push(imgDelete[0].id);
        console.log(imgDeleteId)
        this.setState({
            oldImages,
            imgDeleteId,
            disabledBtn:false
        })
    }
    onSubmit = (event) =>{
        event.preventDefault();
        console.log(this.state);
        let {title, address, city, district ,
            area,water_price,internet,price,pictures,
            description,type,rooms, bath_rooms,
            air_cond,  bancony,general_owner,other,remain,
            kitchen,electric_price,oldImages,post_id,
            imgDeleteId, price_unit,internet_price_unit


        } = this.state;
        air_cond = air_cond?1:0;
        bancony = bancony?1:0;
        general_owner = general_owner?1:0;
        let isPassed = true;
        if(isNaN(Number(area))){
            alert('area must be numeric');
            isPassed = false;
        }
        console.log(Number(water_price))
        if(isNaN(Number(water_price))){
            alert('water price must be numeric')
            isPassed = false;
        }
        if(isNaN(Number(internet))){
            alert('internet must be numeric')
            isPassed = false;
        }
        if(isNaN(Number(price))){
            alert('price must be numeric')
            isPassed = false;
        }
        if(isNaN(Number(electric_price))){
            alert('electric price must be numeric')
            isPassed = false;
        }
        if((pictures.length+oldImages.length)<3){
            alert('Select at least 3 pictures')
            isPassed = false;
        }
        if(isPassed){
            const formData = new FormData();
            if(pictures.length==0){
                formData.append('files[]',[]);
            }
            else{
                for (let i = 0; i < pictures.length; i += 1) {
                    formData.append('files[]', pictures[i], pictures[i].name);
                }
            }
            if(imgDeleteId.length==0){
                formData.append('imgDeleteId[]',[]);
            }
            else{
                for (let i = 0; i < imgDeleteId.length; i += 1) {
                    formData.append('imgDeleteId[]', imgDeleteId[i]);
                }
            }
            formData.append('title',title);
            formData.append('address',address);
            formData.append('description',description);
            formData.append('city',city);
            formData.append('district',district);
            formData.append('type',type);
            formData.append('rooms',rooms);
            formData.append('bath_rooms',bath_rooms);
            formData.append('water_price',water_price);
            formData.append('area',area);
            formData.append('internet',internet);
            formData.append('price',price);
            formData.append('air_cond',air_cond);
            formData.append('bancony',bancony);
            formData.append('general_owner',general_owner);
            formData.append('other',other);
            formData.append('kitchen',kitchen);
            formData.append('remain',1);
            formData.append('electric_price',electric_price);
            formData.append('post_id',post_id);
            formData.append('price_unit',price_unit);
            formData.append('internet_price_unit',internet_price_unit)
            editPost(formData,post_id);
        }
    }
    render() {
        console.log(this.state);

        let {post,img_src} = this.props;
        if(!post.status) return'';
        let { dataLocation } = this.props;
        dataLocation = dataLocation.location;
        let {districts, typesChoose,roomsChoose,
             kitchenChoose, timeLineChoose,waterUnitChoose,oldImages,
             disabledBtn
             } = this.state;
        let prevewImages =  <ViewImages
                                img_src = {img_src}
                                value = {oldImages}
                                onClick = {this.onDelete}
                                ></ViewImages>
        let city = [];
        let districtsList = {
            city: '',
            districts: []
        }
        if (dataLocation) {
            for (let i = 1; i <= 63; i++) {
                city.push(dataLocation[0][i].name)
            }
        }
        let listCity = '';
        if (city.length > 0) {
            listCity = city.map((index) =>
                <option 
                selected = {post.address.city == index ? 'selected':''}
                value={index} key={index}>{index}</option>
            )
        }
        let listDistrict = districts.map((index) =>
            <option 
            selected = {post.address.district == index ? 'selected':''}
            value={index} key={index}>{index}</option>
        )
      
        let listType = typesChoose.map((x,index)=>
        <option 
        selected = {post.type.type == index ? 'selected':''}
        value={x} key={index}>{x}</option>
        )
        let listRoom = roomsChoose.map((x,index)=>
        <option value={x} key={index}
        selected = {post.facilities.rooms == index ? 'selected':''}
        >{x}</option>
        )
        let listKitchen = kitchenChoose.map((x,index)=>
        <option value={x} key={index}
        selected = {post.facilities.kitchen == index ? 'selected':''}
        >{x}</option>
        )
        let listTimePrice= timeLineChoose.map((x,index)=>
        <option value={x} key={index}
        selected = {post.facilities.price_unit == index ? 'selected':''}
        >{x}</option>
        )
        let listTimeInternetPrice= timeLineChoose.map((x,index)=>
        <option value={x} key={index}
        selected = {post.facilities.internet_price_unit == index ? 'selected':''}
        >{x}</option>
        )
        let listWaterUnit = waterUnitChoose.map((x,index)=>
        <option value={x} key={index}>{x}</option>
        )
        return (
            <form id="form-add-post" onSubmit = {this.onSubmit}>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label for="inputEmail4">Title</label>
                        <input type="text" name="title" required
                        defaultValue={post.title}
                        onChange = {this.onChange}
                        className="form-control" placeholder="title" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group  col-md-6">
                        <label for="inputState">City</label>
                        <select name="city" id="" onChange={this.onChange} className="form-control
                        " required>       
                            <option value={post.address.city}>{post.address.city}</option>
                            {listCity}
                        </select>

                    </div>
                    <div className="form-group  col-md-6">
                        <label for="inputState">District</label>
                        <select name="district" id="" onChange={this.onChange} required className="form-control">
                            <option value={post.address.district}>{post.address.district}</option>
                            {listDistrict}
                        </select>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group  col-md-12">
                        <label for="inputZip">Address</label>
                        <input type="text" className="form-control" 
                        name="address"
                        required
                        onChange = {this.onChange}
                        defaultValue ={post.address.address}
                        />
                    </div>
                </div>
                <div className="form-group ">
                    <label for="exampleFormControlTextarea1">Description</label>
                    <textarea className="form-control" rows="3"
                    name='description'
                    required
                    onChange = {this.onChange}
                    defaultValue ={post.description}
                    ></textarea>
                </div>
                <div className="form-row">
                    <div className="form-row col-md-6 mr-1">
                        <label for="inputState">Type</label>
                        <select className="form-control"
                        onChange = {this.onChange}
                        defaultValue ={post.type.type}
                        name = 'type'
                        >
                            {listType}
                        </select>
                    </div>
                    <div className="form-row col-md-6 mr-1">
                        <label for="inputState">Rooms</label>
                        <select className="form-control"
                        name='rooms'
                        onChange = {this.onChange}
                        >
                            {listRoom}
                        </select>
                    </div>
                    <div className="form-row col-md-6 mr-1">
                        <label for="inputState">Bath rooms</label>
                        <input type="text" className="form-control"
                        name='bath_rooms'
                        onChange = {this.onChange}
                        defaultValue={post.facilities.bath_rooms}
                         />
                    </div>
                    <div className="form-row col-md-6 mr-1">
                        <label>Area (m2)</label>
                        <input type="text" className="form-control"
                        name='area'
                        defaultValue = {post.facilities.area}
                        required
                        onChange = {this.onChange}
                         />
                    </div>
                    <div className="form-row col-md-6 mr-1">
                        <label>Kitchen</label>
                        <select className="form-control"
                        value={post.facilities.kitchen}
                        name='kitchen'
                        onChange = {this.onChange}

                        >
                            {listKitchen}
                        </select>
                    </div>
                    <div className="form-row col-md-6 mr-1">
                        <label>Water price/ number</label>
                        <input type="text" className="form-control" 
                        name='water_price'
                        required
                        defaultValue={post.facilities.water_price}
                        onChange = {this.onChange}
                        />
                    </div>
                    <div className="form-row col-md-6 mr-1">
                        <label for="inputState">Internet</label>
                        <input type="text" className="form-control" 
                        name='internet'
                        required
                        defaultValue={post.facilities.internet}
                        onChange = {this.onChange}
                        />

                    </div>
                    <div className="form-row col-md-6 mr-1">
                        <label for="inputState">Price per unit</label>
                        <select className="form-control"
                        name='internet_price_unit'
                        onChange = {this.onChange}
                        >
                           {listTimeInternetPrice}
                        </select>
                    </div>
                    <div className="form-row col-md-6 mr-1">
                        <label for="inputState">Price</label>
                        <input type="text" className="form-control" 
                        required
                        onChange = {this.onChange}
                        name ='price'
                        defaultValue = {post.facilities.price}
                        />
                    </div>
                    <div className="form-row col-md-6 mr-1">
                        <label for="inputState">Price per unit</label>
                        <select className="form-control"
                        onChange = {this.onChange}
                        name='price_unit'
                        >
                          {listTimePrice}
                        </select>
                    </div>
                    <div className="form-row col-md-6 mr-1">
                        <label for="inputState">Electric price</label>
                        <input className="form-control"
                        name='electric_price'
                        required
                        defaultValue ={post.facilities.electric_price}
                        onChange = {this.onChange}

                        />
                    </div>
                </div>
                <div className="amenities mt-1 mb-1">
                    <div className="title">Amenities</div>
                    <div className="content">
                        <div className="form-row mt-1">
                            <div className="form-check mr-1">
                                <input className="form-check-input" type="checkbox"
                                onChange = {this.onChange} 
                                name = 'air_cond'
                                defaultChecked = {post.facilities.air_cond == 1?true:false}
                                />
                                <label className="form-check-label" for="gridCheck">
                                    Air Cond
                            </label>
                            </div>
                            <div className="form-check mr-1">
                                <input className="form-check-input" type="checkbox" 
                                onChange = {this.onChange}
                                defaultChecked = {post.facilities.bancony == 1?true:false}
                                name = 'bancony'
                                />
                                <label className="form-check-label" for="gridCheck">
                                    Bancony
                            </label>
                            </div>
                            <div className="form-check mr-1">
                                <input className="form-check-input" type="checkbox" 
                                onChange = {this.onChange}
                                defaultChecked = {post.facilities.general_owner == 1?true:false}
                                name='general_owner'
                                />
                                <label className="form-check-label" for="gridCheck">
                                    General owner
                            </label>
                            </div>
                        </div>
                        <div className="form-group mt-1">
                            <label for="exampleFormControlTextarea1">Other</label>
                            <textarea className="form-control" rows="3"
                            name='other'
                            onChange = {this.onChange}
                            defaultValue={post.facilities.other?post.facilities.other:''}
                            ></textarea>
                        </div>
                    </div>
                </div>
               {prevewImages}
                <UploadMulImage onDrop = {this.onDrop} required></UploadMulImage>
                <div className="btn-box">
                    <button type="submit" id="submit" className={`btn-submit ${disabledBtn?'disabled':''}`}
                    disabled={disabledBtn}
                    >Submit All</button>
                </div>
            </form>
        )
    }
    componentWillReceiveProps(nextProps){
        if(nextProps && nextProps.post){
            let {post} = nextProps;
            this.setState({
                title:post.title,
                address:post.address.address,
                description:post.description,
                city:post.address.city,
                district:post.address.district,
                type:post.type.type,
                rooms:post.facilities.rooms,
                bath_rooms:post.facilities.bath_rooms,
                water_price:post.facilities.water_price,
                area:post.facilities.area,
                internet:post.facilities.internet,
                price:post.facilities.price,
                air_cond:post.facilities.air_cond,
                bancony:post.facilities.bancony,
                general_owner:post.facilities.general_owner,
                kitchen:post.facilities.kitchen,
                electric_price:post.facilities.electric_price,
                oldImages:post.images,
                other:post.facilities.other,
                price_unit:post.facilities.price_unit,
                internet_price_unit:post.facilities.internet_price_unit,
                post_id : post.id
            })

        }
    }
}
const mapStateToProps = state => {
    return {
      dataLocation: state.dataLocation,
      post:state.post,
      img_src :state.img_src
    }
}
export default connect(mapStateToProps,null) (FormEdit);