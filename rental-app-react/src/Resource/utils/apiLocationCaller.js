import axios from 'axios';
import * as Config from './../constants/Config';
export default function callApiLocation( method = 'GET', body){
    return axios({
        method: method,
        url: `${Config.API_LOCATION}/LocationDatabase/location.json`,
        data: body
    }).catch(err =>{
        console.log(err)
    })
}
