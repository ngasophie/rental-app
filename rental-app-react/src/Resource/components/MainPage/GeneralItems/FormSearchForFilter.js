import React, {Component} from 'react';
import {connect} from 'react-redux';
import {filterRequest} from './../../../actions/post_action';
import {Redirect} from 'react-router-dom';
class FormSearchSmall extends Component{
    constructor(props){
        super(props);
        this.state = {
            districts:[],
            types:[
                "Phòng trọ",
                "Chung cư mini",
                "Nhà nguyên căn",
                "Chung cư nguyên căn",
            ],
            prices:[
                "2000000VND - 3000000VND",
                "3000000VND - 5000000VND",
                "> 5000000VND"
            ],
            areas:[
                "< 30m2",
                "30m2 - 50m2",
                "> 50m2"
            ],
            data:{
                city:'City',
                district:'District',
                type:'Property type',
                price:'Any price',
                area:'Area'
            },
            urlRedirect : '/not-found'

        }
    }
    onSubmit = (event)=>{
        event.preventDefault();
        let {data,urlRedirect} = this.state;
        if(data.city == 'City'){
            data.city = '-1';
        }
        if(data.district == 'District'){
            data.district ='-1';
        }
        if(data.type=='Property type'){
            data.type ='-1';
        }
        if(data.price == 'Any price'){
            data.price = -1;
        }
        else{
            data.price = Number(data.price)
        }
        if(data.area=='Area'){
            data.area=-1;
        }
        else{
            data.area=Number(data.area);
        }
        if(data.city != '-1'|| data.district !='-1' || data.type!='-1'
        || data.area!=-1 || data.price!=-1){
            this.props.filterData(data);
            this.setState({data,urlRedirect})
        }
    }
    onChange = (event) =>{
        let {data}= this.state;
        if(event.target.name == 'city'){
            let districts = this.state.districts;
            districts=[];
            const {dataLocation} = this.props;
            for(let i=1; i<=63;i++){
                if(event.target.value == dataLocation[0][i].name){
                    console.log(Object.values(dataLocation[0][i].districts).length)
                    for(let j = 0; j<Object.values(dataLocation[0][i].districts).length;j++ ){
                        districts.push(Object.values(dataLocation[0][i].districts)[j]);
                    }
                    data.city = event.target.value;
                    this.setState({
                        districts,
                        data
                    })
                    break;
                }
            }  
        }
        else if(event.target.name == 'districts'){
            data.district = event.target.value;
            this.setState({data})
        }
        else if(event.target.name =='type'){
            data.type = event.target.value;
            this.setState({data})
        }
        else if(event.target.name =='price'){
            data.price = event.target.value;
            this.setState({data})
        }
        else if(event.target.name =='area'){
            data.area = event.target.value;
            this.setState({data})
        }
    }
    render(){
        const {districts, types, prices, areas,urlRedirect} = this.state;
        const {dataLocation} = this.props;
        let city = [];
        let districtsList = {
            city:'',
            districts:[]
        }
        if(dataLocation){
            for(let i=1; i<=63;i++){
                city.push(dataLocation[0][i].name)
            }    
        }
        let listCity = '';
        if(city.length >0){
            listCity = city.map((index)=>
            <option value={index} key = {index}>{index}</option>
            )
        }
        let listDistrict = districts.map((index)=>
        <option value={index} key = {index}>{index}</option>
        )
        let listPrice = prices.map((x, index)=>
        <option value={index} key={index}>{x}</option>
        )
        let listType = types.map((x,index)=>
        <option value={x} key={index}>{x}</option>
        )
        let listArea = areas.map((x,index)=>
        <option value={index} key={index}>{x}</option>
        )
        return(
            <form className="search-box" onSubmit = {this.onSubmit}>
                   <select name="city" id="" onChange={this.onChange}>
                       <option value="">City</option>
                       {listCity}
                   </select>
                   <select name="districts" id="" onChange={this.onChange}>
                       <option value="">District</option>
                       {listDistrict}
                   </select>
                   <select name="type" id="" onChange={this.onChange}>
                       <option value="">Property type</option>
                       {listType}
                   </select>
                  
                   <select name="price" id="" onChange = {this.onChange}>
                       <option value="">Any price</option>
                        {listPrice}
                   </select>
                   <select name="area" id="" onChange = {this.onChange}>
                       <option value="">Area</option>
                       {listArea}
                   </select>
                   <button type='submit'>Search</button>
               </form>
        )
    }
}
const mapDispatchToProp = (dispatch,props)=>{
    return {
        filterData:(data)=>{
            dispatch(filterRequest(data))
        }
    }
}
export default connect(null, mapDispatchToProp) (FormSearchSmall);