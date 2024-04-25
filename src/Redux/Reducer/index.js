import { UserReducer } from "./UserReducer";
import { combineReducers } from "redux";

const userRelatedReducer = new UserReducer()

const RootReducer = combineReducers({
    userSignup: userRelatedReducer.UserSignUpReducer,
    userLogin: userRelatedReducer.UserLoginReducer
})

export default RootReducer