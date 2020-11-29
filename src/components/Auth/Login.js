import React, { useEffect } from "react";
import "./Login.scss";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { signinAction } from "../../actions/authActions";
import { useFormik } from "formik";

function Login(props) {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      dispatch(
        signinAction(formik.values.email, formik.values.password, {
          isLogin: true,
          history: props.history,
        })
      );
    },
  });

  useEffect(() => {
    if (localStorage.getItem("userId")) {
      props.history.push("/");
    }
  });
  const email = formik.values.email;
  const password = formik.values.password;
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  return (
    <div className="center loogin">
      <h3 className="bad">Login</h3>
      <Form onSubmit={formik.handleSubmit} className="log container">
        <Form.Group controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            id="email"
            placeholder="Enter your email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            id="password"
            placeholder="Enter your password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
        </Form.Group>

        <Button disabled={!validateForm} type="submit" variant="warning">
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login;
