import Axios from 'axios';
import {toast} from 'react-toastify';
import {LOG_OUT, SIGN_IN, SIGN_UP } from '../actions/types';


toast.configure();

export const signupAction = (user) => async (dispatch) => {
    const headers = {
        Authorization: 'Basic YWRtaW46YWRtaW4='
    }
    const res = await Axios.post('http://localhost:5984/todo_users/', user,{headers});
    dispatch({
        type: SIGN_UP,
        payload: res.doc
    })
    toast.success("Successful Register!",{
        position: toast.POSITION.BOTTOM_CENTER

    })
}

export const signinAction = (email, password, redirectData = null) => async (dispatch) =>{
    const headers = {
        Authorization: 'Basic YWRtaW46YWRtaW4='
    }
    
         
        const res = await Axios.post('http://localhost:5984/todo_users/_find/',{
            selector: {email: {$eq:email}, password: {$eq:password}}
        },{headers});
        dispatch({
            type: SIGN_IN,
            payload: res.data.docs,
        });
        
        if(localStorage.getItem("userId") === null){
            toast.error("Login Failed",{
                position: toast.POSITION.BOTTOM_CENTER

            })
         }
         if(redirectData && redirectData.isLogin){
            redirectData.history.push('/dashboard');
        }

}

export const logoutAction = () => async (dispatch) => {
    
    
    dispatch({
        type: LOG_OUT,
    })
}