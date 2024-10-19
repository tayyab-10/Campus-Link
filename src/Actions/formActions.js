import axios from "axios";
import { CLEAR_ERRORS, CREATE_FORM_FAIL, CREATE_FORM_REQUEST, CREATE_FORM_SUCCESS, GET_FORM_FAIL, GET_FORM_REQUEST, GET_FORM_SUCCESS } from "../Constants/Formconstants";


const backendUrl = "https://campus-link-hbro.onrender.com";

// Create Form
export const createForm = (formdata) => async (dispatch) => {
    try {
      dispatch({ type: CREATE_FORM_REQUEST });
  
      const config = {
        headers: { "Content-Type": "application/json" },
        // withCredentials: true,
      };
  
      const { data } = await axios.post(
        `${backendUrl}/api/form/createform`,
        formdata,
        config
      );
      dispatch({ type: CREATE_FORM_SUCCESS, payload: data.formId  }); //becasue there is a token in the response
    } catch (error) {
      dispatch({ type: CREATE_FORM_FAIL, payload: error.response.data.error });
    }
  };

  export const fetchFormById = (id) => async (dispatch) => {
    try {
      dispatch({ type: GET_FORM_REQUEST });
      
      const { data } = await axios.get(`${backendUrl}/api/form/forms/${id}`);
      
      dispatch({
        type: GET_FORM_SUCCESS,
        payload: data.form,
      });
    } catch (error) {
      dispatch({
        type: GET_FORM_FAIL,
        payload: error.response && error.response.data.message 
          ? error.response.data.message 
          : error.message,
      });
    }
  };

  //Clearing Errors
export const clearError = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
