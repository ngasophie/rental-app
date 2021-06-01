import * as types from '../../constants/actionTypes';
let initialState = null;// du lieu dau vao
const summaryPerOwner= (state = initialState, action)=>{
    //  action truyen tu action/index sang => phan tich action
    switch(action.type){
        case types.FETCH_SUMMARY_PER_OWNER:
         state = action.summaryPerOwner;
         return state;
        default: return state
    }
}
export default summaryPerOwner;