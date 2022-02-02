import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const root = combineReducers({

})

export const store = createStore(root, composeWithDevTools(applyMiddleware(thunk)));