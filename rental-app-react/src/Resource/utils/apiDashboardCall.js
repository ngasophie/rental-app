//  use call api with auth token of owner and admin
import axios from 'axios';
import * as Config from './../constants/Config';
export default function callApiBackEnd(endpoint, method = 'GET', body){
    let token='';
    if(sessionStorage.getItem('owner/admin-login')){
        token=sessionStorage.getItem('owner/admin-login');
    }
    return axios({
        method: method,
        url: `${Config.API_BACKEND}/${endpoint}`,
        data: body,
        headers: {"Authorization" : `Bearer ${token}`}
    }).catch(err =>{
        console.log(err)
    })
}
