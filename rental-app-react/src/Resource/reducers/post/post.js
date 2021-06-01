import PostList from '../../components/MainPage/GeneralItems/PostList';
import * as types from './../../constants/actionTypes';
let initialState = {}// du lieu dau vao
const post = (state = initialState, action)=>{
    switch(action.type){
        case types.FETCH_ONE_POST:
        state = action.post;
        return action.post;
        default: return state
    }
}
export default post;