import React, { Component, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { register } from "../../service/authService";

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
  const formik = useFormik({
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
      } catch (error) {
        console.log(error);
      }
      navigate("/login");
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(50, "The first name is too long")
        .required("Firstname is required"),
      lastName: Yup.string()
        .max(50, "The last name is too long")
        .required("Lastname is required"),
      phone: Yup.string()
        .max(10, "Ten characters required")
        .min(10, "Ten characters required"),
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
      province: Yup.string().oneOf(provinceList, "Please select a valid state"),
      postalCode: Yup.string()
        .min(6, "Please enter a valid postal code")
        .max(6, "Please enter a valid postal code"),
    }),
    validateOnChange: true,
  });

  return (
    <Container>
      <Form>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="firstName">
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter first name"
                name="firstName"
                value={formik.values.firstName}
                onChange={formik.handleChange}
              />
              <p className="text-danger">
                {formik.errors.firstName ? formik.errors.firstName : null}
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
                value={formik.values.lastName}
                onChange={formik.handleChange}
              />
              <p className="text-danger">
                {formik.errors.lastName ? formik.errors.lastName : null}
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
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          <p className="text-danger">
            {formik.errors.email ? formik.errors.email : null}
          </p>
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          <p className="text-danger">
            {formik.errors.password ? formik.errors.password : null}
          </p>
        </Form.Group>
        <Form.Group className="mb-3" controlId="confirmPassword">
          <Form.Label>Confirm password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm password"
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
          />
          <p className="text-danger">
            {formik.errors.confirmPassword
              ? formik.errors.confirmPassword
              : null}
          </p>
        </Form.Group>
        <Form.Group className="mb-3" controlId="aptOrSuite">
          <Form.Label>Apt or Suite(Optional)</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter apt or Suite"
            name="aptOrSuite"
            value={formik.values.aptOrSuite}
            onChange={formik.handleChange}
          />
          <p className="text-danger">
            {formik.errors.aptOrSuite ? formik.errors.aptOrSuite : null}
          </p>
        </Form.Group>
        <Form.Group className="mb-3" controlId="streetAddress">
          <Form.Label>Street Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter street address"
            name="streetAddress"
            value={formik.values.streetAddress}
            onChange={formik.handleChange}
          />
          <p className="text-danger">
            {formik.errors.streetAddress ? formik.errors.streetAddress : null}
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
                value={formik.values.city}
                onChange={formik.handleChange}
              />
              <p className="text-danger">
                {formik.errors.city ? formik.errors.city : null}
              </p>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group as={Col} controlId="province">
              <Form.Label>Province</Form.Label>
              <Form.Select
                name="province"
                value={formik.values.province}
                onChange={formik.handleChange}
              >
                <option>Select province</option>
                {provinceList.map((province) => (
                  <option key={province}>{province}</option>
                ))}
              </Form.Select>
              <p className="text-danger">
                {formik.errors.province ? formik.errors.province : null}
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
                value={formik.values.postalCode}
                onChange={formik.handleChange}
              />
              <p className="text-danger">
                {formik.errors.postalCode ? formik.errors.postalCode : null}
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
            value={formik.values.phone}
            onChange={formik.handleChange}
          />
          <p className="text-danger">
            {formik.errors.phone ? formik.errors.phone : null}
          </p>
        </Form.Group>
      </Form>
      <Button variant="primary" type="submit" onClick={formik.handleSubmit}>
        Submit
      </Button>
    </Container>
  );
};

export default RegisterForm;
