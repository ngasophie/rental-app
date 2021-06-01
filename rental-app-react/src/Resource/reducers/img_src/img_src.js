import * as types from '../../constants/actionTypes';
import * as Config from '../../constants/Config';
let initialState = `${Config.API_BACKEND}/uploads/`;// du lieu dau vao
const img_src = (state = initialState, action)=>{
    //  action truyen tu action/index sang => phan tich action
    switch(action.type){
        case types.IMG_SRC:
        return state;
        default: return state
    }
}
export default img_src;