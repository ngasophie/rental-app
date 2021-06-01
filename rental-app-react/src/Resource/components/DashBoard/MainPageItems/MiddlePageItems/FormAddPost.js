import React, { Component } from 'react';
import UploadMulImage from './../MiddlePageItems/UploadMulImage';
import {connect} from 'react-redux';
import {sendPost} from './../../../../actions/post_action';
class FormProfile extends Component {
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
            pictures:[]
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
                        districts
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
            [name]: value
            });
        }
    }
    onDrop = (picture)=>{
        this.setState({
            pictures:picture
        })
    }
    onSubmit = (event) =>{
        event.preventDefault();
        console.log(this.state);
        let {title, address, city, district ,
            area,water_price,internet,price,pictures,
            description,type,rooms, bath_rooms,
            air_cond,  bancony,general_owner,other,remain,
            kitchen,electric_price,
            price_unit,internet_price_unit

        } = this.state;
        air_cond = air_cond?1:0;
        bancony = bancony?1:0;
        general_owner = general_owner?1:0;
        let isPassed = true;
        if(isNaN(area)){
            alert('area must be numeric');
            isPassed = false;
        }
        if(isNaN(water_price)){
            alert('water price must be numeric')
            isPassed = false;
        }
        if(isNaN(internet)){
            alert('internet must be numeric')
            isPassed = false;
        }
        if(isNaN(price)){
            alert('price must be numeric')
            isPassed = false;
        }
        if(isNaN(electric_price)){
            alert('electric price must be numeric')
            isPassed = false;
        }
        if(pictures.length<3){
            alert('Select at least 3 pictures')
            isPassed = false;
        }
        if(isPassed){
            const formData = new FormData();
            for (let i = 0; i < pictures.length; i += 1) {
                formData.append('files[]', pictures[i], pictures[i].name);
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
            formData.append('price_unit',price_unit);
            formData.append('internet_price_unit',internet_price_unit)
            sendPost(formData)
        }
    }
    render() {
        let { dataLocation } = this.props;
        dataLocation = dataLocation.location;
        let {districts, typesChoose,roomsChoose, kitchenChoose, timeLineChoose,waterUnitChoose } = this.state;
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
                <option value={index} key={index}>{index}</option>
            )
        }
        let listDistrict = districts.map((index) =>
            <option value={index} key={index}>{index}</option>
        )
      
        let listType = typesChoose.map((x,index)=>
        <option value={x} key={index}>{x}</option>
        )
        let listRoom = roomsChoose.map((x,index)=>
        <option value={x} key={index}>{x}</option>
        )
        let listKitchen = kitchenChoose.map((x,index)=>
        <option value={x} key={index}>{x}</option>
        )
        let listTimeLine = timeLineChoose.map((x,index)=>
        <option value={x} key={index}>{x}</option>
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
                        onChange = {this.onChange}
                        className="form-control" placeholder="title" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group  col-md-6">
                        <label for="inputState">City</label>
                        <select name="city" id="" onChange={this.onChange} className="form-control
                        " required>
                            
                            {listCity}
                        </select>

                    </div>
                    <div className="form-group  col-md-6">
                        <label for="inputState">District</label>
                        <select name="district" id="" onChange={this.onChange} required className="form-control">
                            <option value="">District</option>
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
                        />
                    </div>
                </div>
                <div className="form-group ">
                    <label for="exampleFormControlTextarea1">Description</label>
                    <textarea className="form-control" rows="3"
                    name='description'
                    required
                    onChange = {this.onChange}
                    ></textarea>
                </div>
                <div className="form-row">
                    <div className="form-row col-md-6 mr-1">
                        <label for="inputState">Type</label>
                        <select className="form-control"
                        onChange = {this.onChange}
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
                         />
                    </div>
                    <div className="form-row col-md-6 mr-1">
                        <label>Area (m2)</label>
                        <input type="text" className="form-control"
                        name='area'
                        required
                        onChange = {this.onChange}
                         />
                    </div>
                    <div className="form-row col-md-6 mr-1">
                        <label>Kitchen</label>
                        <select className="form-control"
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
                        onChange = {this.onChange}
                        />
                    </div>
                    <div className="form-row col-md-6 mr-1">
                        <label for="inputState">Internet</label>
                        <input type="text" className="form-control" 
                        name='internet'
                        required
                        onChange = {this.onChange}
                        />

                    </div>
                    <div className="form-row col-md-6 mr-1">
                        <label for="inputState">Price per unit</label>
                        <select className="form-control"
                        name='internet_price_unit'
                        onChange = {this.onChange}
                        >
                           {listTimeLine}
                        </select>
                    </div>
                    <div className="form-row col-md-6 mr-1">
                        <label for="inputState">Price</label>
                        <input type="text" className="form-control" 
                        required
                        onChange = {this.onChange}
                        name ='price'
                        />
                    </div>
                    <div className="form-row col-md-6 mr-1">
                        <label for="inputState">Price per unit</label>
                        <select className="form-control"
                        onChange = {this.onChange}
                        name='price_unit'
                        >
                          {listTimeLine}
                        </select>
                    </div>
                    <div className="form-row col-md-6 mr-1">
                        <label for="inputState">Electric price</label>
                        <input className="form-control"
                        name='electric_price'
                        required
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
                                />
                                <label className="form-check-label" for="gridCheck">
                                    Air Cond
                            </label>
                            </div>
                            <div className="form-check mr-1">
                                <input className="form-check-input" type="checkbox" 
                                onChange = {this.onChange}
                                name = 'bancony'
                                />
                                <label className="form-check-label" for="gridCheck">
                                    Bancony
                            </label>
                            </div>
                            <div className="form-check mr-1">
                                <input className="form-check-input" type="checkbox" 
                                onChange = {this.onChange}
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
                            ></textarea>
                        </div>
                    </div>
                </div>
                <UploadMulImage onDrop = {this.onDrop} required></UploadMulImage>
                <div className="btn-box">
                    <button type="submit" id="submit" className="btn-submit">Submit All</button>
                </div>
            </form>
        )
    }
}
const mapStateToProps = state => {
    return {
      dataLocation: state.dataLocation,
    }
}
export default connect(mapStateToProps,null) (FormProfile);