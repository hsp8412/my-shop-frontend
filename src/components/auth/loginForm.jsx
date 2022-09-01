import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Card, Container, Form } from "react-bootstrap";
import { login } from "../../service/authService";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/auth-slice";
import { pageActions } from "../../store/page-slice";

const LoginForm = () => {
  const currentPage = useSelector((state) => state.page.currentPage);
  const dispatch = useDispatch();
  const { handleChange, handleBlur, errors, values, touched, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit: async ({ email, password }, { resetForm }) => {
        try {
          await login(email, password, dispatch);
          resetForm();
          if (currentPage === "Cart") {
            window.location = "/user/cart";
          } else if (currentPage === "Orders") {
            window.location = "/user/orders";
          } else {
            dispatch(pageActions.changePage("Products"));
            window.location = "/";
          }
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
    });

  return (
    <Container className="login-container d-flex  justify-content-center">
      <Card className="text-start my-5" style={{ width: "500px" }}>
        <Card.Body>
          <h1 className="mb-3 text-center mb-4 mt-2">Sign in</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="Enter email"
                isInvalid={touched.email && errors.email}
              />
              <Form.Text className="text-danger">
                {touched.email && errors.email ? errors.email : null}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                placeholder="Password"
                isInvalid={touched.password && errors.password}
              />
              <Form.Text className="text-danger">
                {touched.password && errors.password ? errors.password : null}
              </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
              Sign in
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default LoginForm;
