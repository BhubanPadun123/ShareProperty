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

            const listData = (await axios.get(`${config.baseUrl}/all-servce-list`)).data

            if(listData){
                dispatch({
                    type: actionTypes.GET_ALL_SERVICE_RESPONSE,
                    payload: listData
                })
            }
            else{
                dispatch({
                    type: actionTypes.GET_ALL_SERVICE_ERROR,
                    payload:"Error while fetch the list data"
                })
            }
        }
    }
} 