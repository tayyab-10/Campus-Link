import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import {thunk} from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userReducer } from "../Reducers/userReducer";

const reducer = combineReducers({
     User:userReducer
})
const middleware = [thunk];

let initialState = {
   
};

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;