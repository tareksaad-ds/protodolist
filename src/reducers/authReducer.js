import {SIGN_UP , SIGN_IN, LOG_OUT} from '../actions/types';

const initialState = {
    user:{
      id: localStorage.getItem('userId') || "",
      name: localStorage.getItem('userName') || "",
      email: localStorage.getItem('userEmail') || "",
    }
}

export default function authReducer(state = initialState, action){
    switch(action.type){
        case SIGN_UP:
            return {
                ...state,
                user: action.payload
            }
        case SIGN_IN:
            if(action.payload && action.payload.length > 0){
                localStorage.setItem("userId", action.payload[0]._id)
                localStorage.setItem("userName", action.payload[0].name)
                localStorage.setItem("userEmail", action.payload[0].email)
            return {
                user: action.payload[0]
            }}else{
                return {
                    ...state,
                }
            }
          
        case LOG_OUT: 
            localStorage.removeItem("userId")
            localStorage.removeItem("userName")
            localStorage.removeItem("userEmail")
            return {
                ...state
            }            
        default: return state;    
        }   
}