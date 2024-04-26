import * as actionTypes from "../actionTypes"


export const ResetGlobalNotification=()=>{
    return async(dispatch)=>{
        dispatch({
            type: actionTypes.RESET_GLOBAL_NOTIFICATION,
            payload:{status:"",message:""}
        })
        dispatch({
            type: actionTypes.SHOW_GLOBAL_NOTIFICATION,
            payload: {status:"",message:""}
        })
    }
}

export const SetGlobalNotification=(props)=> {
    const {
        status,
        message
    } = props
    return async(dispatch)=>{
        dispatch({
            type:actionTypes.SHOW_GLOBAL_NOTIFICATION,
            payload:{status:status,message:message}
        })
    }
}