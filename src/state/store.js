import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import SignupReducer from "./reducers/authReducers/SignupReducer";
import LoginReducer from "./reducers/authReducers/LoginReducer";
import TodosReducer from "./reducers/todoReducers/TodoReducer";
import GalleryReducer from "./reducers/galleryReducers/GalleryReducers";
import TableReducer from "./reducers/tableReducers/TableReducer";
import thunk from "redux-thunk";

const root = combineReducers({
    signup: SignupReducer,
    login: LoginReducer,
    todos: TodosReducer,
    gallery: GalleryReducer,
    table: TableReducer
})

export const store = createStore(root, composeWithDevTools(applyMiddleware(thunk)));