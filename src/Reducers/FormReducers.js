import { CREATE_FORM_FAIL, CREATE_FORM_REQUEST, CREATE_FORM_SUCCESS,CLEAR_ERRORS, GET_FORM_REQUEST, GET_FORM_SUCCESS, GET_FORM_FAIL} from "../Constants/Formconstants";

const initialState = {
    error: null,
    loading: false,
    form:{}
}
export const formreducer=(state={initialState},action)=>{
    switch (action.type) {
        case CREATE_FORM_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case CREATE_FORM_SUCCESS:
            return{
                ...state,
                loading:false,
                formId: action.payload
            }

        case CREATE_FORM_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
              };
            
        case CLEAR_ERRORS:
              return {
                 ...state,
                  error: null,
              };      
        default:
            return state;
    }
}

export const GetformReducer = (state = { form: null }, action) => {
    switch (action.type) {
      case GET_FORM_REQUEST:
        return { 
            loading: true,
            form: null
         };
  
      case GET_FORM_SUCCESS:
        return { 
            loading: false,
            form: action.payload 
        };
  
      case GET_FORM_FAIL:
        return { 
            loading: false, error: 
            action.payload
         };
  
      default:
        return state;
    }
  };