import { CLEAR_ERRORS, GET_SOCIETY_FAIL, GET_SOCIETY_REQUEST, GET_SOCIETY_SUCCESS } from "../Constants/SocietyConstants";

const initialState = {
    error: null,
    societies: [],
    loading: false
}

export const SocietyReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SOCIETY_REQUEST:
            console.log("GET_SOCIETY_REQUEST dispatched");
            return {
                ...state,
                loading: true,
            };
        
        case GET_SOCIETY_SUCCESS:
            console.log("Societies received in reducer: ", action.payload);
            return {
                ...state,
                loading: false,
                societies: action.payload
            };

        case GET_SOCIETY_FAIL:
            console.log("GET_SOCIETY_FAIL: Error received", action.payload);
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        
        case CLEAR_ERRORS:
            console.log("CLEAR_ERRORS dispatched");
            return {
                ...state,
                error: null,
            };
        
        default:
            return state;
    }
};
