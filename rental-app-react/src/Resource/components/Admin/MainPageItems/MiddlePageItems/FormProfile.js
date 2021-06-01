import React, { Component } from 'react';
import { connect } from 'react-redux';
class FormProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabledEmail: true,
      disabledPassword: true,
      disabledIden: true,
      disabledPhone: true,
      disabledCity: true,
      disabledDistric: true,
      disabledAddress: true,
      disabledDes: true,
      districts: [],
      disabledName: true,
      avatar: '',
      data: {
        name: "",
        email: "",
        address: "",
        city: "",
        district: "",
        img_src: "",
        description: "",
        identification: "",
        phone_number: "",
      },
      idenEr: '',
      phoneEr: '',
      img_name:""
    }
  }
  handleEdit = (name, e) => {
    switch (name) {
      case 'disabledName':
        this.setState({
          disabledName: false
        });
        break;
      case 'disabledEmail':
        this.setState({
          disabledEmail: false
        });
        break;
      case 'disabledPhone':
        this.setState({
          disabledPhone: false
        });
        break;
      case 'disabledAddress':
        this.setState({
          disabledAddress: false
        });
        break;
      case 'disabledCity':
        this.setState({
          disabledCity: false
        });
        break;
      case 'disabledIden':
        this.setState({
          disabledIden: false
        });
        break;
      case 'disabledDes':
        this.setState({
          disabledDes: false
        });
        break;
    }
  }
  handleSave = (name, e) => {
    switch (name) {
      case 'disabledName':
        this.setState({
          disabledName: true
        });
        break;
      case 'disabledEmail':
        this.setState({
          disabledEmail: true
        });
        break;
      case 'disabledPhone':
        this.setState({
          disabledPhone: true
        });
        break;
      case 'disabledAddress':
        this.setState({
          disabledAddress: true
        });
        break;
      case 'disabledCity':
        this.setState({
          disabledCity: true
        });
        break;
      case 'disabledIden':
        this.setState({
          disabledIden: true
        });
        break;
      case 'disabledDes':
        this.setState({
          disabledDes: true
        });
        break;
    }
  }
  onChange = (event) => {
    const target = event.target;
    let { data , img_name} = this.state;
    console.log(target.type)
    if (target.type == 'file') {
      data.img_src = event.target.files[0].name;
      img_name=URL.createObjectURL(event.target.files[0])
      this.setState({ data , img_name})
    }
    else if (event.target.name == 'city') {
      let districts = this.state.districts;
      districts = [];
      let { dataLocation } = this.props;
      dataLocation = dataLocation.location
      for (let i = 1; i <= 63; i++) {
        if (event.target.value == dataLocation[0][i].name) {
          console.log(Object.values(dataLocation[0][i].districts).length)
          for (let j = 0; j < Object.values(dataLocation[0][i].districts).length; j++) {
            districts.push(Object.values(dataLocation[0][i].districts)[j]);
          }
          let { data } = this.state;
          data.city = event.target.value;
          this.setState({
            districts,
            data
          })
          break;
        }
      }
    }
    else {
      const value = target.value;
      const name = target.name;
      data[name] = value;
      this.setState({
        data
      });
    }
  }
  onSubmit = (event) => {
    event.preventDefault();
    const { data ,img_name} = this.state;
    let isPassed = true;
    // validate
    if (isNaN(Number(data.phone_number))) {
      console.log(data.phone_number)
      let phoneEr = "error";
      this.setState({ phoneEr })
      isPassed = false;
    }
    else{
      let phoneEr = "";
      this.setState({ phoneEr })
    }
    if (isNaN(Number(data.identification))) {
      console.log(data.identification)
      let idenEr = "error";
      this.setState({ idenEr })
      isPassed = false;
    }
   else{
    let idenEr = "";
    this.setState({ idenEr })
   }
   if(isPassed){
     
   }
  }
  render() {
    const { data } = this.state;
    console.log(data)
    //  xu li sau
    let { owner, dataLocation } = this.props;
    dataLocation = dataLocation.location
    const { disabledEmail, disabledPassword, disabledAddress, disabledCity, disabledDes
      , disabledDistric, disabledIden, disabledPhone, districts, disabledName
    } = this.state;
    let { img_src } = this.props;
    img_src = img_src.concat('avt');
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
    console.log(this.state)
    return (
      <form id="form-profile" className="mt-1" onSubmit={this.onSubmit}>
        <div className="form-row">
          <div className="form-group col-md-11">
            <label htmlFor="inputEmail4">Name</label>
            <input type="text" className="form-control" placeholder="Name"
              defaultValue={owner.name}
              disabled={disabledName}
              onChange={this.onChange}
              name="name"
              required
            />
          </div>
          <div className="form-group col-md-1 btn-edit-profile">
            <br />
            {disabledName ? <i className="fas fa-pencil-alt mt-1 hover-mouse"
              onClick={(e) => this.handleEdit('disabledName', e)}
            ></i> : <i className="far fa-save mt-1 hover-mouse"
              onClick={(e) => this.handleSave('disabledName', e)}
            ></i>}
          </div>
        </div>
        <div className="form-row">

          <div className="form-group col-md-5">
            <label htmlFor="inputAddress">Indentification</label>
            <input type="text" className={`form-control ${this.state.idenEr}`} id="inputAddress" placeholder="01234"
              disabled={disabledIden}
              defaultValue={owner.identification}
              name="identification"
              required
              onChange={this.onChange} />
          </div>
          <div className="form-group col-md-1 btn-edit-profile">
            <br />
            {disabledIden ? <i className="fas fa-pencil-alt mt-1 hover-mouse"
              onClick={(e) => this.handleEdit('disabledIden', e)}

            ></i> :
              <i className="far fa-save mt-1 hover-mouse"
                onClick={(e) => this.handleSave('disabledIden', e)}

              ></i>}
          </div>
          <div className="form-group col-md-5">
            <label htmlFor="inputAddress2">Phone Number</label>
            <input type="text" className={`form-control ${this.state.phoneEr}`}
              id="inputAddress2" placeholder="01234"
              defaultValue={owner.phone_number}
              disabled={disabledPhone}
              onChange={this.onChange}
              name="phone_number"
              required
            />
          </div>
          <div className="form-group col-md-1 btn-edit-profile">
            <br />
            {disabledPhone ? <i className="fas fa-pencil-alt mt-1 hover-mouse"
              onClick={(e) => this.handleEdit('disabledPhone', e)}

            ></i> :
              <i className="far fa-save mt-1 hover-mouse"
                onClick={(e) => this.handleSave('disabledPhone', e)}

              ></i>}
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-5">
            <label htmlFor="inputCity">City</label>
            <select id="" onChange={this.onChange} className="form-control"
              disabled={disabledCity}
              name="city"
            >
              <option defaultValue="">{owner.city}</option>
              {listCity}
            </select>
          </div>
          <div className="form-group col-md-1 btn-edit-profile">
          </div>
          <div className="form-group col-md-5">
            <label htmlFor="inputState">Distric</label>
            <select id="inputState" className="form-control"
              defaultValue={owner.district}
              disabled={disabledCity}
              onChange={this.onChange}
              name="district"
            >
              <option selected>{owner.district}</option>
              {listDistrict}
            </select>
          </div>
          <div className="form-group col-md-1 btn-edit-profile">
            <br />
            {disabledCity ? <i className="fas fa-pencil-alt mt-1 hover-mouse"
              onClick={(e) => this.handleEdit('disabledCity', e)}

            ></i> :
              <i className="far fa-save mt-1 hover-mouse"
                onClick={(e) => this.handleSave('disabledCity', e)}

              ></i>}
          </div>
          <div className="form-group col-md-11">
            <label htmlFor="inputState">Address</label>
            <input id="inputState" className="form-control"
              defaultValue={owner.address}
              disabled={disabledAddress}
              onChange={this.onChange}
              name="address"
              required
            />
          </div>
          <div className="form-group col-md-1 btn-edit-profile">
            <br />
            {disabledAddress ? <i className="fas fa-pencil-alt mt-1 hover-mouse"
              onClick={(e) => this.handleEdit('disabledAddress', e)}

            ></i> :
              <i className="far fa-save mt-1 hover-mouse"
                onClick={(e) => this.handleSave('disabledAddress', e)}

              ></i>}
          </div>
        </div>
        <div className="form-row">
          <div class="form-group col-md-11">

            <label htmlFor="exampleFormControlTextarea1">About me</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Message"
              defaultValue={owner.description}
              disabled={disabledDes}
              onChange={this.onChange}
              name="description"

            ></textarea>
          </div>
          <div className="form-group col-md-1 btn-edit-profile">
            <br />
            {disabledDes ? <i className="fas fa-pencil-alt mt-1 hover-mouse"
              onClick={(e) => this.handleEdit('disabledDes', e)}

            ></i> :
              <i className="far fa-save mt-1 hover-mouse"
                onClick={(e) => this.handleSave('disabledDes', e)}

              ></i>}
          </div>
        </div>
        <div className="title">
          <div className="avt">
            <img src={this.state.img_name == owner.img_src ? `${img_src}/${owner.img_src}` : this.state.img_name} alt="" /></div>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlFile1">Change avatar</label>
          <input type="file" className="form-control-file" id="exampleFormControlFile1"
            name="img_src"
            onChange={this.onChange}
          />
        </div>
        <button type="submit" className="btn-save-change">Save All Change</button>
      </form>
    )
  }
  componentDidMount() {
    const { owner } = this.props;
    this.setState({
      data: {
        name: owner.name,
        email: owner.email,
        address: owner.address,
        city: owner.city,
        district: owner.district,
        img_src: owner.img_src,
        description: owner.description,
        identification: owner.identification,
        phone_number: owner.phone_number,
      },
      img_name:owner.img_src
    })
  }
}
const mapStateToProps = state => {
  return {
    recentPost: state.recentPostPerOwner,
    dataLocation: state.dataLocation,
    img_src: state.img_src,
    owner: state.owner,
    summary: state.summaryPerOwner
  }
}
export default connect(mapStateToProps, null)(FormProfile);