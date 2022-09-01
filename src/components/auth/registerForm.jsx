import React, { Component, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { register } from "../../service/authService";
import { toast } from "react-toastify";

const RegisterForm = () => {
  const provinceList = [
    "AB",
    "BC",
    "MB",
    "NB",
    "NL",
    "NS",
    "NT",
    "NU",
    "ON",
    "PE",
    "QC",
    "SK",
    "YT",
  ];
  const navigate = useNavigate();
  const { handleChange, handleBlur, errors, values, touched, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        firstName: "",
        lastName: "",
        password: "",
        confirmPassword: "",
        aptOrSuite: "",
        streetAddress: "",
        city: "",
        province: "Select Province",
        postalCode: "",
        phone: "",
      },
      onSubmit: async (values) => {
        const {
          email,
          firstName,
          lastName,
          password,
          aptOrSuite,
          streetAddress,
          city,
          province,
          postalCode,
          phone,
        } = values;
        const user = {
          email,
          firstName,
          lastName,
          password,
          aptOrSuite,
          streetAddress,
          city,
          province,
          postalCode,
          phone,
        };
        if (user.aptOrSuite === "") {
          delete user.aptOrSuite;
        }
        if (user.phone === "") {
          delete user.phone;
        }
        try {
          console.log(user);
          await register(user);
          toast.success("Your account has been created.");
        } catch (error) {
          console.log(error);
          toast.error("Error occurs.");
        }
        navigate("/login");
      },
      validationSchema: Yup.object({
        firstName: Yup.string()
          .max(50, "First name has to be between 1-50 characters")
          .required("First name is required"),
        lastName: Yup.string()
          .max(50, "Last name has to be between 1-50 characters")
          .required("Last name is required"),
        phone: Yup.string().matches(
          /^\d{10}$/,
          "Please enter a valid phone number"
        ),
        email: Yup.string()
          .email("Please enter a valid email address.")
          .max(100, "Email is too long")
          .required("Email is required."),
        password: Yup.string()
          .required("Password is required.")
          .min(8, "The password should be at least 8 characters.")
          .max(100, "Password is too long"),
        confirmPassword: Yup.string()
          .required("Password not match.")
          .oneOf([Yup.ref("password")], "Passwords do not match"),
        aptOrSuite: Yup.string().max(50, "The apt/suite is too long"),
        streetAddress: Yup.string()
          .required("Street address is required")
          .max(100, "Street address is too long"),
        city: Yup.string()
          .required("City is required")
          .max(50, "City is too long"),
        province: Yup.string().oneOf(provinceList, "Please select a province"),
        postalCode: Yup.string()
          .matches(
            /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i,
            "Please enter a valid postal code"
          )
          .required("Postal code is required"),
      }),
    });

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="firstName">
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter first name"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.firstName && errors.firstName}
              />
              <p className="text-danger">
                {touched.firstName && errors.firstName
                  ? errors.firstName
                  : null}
              </p>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="lastName">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter last name"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.lastName && errors.lastName}
              />
              <p className="text-danger">
                {touched.lastName && errors.lastName ? errors.lastName : null}
              </p>
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            isInvalid={touched.email && errors.email}
          />
          <p className="text-danger">
            {touched.email && errors.email ? errors.email : null}
          </p>
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            isInvalid={touched.password && errors.password}
          />
          <p className="text-danger">
            {touched.password && errors.password ? errors.password : null}
          </p>
        </Form.Group>
        <Form.Group className="mb-3" controlId="confirmPassword">
          <Form.Label>Confirm password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm password"
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            isInvalid={touched.confirmPassword && errors.confirmPassword}
          />
          <p className="text-danger">
            {touched.confirmPassword && errors.confirmPassword
              ? errors.confirmPassword
              : null}
          </p>
        </Form.Group>
        <Form.Group className="mb-3" controlId="aptOrSuite">
          <Form.Label>Apt or Suite(Optional)</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter apt or Suite"
            name="aptOrSuite"
            value={values.aptOrSuite}
            onChange={handleChange}
            onBlur={handleBlur}
            isInvalid={touched.aptOrSuite && errors.aptOrSuite}
          />
          <p className="text-danger">
            {touched.aptOrSuite && errors.aptOrSuite ? errors.aptOrSuite : null}
          </p>
        </Form.Group>
        <Form.Group className="mb-3" controlId="streetAddress">
          <Form.Label>Street Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter street address"
            name="streetAddress"
            value={values.streetAddress}
            onChange={handleChange}
            onBlur={handleBlur}
            isInvalid={touched.streetAddress && errors.streetAddress}
          />
          <p className="text-danger">
            {touched.streetAddress && errors.streetAddress
              ? errors.streetAddress
              : null}
          </p>
        </Form.Group>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="city">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter city"
                name="city"
                value={values.city}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.city && errors.city}
              />
              <p className="text-danger">
                {touched.city && errors.city ? errors.city : null}
              </p>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group as={Col} controlId="province">
              <Form.Label>Province</Form.Label>
              <Form.Select
                name="province"
                value={values.province}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.province && errors.province}
              >
                <option>Select province</option>
                {provinceList.map((province) => (
                  <option key={province}>{province}</option>
                ))}
              </Form.Select>
              <p className="text-danger">
                {touched.province && errors.province ? errors.province : null}
              </p>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="postalCode">
              <Form.Label>Postal code</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter postal code"
                name="postalCode"
                value={values.postalCode}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.postalCode && errors.postalCode}
              />
              <p className="text-danger">
                {touched.postalCode && errors.postalCode
                  ? errors.postalCode
                  : null}
              </p>
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3" controlId="phone">
          <Form.Label>Phone(Optional)</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter phone number"
            name="phone"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            isInvalid={touched.phone && errors.phone}
          />
          <p className="text-danger">
            {touched.phone && errors.phone ? errors.phone : null}
          </p>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default RegisterForm;
