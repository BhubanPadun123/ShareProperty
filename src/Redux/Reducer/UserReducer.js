import * as actionTypes from "../actionTypes"

const initialState = {
    status:"",
    response:[],
    error:""
}

export class UserReducer {
    

    UserSignUpReducer=(state=initialState,action)=> {
        switch(action.type){
            case actionTypes.USER_RESGISTER_STATUS:
                state = {
                    status:"started",
                    response:[],
                    error:""
                }
                break;
            case actionTypes.USER_RESGISTER_RESPONSE:
                state = {
                    status: "success",
                    response: action.payload,
                    error:""
                }
                break;
            case actionTypes.USER_RESGISTER_ERROR:
                state = {
                    status: "failed",
                    response: [],
                    error: action.payload
                }
                break;
            default:
                return state;
        }
        return state
    }

    UserLoginReducer=(state=initialState,action)=>{
        switch(action.type){
            case actionTypes.USER_LOGIN_STATUS:
                state={
                    status:"started",
                    response:[],
                    error:""
                }
                break;
            case actionTypes.USER_LOGIN_RESPONSE:
                state = {
                    status:"success",
                    response: action.payload,
                    error:""
                }
                break;
            case actionTypes.USER_LOGIN_ERROR:
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

    ForgetPassword=(state = initialState, action)=> {
        switch(action.type){
            case actionTypes.FORGET_PASSWORD_STATUS:
                state = {
                    status:"started",
                    response:[],
                    error:{}
                }
                break;
            case actionTypes.FORGET_PASSWORD_RESPONSE:
                state = {
                    status: "success",
                    response: action.payload,
                    error:{}
                }
                break;
            case actionTypes.FORGET_PASSWORD_ERROR:
                state = {
                    status: "failed",
                    response:[],
                    error: action.payload
                }
                break;
            default:
                return state;
        }

        return state
    }

    VerifyUser=(state=initialState,action)=> {
        switch(action.type){
            case actionTypes.VERIFY_USER_STATUS:
                state= {
                    status:"started",
                    response:[],
                    error:""
                }
                break;
            case actionTypes.VERIFY_USER_RESPONSE:
                state = {
                    status: "success",
                    response: action.payload,
                    error:""
                }
                break;
            case actionTypes.VERIFY_USER_ERROR:
                state = {
                    status: "failed",
                    response:[],
                    error: action.payload
                }
                break;
            default:
                return state;
        }
        return state
    }
    SendOTP=(state=initialState,action)=> {
        switch(action.type){
            case actionTypes.SEND_OTP_STATUS:
                state= {
                    status:"started",
                    response:[],
                    error:""
                }
                break;
            case actionTypes.SEND_OTP_RESPONSE:
                state = {
                    status: "success",
                    response: action.payload,
                    error:""
                }
                break;
            case actionTypes.SEND_OTP_ERROR:
                state = {
                    status: "failed",
                    response:[],
                    error: action.payload
                }
                break;
            default:
                return state;
        }
        return state
    }
}