import axios from "axios";
import { CLEAR_ERRORS, GET_SOCIETY_FAIL, GET_SOCIETY_REQUEST, GET_SOCIETY_SUCCESS } from "../Constants/SocietyConstants";

const backendUrl = "https://campus-link-hbro.onrender.com";


export const getSocieties = () => async (dispatch) => {
    try {
      dispatch({ type: GET_SOCIETY_REQUEST });
  
      const config = {
        headers: { "Content-Type": "application/json" },
      };
  
      const { data } = await axios.get(
        `${backendUrl}/api/societies/getAllSocieties`,
        config
      );
      console.log("Fetched Societies: ", data);
  
      dispatch({
        type: GET_SOCIETY_SUCCESS,
        payload: data.societies,
      });
    } catch (error) {
      dispatch({
        type: GET_SOCIETY_FAIL,
        payload: error.response && error.response.data
          ? error.response.data.error
          : error.message, // Fallback to error message if response is undefined
      });
    }
  };
  


  //Clearing Errors
  export const clearError = () => async (dispatch) => {
    dispatch({
      type: CLEAR_ERRORS,
    });
  };
  