import React from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { useFormik } from "formik";
import {
  getUserInfo,
  updateAddress,
  updateUserInfo,
} from "../../service/userService";
import { authActions } from "../../store/auth-slice";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";

const EditAddressForm = ({ show, handleClose }) => {
  const dispatch = useDispatch();
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

  const schema = Yup.object({
    streetAddress: Yup.string()
      .required("Street address is required")
      .max(100, "Street address is too long"),
    aptOrSuite: Yup.string().max(50, "Apt/suite is too long"),
    city: Yup.string().required("City is required").max(50, "City is too long"),
    province: Yup.string().oneOf(provinceList, "Please select a valid state"),
    postalCode: Yup.string()
      .matches(
        /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i,
        "Please enter a valid postal code"
      )
      .required("Postal code is required"),
  });

  const {
    handleChange,
    handleBlur,
    errors,
    values,
    touched,
    setValues,
    handleSubmit,
  } = useFormik({
    initialValues: {
      streetAddress: "",
      aptOrSuite: "",
      city: "",
      province: "",
      postalCode: "",
    },
    validationSchema: schema,
    onSubmit: async (values, { resetForm }) => {
      let data = { ...values };
      try {
        if (data.aptOrSuite === "") {
          delete data.aptOrSuite;
        }
        await updateAddress({ ...data });
        console.log(data);
        handleClose();
        const userInfo = await getUserInfo();
        dispatch(authActions.resetUserInfo(userInfo));
        window.location.reload();
      } catch (e) {
        toast.error(e.message);
      }
    },
  });

  const input = [
    {
      name: "streetAddress",
      type: "text",
      path: "firstName",
      label: "First Name",
    },
    {
      name: "lastName",
      type: "text",
      path: "lastName",
      label: "Last Name",
    },
    {
      name: "phone",
      type: "text",
      path: "phone",
      label: "Phone",
    },
  ];

  useEffect(() => {
    const fetchUser = async () => {
      let { streetAddress, aptOrSuite, province, city, postalCode } =
        await getUserInfo();
      if (aptOrSuite == null) {
        aptOrSuite = "";
      }
      await setValues({
        streetAddress,
        aptOrSuite,
        province,
        city,
        postalCode,
      });
    };
    fetchUser();
  }, []);

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Address</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Row>
              <Form.Group className="mb-3" controlId="aptOrSuite">
                <Form.Label>Apt or Suite(Optional)</Form.Label>
                <Form.Control
                  type="text"
                  name="aptOrSuite"
                  value={values.aptOrSuite}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.aptOrSuite && errors.aptOrSuite ? (
                  <Form.Text className="text-danger">
                    {errors.aptOrSuite}
                  </Form.Text>
                ) : null}
              </Form.Group>
            </Row>
            <Row>
              <Form.Group className="mb-3" controlId="streetAddress">
                <Form.Label>Street Address</Form.Label>
                <Form.Control
                  type="text"
                  name="streetAddress"
                  value={values.streetAddress}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.streetAddress && errors.streetAddress ? (
                  <Form.Text className="text-danger">
                    {errors.streetAddress}
                  </Form.Text>
                ) : null}
              </Form.Group>
            </Row>
            <Row>
              <Col xs={6}>
                <Form.Group className="mb-3" controlId="city">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type="text"
                    name="city"
                    value={values.city}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.city && errors.city ? (
                    <Form.Text className="text-danger">{errors.city}</Form.Text>
                  ) : null}
                </Form.Group>
              </Col>
              <Col xs={6}>
                <Form.Group as={Col} controlId="province">
                  <Form.Label>Province</Form.Label>
                  <Form.Select
                    name="province"
                    value={values.province}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option>Select province</option>
                    {provinceList.map((province) => (
                      <option key={province}>{province}</option>
                    ))}
                  </Form.Select>
                  {touched.province && errors.province ? (
                    <Form.Text className="text-danger">
                      {errors.province}
                    </Form.Text>
                  ) : null}
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Form.Group className="mb-3" controlId="postalCode">
                <Form.Label>Postal Code</Form.Label>
                <Form.Control
                  type="text"
                  name="postalCode"
                  value={values.postalCode}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.postalCode && errors.postalCode ? (
                  <Form.Text className="text-danger">
                    {errors.postalCode}
                  </Form.Text>
                ) : null}
              </Form.Group>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};

export default EditAddressForm;
