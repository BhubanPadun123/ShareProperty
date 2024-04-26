import * as actionTypes from "../actionTypes.js"


const initialState = {
    status:"",
    response:[],
    error:{}
}


export class RoomReducerControl{
    roomRegisterReducer=(state = initialState,action)=> {
        switch(action.type){
            case actionTypes.ROOM_REGISTER_STATUS:
                state = {
                    status:"started",
                    response:[],
                    error:{}
                }
                break;
            case actionTypes.ROOM_REGISTER_RESPONSE:
                state = {
                    status: "success",
                    response: action.payload,
                    error:{}
                }
                break;
            case actionTypes.ROOM_REGISTER_ERROR:
                state={
                    status:"failed",
                    response:[],
                    error:action.payload
                }
                break;
            default:
                return state
        }
        return state
    }
}