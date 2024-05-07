import { UserReducer } from "./UserReducer";
import { combineReducers } from "redux";
import NotificationReducer from "./NotificationReducer";
import { RoomReducerControl } from "./RoomReducer";
import { GlobalReducer } from "./globalReducer";

const userRelatedReducer = new UserReducer()
const appNotification = new NotificationReducer()
const RoomReducer = new RoomReducerControl()

const RootReducer = combineReducers({
    userSignup: userRelatedReducer.UserSignUpReducer,
    userLogin: userRelatedReducer.UserLoginReducer,
    globalNotification: appNotification.GlobalNotification,
    passwordReset: userRelatedReducer.ForgetPassword,
    registerRoom: RoomReducer.roomRegisterReducer,
    postMetadata: RoomReducer.metaDataPostReducer,
    getMetadata: RoomReducer.getMetadataReducer,
    getAllService: new GlobalReducer().AllServiceReducer,
    imageReducer: new GlobalReducer().UploadImageReducer,
    imageDeleteReducer: new GlobalReducer().DeleteImageReducer
})

export default RootReducer