import * as types from '../../constants/actionTypes';
let initialState = null;// du lieu dau vao
const allReviews= (state = initialState, action)=>{
    //  action truyen tu action/index sang => phan tich action
    switch(action.type){
        case types.FETCH_ALL_REVIEW:
         state = action.allReviewManager;
         return state;
        default: return state
    }
}
export default allReviews;