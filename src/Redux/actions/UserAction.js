import * as actionTypes from "../actionTypes"
import axios from "axios"
import config from "../../utils/config"



export const UserRegisterAction = (props) => {
    return async (dispatch) => {
        try {
            if (props.password !== props.cpassword) {
                alert("password misMatch")
            }
            dispatch({
                type: actionTypes.USER_RESGISTER_STATUS,
                payload: {}
            })
            console.log(config)
            const postData = await axios.post(`${config.baseUrl}/signup`, { props })
            if (postData) {
                dispatch({
                    type: actionTypes.USER_RESGISTER_RESPONSE,
                    payload: postData.data
                })
                dispatch({
                    type: actionTypes.SHOW_GLOBAL_NOTIFICATION,
                    payload:{status:"success",message:"User Register successfull."}
                })
            } else {
                dispatch({
                    type: actionTypes.USER_RESGISTER_ERROR,
                    payload: "error"
                })
                dispatch({
                    type: actionTypes.RESET_GLOBAL_NOTIFICATION,
                    payload:{status:"info",message:"Error while API call"}
                })
            }
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

            const user = (await axios.post(`${config.baseUrl}/signin`,{props})).data

            if(user){
                dispatch({
                    type:actionTypes.SHOW_GLOBAL_NOTIFICATION,
                    payload:{status:"success",message:"User Login Successfull"}
                })
                dispatch({
                    type: actionTypes.USER_LOGIN_RESPONSE,
                    payload:"user Login successfull"
                })
            }
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



