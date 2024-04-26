import { UserReducer } from "./UserReducer";
import { combineReducers } from "redux";
import NotificationReducer from "./NotificationReducer";
import { RoomReducerControl } from "./RoomReducer";

const userRelatedReducer = new UserReducer()
const appNotification = new NotificationReducer()
const RoomReducer = new RoomReducerControl()

const RootReducer = combineReducers({
    userSignup: userRelatedReducer.UserSignUpReducer,
    userLogin: userRelatedReducer.UserLoginReducer,
    globalNotification: appNotification.GlobalNotification,
    passwordReset: userRelatedReducer.ForgetPassword,
    registerRoom: RoomReducer.roomRegisterReducer
})

export default RootReducer