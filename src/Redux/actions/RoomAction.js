import * as actionTypes from "../actionTypes"
import axios from "axios"
import config from "../../utils/config"


export class RoomActionControl{

    handleRoomRegister=(props)=>{
        return async(dispatch)=> {
            dispatch({
                type: actionTypes.ROOM_REGISTER_STATUS,
                payload:{}
            })

            const roomData = (await axios.post(`${config.baseUrl}/register-room`,{props})).data

            if(roomData){
                dispatch({
                    type: actionTypes.ROOM_REGISTER_RESPONSE,
                    payload: roomData
                })
                dispatch({
                    type: actionTypes.SHOW_GLOBAL_NOTIFICATION,
                    payload:{status:"success",message:"Successfully posted your room"}
                })
            }else{
                dispatch({
                    type: actionTypes.ROOM_REGISTER_ERROR,
                    payload:"Error"
                })

                dispatch({
                    type: actionTypes.SHOW_GLOBAL_NOTIFICATION,
                    payload:{status:"error",message:"Error While post your room!!. Please try again."}
                })
            }
        }
    }

    handleMetadataPost=(props)=> {
        
        return async(dispatch)=> {
            dispatch({
                type: actionTypes.METADATA_POST_STATUS,
                payload: {}
            })
            
            const postMetadata = (await axios.post(`${config.baseUrl}/metadata-post`,{props})).data

            if(postMetadata){
                dispatch({
                    type: actionTypes.METADATA_POST_RESPONSE,
                    payload: postMetadata
                })
                dispatch({
                    type:actionTypes.SHOW_GLOBAL_NOTIFICATION,
                    payload:{status:"info",message:"Data Save successfully"}
                })
            }else{
                dispatch({
                    type: actionTypes.METADATA_POST_ERROR,
                    payload: "Error"
                })
            }
        }
    }

    handleGetMetadata=(props)=>{
        console.log("from action==>",props)
        return async(dispatch)=> {
            dispatch({
                type: actionTypes.GET_METADATA_STATUS,
                payload:{}
            })

            await axios.get(`${config.baseUrl}/detadata/${props.email}`).then((res)=> {
                dispatch({
                    type: actionTypes.GET_METADATA_RESPONSE,
                    payload: res.data
                })
            }).catch((error)=> {
                dispatch({
                    type: actionTypes.GET_METADATA_ERROR,
                    payload: error
                })
            })
        }
    }
}