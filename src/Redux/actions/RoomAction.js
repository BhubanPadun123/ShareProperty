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
}