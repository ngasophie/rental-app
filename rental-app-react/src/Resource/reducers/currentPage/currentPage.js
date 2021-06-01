import * as types from './../../constants/actionTypes';
let initialState = 1// du lieu dau vao
export const currentPage = (state = initialState, action)=>{
    //  action truyen tu action/index sang => phan tich action
    switch(action.type){
        case types.CURRENT_PAGE:
        state = action.currentPage;
        return state;
        default: return state
    }
}
