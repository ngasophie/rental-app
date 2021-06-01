import PostList from '../../components/MainPage/GeneralItems/PostList';
import * as types from './../../constants/actionTypes';
let initialState = {}// du lieu dau vao
const ownerProfile = (state = initialState, action)=>{
    switch(action.type){
        case types.FETCH_OWNER_PROFILE:
        state = action.ownerProfile;
        return action.ownerProfile;
        default: return state
    }
}
export default ownerProfile;