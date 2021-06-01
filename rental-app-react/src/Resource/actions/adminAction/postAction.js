import callApiBackend from './../../utils/apiDashboardCall';// api dashboard
import * as types from './../../constants/actionTypes';
export const actRecommendPost =  (id) =>{
    return(dispatch) =>{
        return callApiBackend(`api/admin-recommend-post/${id}`,'POST',
            id
        ).then(res=>{
            console.log(res)
            dispatch(actRecommend(id))
        })
    }
}
export const actRecommend = (id) =>{
    return {
        type:types.ACT_RECOMMEND_POST,
        id
    }
}
export const actNoRecommendPost =  (id) =>{
    return(dispatch) =>{
        return callApiBackend(`api/admin-no-recommend-post/${id}`,'POST',
            id
        ).then(res=>{
            console.log(res)
            dispatch(actNoRecommend(id))
        })
    }
}
export const actNoRecommend = (id) =>{
    return {
        type:types.ACT_NO_RECOMMEND_POST,
        id
    }
}
export const actActivePost =  (id) =>{
    return(dispatch) =>{
        return callApiBackend(`api/admin-active-post/${id}`,'POST',
            id
        ).then(res=>{
            console.log(res)
            dispatch(actActive(id))
        })
    }
}
export const actActive = (id) =>{
    return {
        type:types.ACT_ACTIVE_POST,
        id
    }
}
export const actDisabledPost =  (id) =>{
    return(dispatch) =>{
        return callApiBackend(`api/admin-disabled-post/${id}`,'POST',
            id
        ).then(res=>{
            console.log(res)
            dispatch(actDisabled(id))
        })
    }
}
export const actDisabled = (id) =>{
    return {
        type:types.ACT_DISABLED_POST,
        id
    }
}
