import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, SIGN_FAILURE, SIGN_REQUEST, SIGN_SUCCESS } from "./actionType";
import axios from "axios";


export const login=(userdata)=>(dispatch)=>{
        dispatch({type:LOGIN_REQUEST})
        return axios.post('http://localhost:8080/users/login',userdata)
        .then((res)=>{

        console.log(res.data);
        dispatch({type:LOGIN_SUCCESS,payload:res.data});
    })
    .catch((err)=>{
        console.log(err);
        dispatch({type:LOGIN_FAILURE})
    })
}

// export const signUp=(obj)=>async(dispatch)=>{
//     dispatch({type:SIGN_REQUEST})
//     await axios.post("http://localhost:8080/users/register",obj)
//     .then((res)=>{
//         console.log(res.data)
//         dispatch({type:SIGN_SUCCESS,payload:res.data})
//     })
//     .catch((err)=>{
//         console.log(err)
//         dispatch({type:SIGN_FAILURE})
//     })
// }



export const signUp = (obj) => async (dispatch) => {
  dispatch({ type: SIGN_REQUEST });
  try {
    const response = await axios.post("http://localhost:8080/users/register", obj);
    console.log(response.data);
    dispatch({ type: SIGN_SUCCESS, payload: response.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: SIGN_FAILURE });
  }
};
