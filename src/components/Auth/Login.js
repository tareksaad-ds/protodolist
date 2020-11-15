import React, { useEffect, useState } from 'react';
import './Login.scss';
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { signinAction } from '../../actions/authActions';

function Login(props) {
    const [email , setEmail]= useState("");
    const [password, setPassword]= useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        if (localStorage.getItem("userId")){
            props.history.push('/')
        }
    });
    function validateForm() {
        return email.length > 0 && password.length > 0;
    }
   
    const signinUser= (e)=>{
        e.preventDefault();
        dispatch(signinAction(email, password, {
            isLogin: true,
            history: props.history
        }));  
    }
    return (
        <div className="center loogin">
            <h3 className="bad">Login</h3>
        <Form onSubmit={signinUser} className="log container" >
            
            <Form.Group controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control  
                    type="email" 
                    placeholder="Enter your email" 
                    name= "email"
                    value= {email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    type="password" 
                    placeholder="Enter your password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                 />
            </Form.Group>
            
            <Button disabled={!validateForm} type="submit" variant="warning">Login</Button> 
        </Form>
        
        </div>
    )
}


export default Login; 
