import * as types from '../../constants/actionTypes';
let initialState = null;// du lieu dau vao
export const messages= (state = initialState, action)=>{
    //  action truyen tu action/index sang => phan tich action
    switch(action.type){
        case types.GET_MESSAGES:
         state = [...action.getMessageReducer];
         return state;
        default: return state
    }
}
export const conversations = (state=initialState,action)=>{
    switch(action.type){
        case types.GET_CONVERSATIONS:
        state=[action.getConversationReducer];
        return state;
        default:return state
    }
}