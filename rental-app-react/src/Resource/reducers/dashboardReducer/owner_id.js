import * as types from '../../constants/actionTypes';
let initialState = null;// du lieu dau vao
const owner= (state = initialState, action)=>{
    //  action truyen tu action/index sang => phan tich action
    switch(action.type){
        case types.FETCH_USER:
         state = action.owner;
         return state;
        default: return state
    }
}
export default owner;