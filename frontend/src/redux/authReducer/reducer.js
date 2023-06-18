import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, SIGN_FAILURE, SIGN_REQUEST, SIGN_SUCCESS } from "./actionType"


const initState={
    isAuth:false,
    isLoading:false,
    isError:false,
    user:[],
    registerUser:[]
}

export const reducer=(state=initState,{type,payload})=>{
   switch(type){
    case LOGIN_REQUEST:{
        return {...state,isLoading:true}
    }
    case LOGIN_SUCCESS:{
        return {...state,isLoading:false,isAuth:true,user:payload}
    }
    case LOGIN_FAILURE:{
        return {...state,isLoading:false,isError:true}
    }
    case SIGN_REQUEST:{
        return {...state, isLoading:true}
    }
    case SIGN_SUCCESS:{
        return {...state,isLoading:false,isAuth:true,registerUser:payload}
    }
    case SIGN_FAILURE:{
        return {...state,isLoading:false,isError:true}
    }
    default :{
        return state
    }
    
   }



}