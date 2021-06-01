import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { actFetchLocationRequest} from './../../actions/index';
import {registerAsOwner} from './../../actions/dashboardAction/postAction';
import { validateEmail } from '../../utils/validate';
import {connect} from 'react-redux';
class Register extends Component{
    constructor(props){
        super(props);
        this.state = {
            districts: [],
            avatar: '',
            data: {
              name: "",
              email: "",
              address: "",
              city: "",
              district: "",
              img_src: [],
              description: "",
              identification: "",
              phone_number: "",
              password_confirmation:'',
              password:''
            },
            idenEr: '',
            phoneEr: '',
            emailEr:'',
            passEr:'',
            passCfEr:'',
            img_name:"",
          }
    }
    onType = (event) =>{
        let{data, img_name}= this.state;
        if(event.target.name == 'file'){
            img_name=URL.createObjectURL(event.target.files[0]);
            data.img_src = event.target.files[0];
            this.setState({ data , img_name})
        }
        else{
            let name = event.target.name;
            let value = event.target.value;
            data[`${name}`]=value
            this.setState({
               data
            })
        }
    }
    onSubmit = (event) => {
        event.preventDefault();
        const { data ,img_name} = this.state;
        let isPassed = true;
        // validate
        if (isNaN(Number(data.phone_number))) {
          console.log(data.phone_number)
          let phoneEr = "Phone number must be numeric";
          this.setState({ phoneEr })
          isPassed = false;
        }
        else{
          let phoneEr = "";
          this.setState({ phoneEr })
        }
        if (isNaN(Number(data.identification))) {
          let idenEr = "Identification must be numeric";
          this.setState({ idenEr })
          isPassed = false;
        }
        else if (data.identification.length < 8 || data.identification.length >12) {
          let idenEr = "Identification must be between 8 and 12 digits";
          this.setState({ idenEr })
          isPassed = false;
        }
       else{
        let idenEr = "";
        this.setState({ idenEr })
       }
        if (data.password.length  <6 ) {
          let passEr = "Password must be greater than 6 letters";
          this.setState({ passEr })
          isPassed = false;
        }
       else{
        let passEr = "";
        this.setState({ passEr })
       }
        if (data.password_confirmation!= data.password) {
          let passCfEr = "Password confirmation is not match";
          this.setState({ passCfEr })
          isPassed = false;
        }
       else{
        let passCfEr = "";
        this.setState({ passCfEr })
       }
       if(!validateEmail(data.email)){
           isPassed=false;
        this.setState({
            emailEr:"Invalid email"
        })
        }
        else{
            this.setState({
                emailEr:""
            })
        }
       if(isPassed){
         let formData = new FormData();
         console.log(data.img_src)
         if(data.img_src.length ==0){
          formData.append('files[]',[]);
          }
          else{
              formData.append('files[]', data.img_src, data.img_src.name);
          }
          console.log(data.img_src.name)
            data.phone_number = Number(data.phone_number)
            formData.append('name',data.name);
            formData.append('email', data.email);
            formData.append('address',data.address);
            formData.append('city',data.city);
            formData.append('district',data.district);
            formData.append('description', data.description);
            formData.append('identification', Number(data.identification));
            formData.append('phone_number', data.phone_number);
            formData.append('password_confirmation',data.password_confirmation)
            formData.append('password',data.password)
            for (var value of formData.values()) {
              console.log(typeof(value));
           }
           registerAsOwner(formData);
        }
      }
    onChange = (event) => {
        const target = event.target;
        let { data , img_name,img_file} = this.state;
        console.log(target.type)
        if (target.type == 'file') {
          img_name=URL.createObjectURL(event.target.files[0]);
          data.img_src = event.target.files[0];
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
              let city = event.target.value
              data.district = districts[0]
              this.setState({
                districts,
                data,
                city
              })
              break;
            }
         }
    }
}
    render(){
        console.log(this.state)
        let { dataLocation } = this.props;
        let{districts,idenEr,passEr,passCfEr,phoneEr,emailEr} = this.state;
        dataLocation = dataLocation.location;
        let city = [];
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
        return (
            <div className=" register">
            <div className="row">
                <div className="col-md-3 register-left">
                    <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
                    <h3>Welcome</h3>
                    <p>Join us!</p>
                    <Link to= '/dashboard/login' className = 'btn btn-light' >Login</Link><br/>
                </div>
            <div className="col-md-9 register-right">
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <h3 className="register-heading">Apply as a Owner</h3>
                        <form className="row register-form" onSubmit = {this.onSubmit}>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Your Name *"   
                                    name='name'  required onChange = {this.onType}/>
                                     <small className="password-error error-disable" ></small>

                                </div>
                             
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Password *"   
                                     name='password'  required onChange = {this.onType}/>
                                    <small className="password-error error-disable" >{passEr}</small>
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control"  placeholder="Confirm Password *" 
                                       name='password_confirmation'  required onChange = {this.onType}/>
                                         <small className="password-error error-disable" >{passCfEr}</small>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Your identification *" 
                                       name='identification'  required onChange = {this.onType}/>
                                         <small className="password-error error-disable" >{idenEr}</small>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Your Email *"   
                                     name='email'  required onChange = {this.onType}
                                    />
                                      <small className="password-error error-disable" >{emailEr}</small>
                                </div>
                                <div className="form-group">
                                    <input type="text" minlength="10" maxlength="10" name="txtEmpPhone" 
                                    className="form-control" placeholder="Your Phone *"  
                                    name='phone_number'  required onChange = {this.onType}
                                     />
                                    <small className="password-error error-disable" >{phoneEr}</small>

                                </div>
                                <div className="form-group">
                                    <select className="form-control" onChange = {this.onChange} name='city'>
                                        {listCity}
                                    </select>
                                    <small className="password-error error-disable" ></small>
                                </div>
                                <div className="form-group" onChange = {this.onType} name = 'district'>
                                    <select className="form-control" required>
                                        {listDistrict}
                                    </select>
                                    <small className="password-error error-disable" ></small>

                                </div>
                              
                               
                            </div>
                            <div className="col-md-12">
                            <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Your address *"   
                                     name='address'  required onChange = {this.onType}
                                    />
                                     <small className="password-error error-disable" ></small>
                                </div>
                            <div className="form-group">
                                    <input type="text" className="form-control" placeholder="About me *"   
                                     name='description'  required onChange = {this.onType}/>
                                      <small className="password-error error-disable" ></small>
                                </div>
                            </div>
                            <div className ="title ml-5">
                                <div className = 'avt  d-flex'>
                                    <img src="https://i.pinimg.com/originals/e7/a5/21/e7a521f8cbaf2b270cfbab798837e192.jpg" alt=""/>
                                    <input type="file" className = 'mt-2'   />
                                </div>
                            </div>
                                 <input type="submit" className="btnRegister ml-5"  value="Register"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      

    </div>
        )
    }
    componentDidMount(){
        this.props.fetchLocation();
    }
}
const mapStateToProps = state =>{
    return {
        dataLocation:state.dataLocation,
    }
    }
    const mapDispatchToProps = (dispatch, props)=>{
    return {
        fetchLocation:() =>{
            dispatch(actFetchLocationRequest());
        },
    }
    }
export default connect(mapStateToProps,mapDispatchToProps) (Register);
