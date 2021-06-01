import callApiBackend from './../../utils/apiDashboardCall';// api dashboard
import * as types from './../../constants/actionTypes';
//  get user -profile
export const userProfileRequest = () =>{
    return (dispatch) =>{
        return callApiBackend(`api/user-profile`,'GET',null).then(res=>{
            console.log(res)
            let convertData = {};
            convertData = res.data[0];
            console.log(convertData)
            convertData.address = convertData.address.address;
            convertData.city = res.data[1].city;
            convertData.district = res.data[1].district;
            dispatch(actDispatchIdUser(convertData))
        })
    }
}
//  dispatch  id of user => owner_id to reducer
export const actDispatchIdUser = (owner) =>{
    return {
        type:types.FETCH_USER,
        owner,
    }
}
//  getrecent post from api
export const recentPostPerOwnerRequest = () =>{
    return(dispatch) =>{
        return callApiBackend(`api/owner/recent-posts`, 'GET', null).then(res=>{
            dispatch(recentPostPerOwner(res.data.data));
        })
    }
}
//  dua sang reducer de luu vao store
export const recentPostPerOwner = (recentPostPerOwner) =>{
    return {
        type:types.FETCH_RECENT_POST_PER_OWNER,
        recentPostPerOwner,
    }
}
//  get summary per owner
export const summaryPerOwnerRequest = () =>{
    return(dispatch) =>{
        return callApiBackend(`api/owner/summary`, 'GET', null).then(res=>{
            dispatch(summaryPerOwner(res.data));
        })
    }
}
//  dua sang reducer de luu vao store
export const summaryPerOwner = (summaryPerOwner) =>{
    return {
        type:types.FETCH_SUMMARY_PER_OWNER,
        summaryPerOwner,
    }
}
//  get allpost per owner
export const allPostPerOwnerRequest = (page) =>{
    return(dispatch) =>{
        return callApiBackend(`api/owner/all-posts?page=${page}`, 'GET', null).then(res=>{
            dispatch(allPostPerOwner(res.data.data, res.data.last_page));
        })
    }
}
//  dua sang reducer de luu vao store
export const allPostPerOwner = (allPostPerOwner, lastPageAllPostDashboard) =>{
    return {
        type:types.FETCH_ALL_POST_PER_OWNER,
        allPostPerOwner,
        lastPageAllPostDashboard
    }
}
//  get active post per owner
export const activePostPerOwnerRequest = (page) =>{
    return(dispatch) =>{
        return callApiBackend(`api/owner/active-posts?page=${page}`, 'GET', null).then(res=>{
            dispatch(activePostPerOwner(res.data.data, res.data.last_page));
        })
    }
}
//  dua sang reducer de luu vao store
export const activePostPerOwner = (activePostPerOwner,lastPageActivePost) =>{
    return {
        type:types.FETCH_ACTIVE_POST_PER_OWNER,
        activePostPerOwner,
        lastPageActivePost
    }
}
//  get disable post per owner
export const disablePostPerOwnerRequest = (page) =>{
    return(dispatch) =>{
        return callApiBackend(`api/owner/disable-posts?page=${page}`, 'GET', null).then(res=>{
            dispatch(disablePostPerOwner(res.data.data,res.data.last_page));
        })
    }
}
//  dua sang reducer de luu vao store
export const disablePostPerOwner = (disablePostPerOwner,lastPageDisablePost) =>{
    return {
        type:types.FETCH_DISABLE_POST_PER_OWNER,
        disablePostPerOwner,
        lastPageDisablePost
    }
}
export const seenNotice= ()=>{
    return callApiBackend(`api/view-notice`, 'POST', null).then(res=>{
        console.log(res)
        if(res){
            userProfileRequest();
        }
    })
}