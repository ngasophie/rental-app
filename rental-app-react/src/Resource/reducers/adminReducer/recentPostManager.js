import * as types from '../../constants/actionTypes';
let initialState = null;// du lieu dau vao
const recentPostManager= (state = initialState, action)=>{
    //  action truyen tu action/index sang => phan tich action
    switch(action.type){
        case types.FETCH_RECENT_POST_MANAGER:
         state = action.recentPostManager;
         return state;
         case types.ACT_RECOMMEND_POST:
            var id = action.id;
            var index =state.findIndex((post)=>{
                return post.id === id;
            });
            if(index!=-1){
                state[index].isRecommended = 1;
                console.log(state)
                return [...state]
            }
            return state;

         case types.ACT_NO_RECOMMEND_POST:
            var id = action.id;
            var index =state.findIndex((post)=>{
                return post.id === id;
            });
            if(index!=-1){
                state[index].isRecommended = 0;
                console.log(state)
                return [...state]
            }
                return state;
         case types.ACT_ACTIVE_POST:
            var id = action.id;
            var index =state.findIndex((post)=>{
                return post.id === id;
            });
            if(index!=-1){
                state[index].status = 1;
                console.log(state)
                return [...state]
            }
                return state;
         case types.ACT_DISABLED_POST:
            var id = action.id;
            console.log(state)
            var index =state.findIndex((post)=>{
                console.log(post)
                return post.id === id;
            });
            if(index!=-1){
                state[index].status = 0;
                console.log(state)
                return [...state]
            }
                return state;
        default: return state;
    }
}
export default recentPostManager;