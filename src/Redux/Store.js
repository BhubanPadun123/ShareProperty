import RootReducer from "./Reducer";
import { createStore,applyMiddleware } from "redux";
import {thunk} from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"


const middleWare = [thunk]


const Store = createStore(RootReducer,composeWithDevTools(applyMiddleware(...middleWare)))

export default Store