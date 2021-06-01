import callApiBackend from './../../utils/apiDashboardCall';// api dashboard
import * as types from './../../constants/actionTypes';
export const updateProfileRequest =  (formData) =>{
    return(dispatch) =>{
        let owner = {};
        owner.name = formData.get('name');
        owner.email = formData.get('email');
        owner.address = formData.get('address');
        owner.city = formData.get('city');
        owner.district = formData.get('district');
        owner.description = formData.get('description');
        owner.identification = formData.get('identification');
        owner.phone_number = formData.get('phone_number');
        console.log(formData.get('files[]').name)
        owner.img_src = formData.get('files[]').name
        return callApiBackend('api/user-profile/update','POST',
            formData
        ).then(res=>{
            if(res){
                
                alert('update success')
                dispatch(updateProfile(owner))
            }
        })
    }
}
export const updateProfile = (owner) =>{
    return {
        type:types.FETCH_USER,
        owner
    }
}
export const registerAsOwner =  (formData) =>{
    return callApiBackend('api/auth/owner/register','POST',
        formData
    ).then(res=>{
        console.log(res)
        if(res){
            alert('your request is sent! please wait to be accepted')
        }
    })
}
