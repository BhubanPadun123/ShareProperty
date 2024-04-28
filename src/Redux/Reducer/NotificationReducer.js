
import * as actionTypes from "../actionTypes"

const initialState = {
    response:{},
    clear_response:{}
}

export default class NotificationReducer {

    GlobalNotification=(state=initialState,action)=>{
        switch(action.type){
            case actionTypes.SHOW_GLOBAL_NOTIFICATION:
                state = {
                    response: action.payload,
                    clear_response:{}
                }
                break;
            case actionTypes.RESET_GLOBAL_NOTIFICATION:
                state = {
                    response:{},
                    clear_response: action.payload
                }
                break;
            default:
                return state;
        }
        return state
    }
}
