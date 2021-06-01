import * as types from '../../constants/actionTypes';
let initialState = null;// du lieu dau vao
const summaryManager= (state = initialState, action)=>{
    //  action truyen tu action/index sang => phan tich action
    switch(action.type){
        case types.FETCH_SUMMARY_MANAGER:
         state = action.summaryManager;
         return state;
        default: return state
    }
}
export default summaryManager;