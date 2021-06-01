import * as types from './../constants/actionTypes';
import callApi from './../utils/apiCaller';
import callApiBackend from './../utils/apiCallBackend';
import callApiLocation from './../utils/apiLocationCaller';
import * as Config from './../constants/Config';
import callApiBackEnd from './../utils/apiCallBackend';
import callApiDashboard from './../utils/apiDashboardCall';
// import {userProfileRequest} from './dashboardAction/getAction';
//  get data from api
export const actFetchRecommendPostRequest = () =>{
    return(dispatch) =>{
        return callApiBackend('api/all-recommend-posts', 'GET', null).then(res=>{
            dispatch(actFetchRecommendPost(res.data));
        })
    }
}
//  dua sang reducer de luu vao store
export const actFetchRecommendPost = (recommendPosts) =>{
    return {
        type:types.FETCH_RECOMMEND_POSTS,
        recommendPosts,
    }
}
export const actFetchAllPostsRequest = (page) =>{
    return(dispatch) =>{
        //  cos th sua endpoint = all-posts
        return callApiBackend(`api/all-posts?page=${page}`, 'GET', null).then(res=>{
            dispatch(actFetchAllPosts(res.data.data, res.data.last_page));
        })
    }
}
export const actFetchAllPosts = (allPosts, lastPageAllPost) =>{
    return {
        type:types.FETCH_ALL_POSTS,
        allPosts,
        lastPageAllPost
    }
}
//  get current page -> dua sang reducer xu li
export const currentPage = (currentPage) =>{
    return {
        type:types.CURRENT_PAGE,
        currentPage,
    }
}
const src = `${Config.API_BACKEND}/uploads/img_post`
export const img_src = (src= `${Config.API_BACKEND}uploads/img_post` ) =>{
    return {
        type:types.IMG_SRC,
        src
      ,
    }
}
export const actFetchAllOwnersRequest = (page) =>{
    return(dispatch) =>{
        //  cos th sua endpoint = all-owners
        return callApiBackend(`api/all-owners?page=${page}`, 'GET', null).then(res=>{
            dispatch(actFetchAllOwners(res.data.data,res.data.last_page));
        })
    }
}
export const actFetchAllOwners = (allOwners,lastPageAllOwner) =>{
    return {
        type:types.FETCH_ALL_OWNER,
        allOwners,
        lastPageAllOwner
    }
}
//  fetch 1 post
export const fetchPostRequest = (id) =>{
    return(dispatch) =>{
        return callApiBackEnd(`api/post/${id}`, 'GET', null).then(res=>{  
            dispatch(fetchPost(res.data[0]))
        })
    }
}
export const fetchPost= (post) =>{
    return{
        type:types.FETCH_ONE_POST,
        post
    }
}
//  fetch api location
export const actFetchLocationRequest = () =>{
    return(dispatch) =>{
        return callApiLocation('GET', null).then(res=>{
            dispatch(fetchLocation(res.data));
        })
    }
}
export const fetchLocation= (location) =>{
    return{
        type:types.FETCH_LOCATION,
        location
    }
}
export const userProfileRequest = () =>{
    return (dispatch) =>{
        return callApiBackend(`api/user-profile`,'GET',null).then(res=>{
            dispatch(actDispatchIdUser(res.data[0]))
        })
    }
}
export const actDispatchIdUser = (owner) =>{
    return {
        type:types.FETCH_USER,
        owner,
    }
}
export const fetchOwnerProfile = (id) =>{
    return(dispatch) =>{
        return callApiBackend(`api/owner-profile/${id}`, 'GET', null).then(res=>{
            dispatch(ownerProfile(res.data.data));
        })
    }
}
//  dua sang reducer de luu vao store
export const ownerProfile = (ownerProfile) =>{
    return {
        type:types.FETCH_OWNER_PROFILE,
        ownerProfile,
    }
}

// midderware là 1 cấu trúc lớp nằm ở giữa giupws phân chia ứng daungj thành các
//  lớp khác nhau:Logging, Crash Report
//  là lớp nằm giữa reducers và dispatch actions
//  trc khi reducer nhận dc action và sau khi action đã dc dispatch
// redux-thunk, redux-saga...