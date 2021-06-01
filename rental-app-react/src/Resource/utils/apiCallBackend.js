import axios from 'axios';
import * as Config from './../constants/Config';
export default function callApiBackEnd(endpoint, method = 'GET', body){
    let token='';
    if(sessionStorage.getItem('auth_token')){
        token=sessionStorage.getItem('auth_token');
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
