import * as actionTypes from "../actionTypes"
import config from "../../utils/config"
import axios from "axios"



export default class GlobalAction{

    HandleGetAllService=()=> {
        return async(dispatch)=> {
            dispatch({
                type: actionTypes.GET_ALL_SERVICE_STATUS,
                payload: {}
            })

            await axios.get(`${config.baseUrl}/all-servce-list`).then((res)=>{
                dispatch({
                    type: actionTypes.GET_ALL_SERVICE_RESPONSE,
                    payload: res.data
                })
            }).catch((error)=> {
                dispatch({
                    type: actionTypes.GET_ALL_SERVICE_ERROR,
                    payload:error
                })
            })
                
        }
    }

    HandleImageUpload=(props)=>{
        return async(dispatch)=> {
            dispatch({
                type: actionTypes.UPLOAD_IMAGE_STATUS,
                payload:{}
            })

            axios.post(`${config.baseUrl}/upload-image`,{props}).then((res)=> {
                dispatch({
                    type: actionTypes.UPLOAD_IMAGE_RESPONSE,
                    payload:res.data
                })
                dispatch({
                    type: actionTypes.SHOW_GLOBAL_NOTIFICATION,
                    payload:{status:"success",message:"Image Upload successfully"}
                })
            }).catch((error)=> {
                dispatch({
                    type: actionTypes.UPLOAD_IMAGE_ERROR,
                    payload:error
                })
                dispatch({
                    type: actionTypes.SHOW_GLOBAL_NOTIFICATION,
                    payload:{status:"error",message:"Error While upload Image"}
                })
            })
        }
    }
    HandleImageDelete=(props)=> {
        return async(dispatch)=> {
            dispatch({
                type: actionTypes.DELETE_IMAGE_STATUS,
                payload:{}
            })

            await axios.post(`${config.baseUrl}/delete`,{props}).then((res)=> {
                dispatch({
                    type: actionTypes.DELETE_IMAGE_RESPONSE,
                    payload: res.data
                })
                dispatch({
                    type: actionTypes.SHOW_GLOBAL_NOTIFICATION,
                    payload:{status:"success",message:"Deleted Successfully!!!"}
                })
            }).catch((error)=> {
                dispatch({
                    type: actionTypes.DELETE_IMAGE_ERROR,
                    payload:error
                })
                dispatch({
                    type:actionTypes.SHOW_GLOBAL_NOTIFICATION,
                    payload:{status:"error",message:"Something Went wrong!! Please try again."}
                })
            })
        }
    }
} 