import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Card, Container, Form } from "react-bootstrap";
import { login } from "../../service/authService";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth-slice";
import { getUserInfo } from "../../service/userService";

const LoginForm = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async ({ email, password }, { resetForm }) => {
      try {
        await login(email, password);
        const userInfo = await getUserInfo();
        dispatch(authActions.login(userInfo));
        resetForm();
        window.location = "/";
      } catch (ex) {
        if (ex.response && ex.response.status === 400) {
          dispatch(authActions.setShowInvalid(true));
          resetForm();
        }
      }
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email("Please enter a valid email address.")
        .required("Email is required."),
      password: Yup.string().required("Password is required."),
      rememberMe: Yup.boolean(),
    }),
    validateOnBlur: false,
    validateOnChange: false,
  });

  return (
    <Container className="login-container d-flex  justify-content-center">
      <Card className="text-start my-5" style={{ width: "500px" }}>
        <Card.Body>
          <h1 className="mb-3 text-center mb-4 mt-2">Sign in</h1>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                placeholder="Enter email"
              />
              <Form.Text className="text-danger">
                {formik.errors.email ? formik.errors.email : null}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                placeholder="Password"
              />
              <Form.Text className="text-danger">
                {formik.errors.password ? formik.errors.password : null}
              </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
              Sign In
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default LoginForm;
