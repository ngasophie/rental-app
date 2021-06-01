import * as types from './../../constants/actionTypes';
let initialState = [] // du lieu dau vao
export const filterPosts = (state = initialState, action)=>{
    switch(action.type){
        case types.FILTER_POST:
        state = action.filterData;
        return state;
        default: return [...state]
    }
}
export const filterPage = (state =null, action)=>{
    switch(action.type){
        case types.FILTER_POST:
        state = action.filterPage;
        return state;
        default: return state;
    }
}