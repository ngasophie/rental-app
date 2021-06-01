import * as types from './../constants/actionTypes';
import callApi from './../utils/apiCaller';
import callApiBackEnd from './../utils/apiCallBackend';
import callApiDashboard from './../utils/apiDashboardCall';
import postData from './../utils/apiPostFormData';
export const addRenterRequest =  (renter) =>{
    return(dispatch) =>{
        return callApiBackEnd('api/all-renters/store','POST',{
            name: renter.name,
            email:renter.email,
            password:renter.password
        }).then(res=>{
            console.log(res)
            dispatch(addRenter(renter))
        })
    }
}
export const addRenter = (renter) =>{
    return {
        type:types.ADD_RENTER,
        renter
    }
}
export const loginRequest =  (user) =>{
    // return(dispatch) =>{
        return callApiBackEnd('api/auth/login','POST',{
            email:user.email,
            password:user.password
        }).then(res=>{
            if(res){
                localStorage.setItem('auth_token',res.data.access_token)
            }
            console.log(res)
        })
    // }
}
export const registerRequest =  (user) =>{
        return callApiBackEnd('api/auth/register','POST',{
            name:user.name,
            email:user.email,
            password:user.password,
            password_confirmation:user.password_confirmation
        }).then(res=>{
            if(res){
                if(res.status == 201){
                    localStorage.setItem('register','ok');
                }
            }
            console.log(res)
        })
    // }
}
export const sendPost =  (formData) =>{
        return postData('api/owner/add-post','POST',formData).then(res=>{
            console.log(res);
            if(res){
                alert('Create post success');
            }
        })
}
export const editPost =  (formData,id) =>{
    console.log(id);
        return postData(`api/owner/edit-post/${id}`,'POST',formData).then(res=>{
            if(res){
                console.log(res)
                alert('Update post success');
            }
        })
}
export const deletePost = (id) =>{
    return (dispatch) =>{
        console.log(id)
        return callApiDashboard(`api/owner/delete-post/${id}`, 'POST', {}).then(res=>{
            console.log(res)
            if(res){
                dispatch(actDeletePost(id))
            }
        })
    }
}
export const actDeletePost = (id)=>{
    return {
        type: types.DELETE_POST,
        id
    }
}
export const filterRequest = (data) =>{
    return (dispatch) =>{
        return callApiBackEnd(`api/filter-posts`, 'POST', data).then(res=>{
            console.log(res)
            if(res){
                dispatch(filterData(res.data.data,res.data.last_page));
            }
        })
    }
}
export const filterData = (filterData,filterPage)=>{
    return {
        type: types.FILTER_POST,
        filterData,
        filterPage
    }
}
// send message
export const sendMessage = (data) =>{
    return callApiBackEnd('api/postMessage','POST',data)
    .then(res =>{
        console.log(res);
    }).catch(er =>{
        console.log(er);
    })
}
export const chats= (data)=>{
    return{
        type:types.CHATS,
        data
    }
}
export const getMessages=(data)=>{
    console.log(data)
    return (dispatch) =>{
        return callApiBackEnd(`api/getMessages`, 'POST', data).then(res=>{
            console.log(res)
            if(res){
                dispatch(getMessageReducer(res.data));
            }
        })
    }
}
export const getMessageReducer=(data)=>{
    return {
        type:types.GET_MESSAGES,
        getMessageReducer:data
    }
}
export const getConversations=()=>{
    return (dispatch) =>{
        return callApiBackEnd(`api/getConversations`, 'POST', null).then(res=>{
            console.log(res)
            if(res){
                dispatch(getConversationReducer(res.data));
            }
        })
    }
}
export const getConversationReducer=(data)=>{
    return {
        type:types.GET_CONVERSATIONS,
        getConversationReducer :data
    }
}
export const review= (data)=>{
    return callApiBackEnd(`api/review`, 'POST', data).then(res=>{
        console.log(res)
        if(res){
           alert('your review is sent! your review need to be checked to display')
        }
    })
}
