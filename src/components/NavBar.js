import React, { useEffect } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logoutAction, signinAction } from '../actions/authActions';
import './NavBar.scss';

function NavBar() {
    const user = useSelector((store)=> store.user.user);
    const dispatch= useDispatch();
    const id = localStorage.getItem("userId");

    useEffect(()=> {
        if ( id !== null ){
            dispatch(signinAction(),user)
            
        } 
    })
    const history= useHistory();
    const logoutBtn = () =>{
        dispatch(logoutAction())
        history.push('/')
    }
    return (
        <div>
            <Navbar variant="light">
                <div className="container">
                <Navbar.Brand href="/">Rise APP </Navbar.Brand>
                <div className="responsive">
                <Navbar.Collapse>
                
                {id ? <Nav.Link href="/dashboard">{user.name}</Nav.Link>: <Nav.Link href="/login">Login</Nav.Link>}
                {id ? <Nav.Link href="/" onClick={logoutBtn} >Logout</Nav.Link> : <Nav.Link href="/register">Sign Up</Nav.Link>}
                </Navbar.Collapse>
                </div>
                </div>
            </Navbar>
        </div>
    )
}

export default NavBar
