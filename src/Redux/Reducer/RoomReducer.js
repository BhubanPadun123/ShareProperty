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

    metaDataPostReducer=(state=initialState,action)=> {
        switch(action.type){
            case actionTypes.METADATA_POST_STATUS:
                state={
                    status:"started",
                    response:[],
                    error:{}
                }
                break;
            case actionTypes.METADATA_POST_RESPONSE:
                state = {
                    status: "success",
                    response: action.payload,
                    error:{}
                }
                break;
            case actionTypes.METADATA_POST_ERROR:
                state = {
                    status:"failed",
                    response:[],
                    error: action.payload
                }
                break;
            default:
                return state
        }
        return state
    }

    getMetadataReducer=(state=initialState,action)=> {
        switch(action.type){
            case actionTypes.GET_METADATA_STATUS:
                state = {
                    status:"started",
                    response:[],
                    error:{}
                }
                break;
            case actionTypes.GET_METADATA_RESPONSE:
                state = {
                    status:"success",
                    response:action.payload,
                    error:{}
                }
                break;
            case actionTypes.GET_METADATA_ERROR:
                state = {
                    status: "failed",
                    response: [],
                    error: action.payload
                }
                break;
            default:
                return state
        }
        return state
    }
}