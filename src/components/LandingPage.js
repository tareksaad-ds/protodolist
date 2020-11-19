import React from "react";
import "./LandingPage.scss";
import image from "../assets/SM.png";
import { Button } from "react-bootstrap";

function LandingPage() {
  return (
    <div className="landing">
      <img src={image} alt="landing" />
      <div className="top-left">
        <h3>
          Welcome To <span>Rise</span>
        </h3>
        <hr />
        <p>Put your tasks in your dashboard</p>
        <br />
        <p>Let's begin the journey..</p>
        <Button href="/register" variant="warning">
          Get Started
        </Button>
      </div>
    </div>
  );
}

export default LandingPage;
