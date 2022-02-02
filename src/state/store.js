import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import SignupReducer from "./reducers/auth/SignupReducer";
import LoginReducer from "./reducers/auth/LoginReducer";
import thunk from "redux-thunk";

const root = combineReducers({
    signup: SignupReducer,
    login: LoginReducer
})

export const store = createStore(root, composeWithDevTools(applyMiddleware(thunk)));