import { legacy_createStore as createStore, combineReducers, applyMiddleware, compose } from "redux";
import {thunk} from "redux-thunk"; // Corrected import
import { forgotPasswordReducer, userReducer } from "../Reducers/userReducer";
import { formreducer, GetformReducer } from "../Reducers/FormReducers";

// Combine all your reducers
const reducer = combineReducers({
    User: userReducer,
    forgotpassword: forgotPasswordReducer,
    Inductionform:formreducer,
    GetForm:GetformReducer
});

// Middleware array, with thunk middleware
const middleware = [thunk];

// Define your initial state, if required
let initialState = {};

// Compose middleware with DevTools if available
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
);

export default store;
