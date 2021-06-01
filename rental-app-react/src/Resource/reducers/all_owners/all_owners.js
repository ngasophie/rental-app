import * as types from '../../constants/actionTypes';
let initialState = []// du lieu dau vao
export const allOwners = (state = initialState, action)=>{
    //  action truyen tu action/index sang => phan tich action
    switch(action.type){
        case types.FETCH_ALL_OWNER:
        state = action.allOwners;
        return [...state];
        default: return state
    }
}
export const lastPageAllOwner = (state = initialState, action)=>{
    switch(action.type){
        case types.FETCH_ALL_OWNER:
        state = action.lastPageAllOwner;
        return state;
        default: return state
    }
}
