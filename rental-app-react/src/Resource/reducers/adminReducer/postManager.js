import * as types from '../../constants/actionTypes';
let initialState = [];// du lieu dau vao
export const allPostManager= (state = initialState, action)=>{
    //  action truyen tu action/index sang => phan tich action
    switch(action.type){
        case types.FETCH_ALL_POST_MANAGER:
            state = action.allPostManager;
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
             var id = action.id
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
        default: return state
    }
}

// get last page
export const lastAllPostManager= (state = initialState, action)=>{
    //  action truyen tu action/index sang => phan tich action
    switch(action.type){
        case types.FETCH_ALL_POST_MANAGER:
         state = action.lastAllPostManager;
         return state;
        default: return state
    }
}
export const activePostManager =(state = initialState, action)=>{
    //  action truyen tu action/index sang => phan tich action
    switch(action.type){
        case types.FETCH_ACTIVE_POST_MANAGER:
         state = action.activePostManager;
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
            var id = action.id
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
            var index =state.findIndex((post)=>{
                console.log(post)
                return post.id === id;
            });
            console.log(index)
            if(index!=-1){
                state[index].status = 0;
                console.log(state)
                return [...state]
            }
                return state;
        default: return state
    }
}
export const lastActivePostManager= (state = initialState, action)=>{
    //  action truyen tu action/index sang => phan tich action
    switch(action.type){
        case types.FETCH_ACTIVE_POST_MANAGER:
         state = action.lastActivePostManager;
         return state;
        default: return state
    }
}
export const disablePostManager= (state = initialState, action)=>{
    //  action truyen tu action/index sang => phan tich action
    switch(action.type){
        case types.FETCH_DISABLE_POST_MANAGER:
         state = action.disablePostManager;
         return state;
        default: return state
    }
}
export const lastDisablePostManager= (state = initialState, action)=>{
    //  action truyen tu action/index sang => phan tich action
    switch(action.type){
        case types.FETCH_DISABLE_POST_MANAGER:
         state = action.lastDisablePostManager;
         return state;
        default: return state
    }
}
export const waitingPostManager= (state = initialState, action)=>{
    //  action truyen tu action/index sang => phan tich action
    switch(action.type){
        case types.FETCH_WAITING_POST_MANAGER:
         state = action.waitingPostManager;
         return state;
        default: return state
    }
}
export const lastWaitingPostManager= (state = initialState, action)=>{
    //  action truyen tu action/index sang => phan tich action
    switch(action.type){
        case types.FETCH_WAITING_POST_MANAGER:
         state = action.lastWaitingPostManager;
         return state;
        default: return state
    }
}

