import * as types from '../../constants/actionTypes';
let initialState = {}// du lieu dau vao
const dataLocation= (state = initialState, action)=>{
    //  action truyen tu action/index sang => phan tich action
    switch(action.type){
        case types.FETCH_LOCATION:
        state = action.location;
        return state;
        default: return state
    }
}
export default dataLocation;