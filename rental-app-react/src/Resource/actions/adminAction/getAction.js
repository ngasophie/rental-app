import callApiBackend from './../../utils/apiDashboardCall';// api dashboard
import * as types from './../../constants/actionTypes';
//  get recent post from api
export const recentPostManagerRequest = () =>{
    return(dispatch) =>{
        return callApiBackend(`api/admin/recent-posts`, 'GET', null).then(res=>{
            dispatch(recentPostManager(res.data.data));
        })
    }
}
//  dua sang reducer de luu vao store
export const recentPostManager = (recentPostManager) =>{
    return {
        type:types.FETCH_RECENT_POST_MANAGER,
        recentPostManager,
    }
}
//  get summary per owner
export const summaryManagerRequest = () =>{
    return(dispatch) =>{
        return callApiBackend(`api/admin/summary`, 'GET', null).then(res=>{
            dispatch(summaryManager(res.data));
        })
    }
}
//  dua sang reducer de luu vao store
export const summaryManager = (summaryManager) =>{
    return {
        type:types.FETCH_SUMMARY_MANAGER,
        summaryManager,
    }
}
//  get allpost per owner
export const allPostManagerRequest = (page) =>{
    return(dispatch) =>{
        return callApiBackend(`api/admin/all-posts?page=${page}`, 'GET', null).then(res=>{
            dispatch(allPostManager(res.data.data, res.data.last_page));
        })
    }
}
//  dua sang reducer de luu vao store
export const allPostManager = (allPostManager, lastAllPostManager) =>{
    return {
        type:types.FETCH_ALL_POST_MANAGER,
        allPostManager,
        lastAllPostManager
    }
}
//  get active post per owner
export const activePostManagerRequest= (page) =>{
    return(dispatch) =>{
        return callApiBackend(`api/admin/active-posts?page=${page}`, 'GET', null).then(res=>{
            console.log(res)
            dispatch(activePostManager(res.data.data, res.data.last_page));
        })
    }
}
//  dua sang reducer de luu vao store
export const activePostManager = (activePostManager,lastActivePostManager) =>{
    return {
        type:types.FETCH_ACTIVE_POST_MANAGER,
        activePostManager,
        lastActivePostManager
    }
}
//  get disable post per owner
export const disablePostManagerRequest = (page) =>{
    return(dispatch) =>{
        return callApiBackend(`api/admin/disabled-posts?page=${page}`, 'GET', null).then(res=>{
            console.log(res)
            dispatch(disablePostManager(res.data.data,res.data.last_page));
        })
    }
}
//  dua sang reducer de luu vao store
export const disablePostManager = (disablePostManager,lastDisablePostManager) =>{
    return {
        type:types.FETCH_DISABLE_POST_MANAGER,
        disablePostManager,
        lastDisablePostManager
    }
}
// get waiting post
export const waitingPostManagerRequest = (page) =>{
    return(dispatch) =>{
        return callApiBackend(`api/admin/waiting-posts?page=${page}`, 'GET', null).then(res=>{
            console.log(res)
            dispatch(waitingPostManager(res.data.data,res.data.last_page));
        })
    }
}
//  dua sang reducer de luu vao store
export const waitingPostManager = (waitingPostManager,lastWaitingPostManager) =>{
    return {
        type:types.FETCH_WAITING_POST_MANAGER,
        waitingPostManager,
        lastWaitingPostManager
    }
}
// get all-review
export const allReviewRequest = (page) =>{
    return(dispatch) =>{
        return callApiBackend(`api/admin/all-reviews?page=${page}`, 'GET', null).then(res=>{
            console.log(res)
            dispatch(allReviewManager(res.data.data,res.data.last_page));
        })
    }
}
//  dua sang reducer de luu vao store
export const allReviewManager = (allReviewManager,lastReviewManager) =>{
    return {
        type:types.FETCH_ALL_REVIEW,
        allReviewManager,
        lastReviewManager
    }
}
// get all-
export const allOwnerManagerRequest = (page) =>{
    return(dispatch) =>{
        return callApiBackend(`api/admin/all-owners?page=${page}`, 'GET', null).then(res=>{
            console.log(res)
            dispatch(allOwnerManager(res.data.data,res.data.last_page));
        })
    }
}
//  dua sang reducer de luu vao store
export const allOwnerManager = (allOwnerManager,lastOwnerManager) =>{
    return {
        type:types.FETCH_ALL_OWNER_MANAGER,
        allOwnerManager,
        lastOwnerManager
    }
}