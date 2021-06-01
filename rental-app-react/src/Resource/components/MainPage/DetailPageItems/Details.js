import React, {Component} from 'react';
import {convertDate} from './../../../utils/convertDate';
class Details extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {value} = this.props;
        // amenties chinh sau
        return(
          <div className="details-box">
          <div className="properties">
              <div className="title">Properties</div>
              <div className="content">
                  <span className="mb-1"><b>Type:</b> {value.type.type}</span>
                  <span className="mb-1"><b>Price:</b> {value.facilities.price} VND</span>
                  <span className="mb-1"><b>Rooms:</b> {value.facilities.rooms}</span>
                  <span className="mb-1"><b>Bath:</b> {value.facilities.bath_rooms}</span>
                  <span className="mb-1"><b>Kitchen:</b> {value.facilities.kitchen}</span>
                  <span className="mb-1"><b>Kitchen:</b> {value.facilities.internet}</span>
                  <span className="mb-1"><b>Water:</b> {value.facilities.water_price}</span>
                  <span className="mb-1"><b>Electric:</b> {value.facilities.electric_price}</span>
                  <div className="amenitie">
                      {value.facilities.bancony == true? <i className="fas fa-check-square"></i>:<i className="far fa-square"></i>}
                          <label htmlFor="am2"> Balcony</label><br/>
                    </div>
                  <div className="amenitie">
                      {value.facilities.general_owner == true? <i className="fas fa-check-square"></i>:<i className="far fa-square"></i>}
                          <label htmlFor="am2"> General owner</label><br/>
                    </div>
                  <span className="mb-1"><b>Created at:</b> {convertDate(value.created_at)}</span>
              </div>
          </div>
          {/* <div className="amenities">
              <div className="title">Amenities</div>
                  <div className="content">
                      <div className="amenitie">
                          {value.airCond == true? <i className="fas fa-check-square"></i>:<i class="far fa-square"></i>}
                       
                          <label htmlFor="am1"> Air Cond</label><br/>
                      </div>
                      <div className="amenitie">
                      {value.balcony == true? <i className="fas fa-check-square"></i>:<i class="far fa-square"></i>}
                          <label htmlFor="am2"> Balcony</label><br/>
                      </div>
                      <div className="amenitie">
                      {value.internet == true? <i className="fas fa-check-square"></i>:<i class="far fa-square"></i>}
                          <label htmlFor="am3"> Internet</label><br/>
                      </div>
                      <div className="amenitie">
                      {value.tv == true? <i className="fas fa-check-square"></i>:<i class="far fa-square"></i>}
                          <label htmlFor="am4"> TV</label><br/>
                      </div>
                  </div>
          </div> */}
      </div>
         )
    }
}
export default Details;