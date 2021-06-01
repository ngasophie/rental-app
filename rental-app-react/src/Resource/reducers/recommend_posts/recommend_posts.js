import * as types from './../../constants/actionTypes';
let initialState = [] // du lieu dau vao
const recommendPosts = (state = initialState, action)=>{
    switch(action.type){
        case types.FETCH_RECOMMEND_POSTS:
        state = action.recommendPosts;
        return [...action.recommendPosts];
        default: return [...state]
    }
}
export default recommendPosts;