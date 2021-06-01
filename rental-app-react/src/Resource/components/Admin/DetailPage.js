import React, { Component } from 'react';
import Title from './MainPageItems/MiddlePageItems/Title'

import TopPage from './MainPageItems/TopPageItems/TopPage';
import Footer from './MainPageItems/Footer/Footer';
import { connect } from 'react-redux';
import {fetchPostRequest} from './../../actions/index';
import ImageBox from './DetailPageItems/ImageBox';
import ReviewList from './DetailPageItems/ReviewList';
class Details extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        const {post} = this.props;
        console.log(post)
        if(!post.id) return'';
        return (

            <div className="right-page">
                <TopPage></TopPage>
                <div className="middle">
                    <div className="container">
                        <Title></Title>
                        <div id="detail">
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <label for="inputEmail4">Title</label>
                                    <div type="email" className="form-control" placeholder="title" >
                                        {post.title}
                                        </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group  col-md-6">
                                    <label for="inputState">City</label>
                                    <div className="form-control" >
                                        {post.address.city}
                                    </div>

                                </div>
                                <div className="form-group  col-md-6">
                                    <label for="inputState">District</label>
                                    <div className="form-control">
                                        {post.address.district}
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group  col-md-12">
                                    <label for="divZip">Address</label>
                                    <div type="text" className="form-control" >
                                        {post.address.address}
                                        </div>
                                </div>
                            </div>
                            <div className="form-group ">
                                <label for="exampleFormControlTextarea1">Description</label>
                                <div className="form-control" rows="3">
                                    {post.description}
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-row col-md-4 mr-1">
                                    <label for="inputState">Type</label>
                                    <div className="form-control">
                                    {post.type.type}
                                    </div>
                                </div>
                                <div className="form-row col-md-4 mr-1">
                                    <label for="divState">Rooms</label>
                                    <div className="form-control">
                                        {post.facilities.rooms}
                                    </div>
                                </div>
                                <div className="form-row col-md-4 mr-1">
                                    <label for="inputState">Bath rooms</label>
                                    <div className="form-control">
                                        {post.facilities.bath_rooms}
                                    </div>
                                </div>
                                <div className="form-row col-md-4 mr-1">
                                    <label>Area</label>
                                    <div type="text" className="form-control">
                                        {post.facilities.area}
                                        </div>
                                </div>
                                <div className="form-row col-md-4 mr-1">
                                    <label>Price</label>
                                    <div type="text" className="form-control" >
                                        {post.facilities.price}
                                    </div>
                                </div>
                                <div className="form-row col-md-4">
                                    <label>Kitchen</label>
                                    <div type="text" className="form-control">
                                        {post.facilities.kitchen}
                                        </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-row col-md-4 mr-1">
                                    <label for="inputState">Internet</label>
                                    <div className="form-control">
                                        {post.facilities.internet}
                                    </div>
                                </div>
                                <div className="form-row col-md-4 mr-1">
                                    <label for="inputState">Water price</label>
                                    <div className="form-control">
                                        {post.facilities.water_price}
                                    </div>
                                </div>
                                <div className="form-row col-md-4 mr-1">
                                    <label for="inputState">Electric price</label>
                                    <div className="form-control">
                                        {post.facilities.electric_price}
                                    </div>
                                </div>

                            </div>
                            <div className="form-row">


                            </div>
                            <div className="amenities mt-1 mb-1">
                                <div className="title">Amenities</div>
                                <div className="content">
                                    <div className="form-row mt-1">
                                        <div className="form-check mr-1">
                                           {post.facilities.air_cond==0?<i class="far fa-square"></i>:<i class="fas fa-check-square"></i>} 
                                            <label className="form-check-label" for="gridCheck">
                                                Air Cond
                                            </label>
                                        </div>
                                        <div className="form-check mr-1">
                                            {post.facilities.bancony==0?<i class="far fa-square"></i>:<i class="fas fa-check-square"></i>}
                                            <label className="form-check-label" for="gridCheck">
                                                Bancony
                                            </label>
                                        </div>
                                        <div className="form-check mr-1">
                                            {post.facilities.general_owner==0?<i class="far fa-square"></i>:<i class="fas fa-check-square"></i>} 
                                            <label className="form-check-label" for="gridCheck">
                                                General Owner
                            </label>
                                        </div>

                                    </div>
                                    <div className="form-group mt-1">
                                        <label for="exampleFormControlTextarea1">Other</label>
                                        <div className="form-control" rows="3">{post.facilities.other}</div>
                                    </div>
                                    
                                </div>
                                
                            </div>
                            <div className="amenities mt-1 mb-1">
                                <div className="title">Status</div>
                                <div className="content">
                                    <div className="form-row mt-1">
                                        <div className="form-check mr-1">
                                            {post.status==1?<i class="fas fa-check-square"></i>:<i class="far fa-square"></i>} 
                                     
                                            <label className="form-check-label" for="gridCheck">
                                                Active
                                            </label>
                                        </div>
                                        <div className="form-check mr-1">
                                            {post.status==0?<i class="fas fa-check-square"></i>:<i class="far fa-square"></i>} 
                                          
                                            <label className="form-check-label" for="gridCheck">
                                                Disabled
                                            </label>
                                        </div>
                                        <div className="form-check mr-1">
                                           {post.status==2?<i class="fas fa-check-square"></i>:<i class="far fa-square"></i>} 
                                         
                                            <label className="form-check-label" for="gridCheck">
                                                Waiting
                            </label>
                                        </div>
                                        <div className="form-check mr-1">
                                            {post.remain==0?<i class="far fa-square"></i>:<i class="fas fa-check-square"></i>} 
                                        
                                            <label className="form-check-label" for="gridCheck">
                                                Remain
                                          </label>
                                        </div>
                                        <div className="form-check mr-1">
                                         {post.isRecommended==0?<i class="far fa-square"></i>:<i class="fas fa-check-square"></i>} 
                                            <label className="form-check-label" for="gridCheck">
                                                Recommended
                            </label>
                                        </div>
                                        <div className="form-check mr-1">
                                            <div className="form-check-input" type="checkbox"
                                            checked = {post.status == 3 ?<i class="fas fa-check-square"></i>:<i class="far fa-square"></i>} 
                                             />
                                            <label className="form-check-label" for="gridCheck">
                                                
                            </label>
                                        </div>

                                    </div>
                                    <div className="form-row mt-1">
                                <div className="form-row col-md-2 mr-1">
                                {post.react.like_number} <i className="far fa-thumbs-up"></i>
                                   
                                </div>
                                <div className="form-row col-md-2 mr-1">
                                10 <i className="fas fa-heart"></i>
                                  
                                </div>
                                <div className="form-row col-md-2 mr-1">
                                    <label for="inputState">Rating: 4 </label>
                                    <i className="fas fa-star"></i>
                                </div>
                                
                            </div>
                                </div>
                                
                            </div>
                        </div>
                        <ReviewList value ={post.reviews }classN = 'dash-box'></ReviewList>
                        <ImageBox value ={post.images}></ImageBox>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        );
    }
    componentDidMount() {
        let {match} = this.props;
        if(match){
            let id = match.params.id;
            this.props.fetchPost(id);
        }
    }
}
const mapStateToProps = state => {
    console.log(state)
    return{
        post:state.post
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return{
        fetchPost:(id)=>{
            dispatch(fetchPostRequest(id))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Details);