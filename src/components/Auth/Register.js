import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { signupAction } from '../../actions/authActions';
import './Register.scss';

function Register(props) {
    const [name , setName]= useState("");
    const [email , setEmail]= useState("");
    const [password , setPassword]= useState("");
    const user = {name , email , password};
    const dispatch= useDispatch();
    const signUpUser = (e) => {
        e.preventDefault();
        dispatch(signupAction(user));
        props.history.push("/login")
    }


    return (
        <div className="center register">
        <h3 className="bad">Register Now!</h3>
        <Form onSubmit={signUpUser} className="reg container" >
            <Form.Group controlId="formGroupName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control  
                    type="text" 
                    placeholder="Enter your name" 
                    name="name"
                    value= {name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                    type="email" 
                    placeholder="Enter your email" 
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control  
                    type="password" 
                    placeholder="Enter your password" 
                    name= "password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </Form.Group>
            
            <Button type="submit" variant="warning">Submit</Button> 
        </Form>
    </div>
    )
}

export default Register
