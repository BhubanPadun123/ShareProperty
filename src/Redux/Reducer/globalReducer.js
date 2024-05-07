import * as actionTypes from "../actionTypes"


const initialState = {
    status:"",
    response:[],
    error:{}
}


export class GlobalReducer{

    AllServiceReducer=(state=initialState,action)=> {
        switch(action.type){
            case actionTypes.GET_ALL_SERVICE_STATUS:
                state = {
                    status:"started",
                    response:[],
                    error:{}
                }
                break;
            case actionTypes.GET_ALL_SERVICE_RESPONSE:
                state = {
                    status:"success",
                    response:action.payload,
                    error:{}
                }
                break;
            case actionTypes.GET_ALL_SERVICE_ERROR:
                state = {
                    status:"failed",
                    response:[],
                    error: action.payload
                }
                break;
            default:
                return state;
        }
        return state
    }

    UploadImageReducer=(state=initialState,action)=> {
        switch(action.type){
            case actionTypes.UPLOAD_IMAGE_STATUS:
                state = {
                    status:"started",
                    response:[],
                    error:{}
                }
                break;
            case actionTypes.UPLOAD_IMAGE_RESPONSE:
                state = {
                    status:"success",
                    response: action.payload,
                    error:{}
                }
                break;
            case actionTypes.UPLOAD_IMAGE_ERROR:
                state = {
                    status: "failed",
                    response:[],
                    error:action.payload
                }
                break;
            default:
                return state
        }
        return state
    }

    DeleteImageReducer=(state=initialState,action)=> {
        switch(action.type){
            case actionTypes.DELETE_IMAGE_STATUS:
                state = {
                    status:"started",
                    response:[],
                    error:{}
                }
                break;
            case actionTypes.DELETE_IMAGE_RESPONSE:
                state = {
                    status: "success",
                    response: action.payload,
                    error:{}
                }
                break;
            case actionTypes.DELETE_IMAGE_ERROR:
                state = {
                    status: "failed",
                    response:[],
                    error:action.payload
                }
                break;
            default:
                return state;
        }

        return state
    }
}