import { useFormik } from "formik";
import React from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { signupAction } from "../../actions/authActions";
import "./Register.scss";

function Register(props) {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },

    onSubmit: (values) => {
      dispatch(signupAction(user));
      props.history.push("/login");
    },
  });
  const name = formik.values.name;
  const email = formik.values.email;
  const password = formik.values.password;
  const user = { name, email, password };

  return (
    <div className="center register">
      <h3 className="bad">Register Now!</h3>
      <Form onSubmit={formik.handleSubmit} className="reg container">
        <Form.Group controlId="formGroupName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            id="name"
            placeholder="Enter your name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            name="password"
            id="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            required
          />
        </Form.Group>

        <Button type="submit" variant="warning">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Register;
