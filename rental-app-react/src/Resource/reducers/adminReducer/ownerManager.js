import * as types from '../../constants/actionTypes';
let initialState = null;// du lieu dau vao
const allOwnerManager= (state = initialState, action)=>{
    //  action truyen tu action/index sang => phan tich action
    switch(action.type){
        case types.FETCH_ALL_OWNER_MANAGER:
         state = action.allOwnerManager;
         return state;
        default: return state
    }
}
export default allOwnerManager;