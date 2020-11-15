import React from 'react';
import './LandingPage.scss';
import image from '../assets/SM.png';
import { Button } from 'react-bootstrap';

function LandingPage() {
    return (
        <div className="landing">
            <img src={image} alt="landing" />
            <div className="top-left">
                <h1>Welcome To <span>Rise</span></h1>
                <hr />
                <ol>
                    <li>Create your task</li>
                    <li>Add Task Category</li>
                    <li>Add your task progress</li>
                    <li>Add your Deadline</li>
                    <li>Edit your Dashboard</li>
                </ol> 
                <br />
                <p>Let's begin the journey..</p>
                <Button href="/register" variant="warning">Get Started</Button>
                
            </div>
        </div>
    )
}

export default LandingPage
