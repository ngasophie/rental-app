import * as types from './../../constants/actionTypes';
let initialState = [] // du lieu dau vao
export const allPosts = (state = initialState, action)=>{
    switch(action.type){
        case types.FETCH_ALL_POSTS:
        state = action.allPosts;
        return [...state];
        default: return [...state]
    }
}
export const lastPageAllPost = (state = initialState, action)=>{
    switch(action.type){
        case types.FETCH_ALL_POSTS:
        state = action.lastPageAllPost;
        return state;
        default: return state
    }
}
