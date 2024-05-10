import * as actionTypes from "../actionTypes"
import axios from "axios"
import config from "../../utils/config"



export const UserRegisterAction = (props) => {
    return async (dispatch) => {
        try {
            if (props.password !== props.cpassword) {
                alert("password misMatch")
                dispatch({
                    type:actionTypes.SHOW_GLOBAL_NOTIFICATION,
                    payload:{status:"warning",message:"password MisMatch!!!"}
                })
            }
            dispatch({
                type: actionTypes.USER_RESGISTER_STATUS,
                payload: {}
            })
            axios.post(`${config.baseUrl}/signup`, { props }).then((response)=> {
                dispatch({
                    type: actionTypes.USER_RESGISTER_RESPONSE,
                    payload: response.data
                })
                dispatch({
                    type: actionTypes.SHOW_GLOBAL_NOTIFICATION,
                    payload:{status:"success",message:"User Register successfull."}
                })
            }).catch((error)=> {
                dispatch({
                    type: actionTypes.USER_RESGISTER_ERROR,
                    payload: error
                })
                dispatch({
                    type: actionTypes.SHOW_GLOBAL_NOTIFICATION,
                    payload:{status:"info",message:"Error while API call"}
                })
            })
        } catch (error) {
            dispatch({
                type: actionTypes.USER_RESGISTER_ERROR,
                payload: error
            })
            dispatch({
                type: actionTypes.SHOW_GLOBAL_NOTIFICATION,
                payload: {status: "error", message:"Error"}
            })
        }
    }
}

export const UserLoginAction=(props)=> {
    
    return async(dispatch)=>{
        try {
            dispatch({
                type: actionTypes.USER_LOGIN_STATUS,
                payload:"started"
            })

            axios.post(`${config.baseUrl}/signin`,{props}).then((response)=> {
                dispatch({
                    type:actionTypes.SHOW_GLOBAL_NOTIFICATION,
                    payload:{status:"success",message:"User Login Successfull"}
                })
                dispatch({
                    type: actionTypes.USER_LOGIN_RESPONSE,
                    payload:response.data
                })
            }).catch((error)=> {
                dispatch({
                    type: actionTypes.USER_LOGIN_ERROR,
                    payload:error
                })
                dispatch({
                    type:actionTypes.SHOW_GLOBAL_NOTIFICATION,
                    payload:{status:"error",message:"Error while Login"}
                })
            })
        } catch (error) {
            dispatch({
                type: actionTypes.SHOW_GLOBAL_NOTIFICATION,
                payload:{status:"error",message:"Error while Login"}
            })
            dispatch({
                type:actionTypes.SHOW_GLOBAL_NOTIFICATION,
                payload:{status:"error",message:"Error while Login"}
            })
        }
    }
}

export const ForgetPasswordAction=(props)=>{
    return async(dispatch)=> {
        dispatch({
            type: actionTypes.FORGET_PASSWORD_STATUS,
            payload:{}
        })

        const responseData = (await axios.post(`${config.baseUrl}/forgot-password`,{props})).data

        if(responseData){
            dispatch({
                type: actionTypes.SHOW_GLOBAL_NOTIFICATION,
                payload:{status:"success",message:"Password Updated successfully."}
            })
            dispatch({
                type: actionTypes.FORGET_PASSWORD_RESPONSE,
                payload: responseData
            })
        }else{
            dispatch({
                type: actionTypes.SHOW_GLOBAL_NOTIFICATION,
                payload:{status:"error",message:"Password Updated successfully."}
            })
            dispatch({
                type: actionTypes.FORGET_PASSWORD_ERROR,
                payload:"Error"
            })
        }
    }
}



