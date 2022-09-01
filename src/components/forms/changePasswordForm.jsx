import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { resetPassword } from "../../service/userService";
import { toast } from "react-toastify";
import { Button, Form, Modal } from "react-bootstrap";
import CustomInput from "./customInput";
import { logout } from "../../service/authService";
import { useDispatch, useSelector } from "react-redux";

const ChangePasswordForm = ({ show, handleClose }) => {
  const dispatch = useDispatch();
  const itemsInCart = useSelector((state) => state.cart.itemList);
  const schema = Yup.object({
    currentPassword: Yup.string()
      .required("Current password is required")
      .min(8, "Current password should be at least 8 characters")
      .max(100, "Current Password is too long"),
    password: Yup.string()
      .required("New Password is required")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "The new password should be at least 8 characters, and contains at least 1 letter, 1 number and 1 special character"
      )
      .max(100, "Password is too long"),
    confirmPassword: Yup.string()
      .required("Please reenter the new password")
      .oneOf([Yup.ref("password")], "Passwords do not match"),
  });

  const { handleChange, handleBlur, errors, values, touched, handleSubmit } =
    useFormik({
      initialValues: {
        currentPassword: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: schema,
      onSubmit: async ({ currentPassword, password }, { resetForm }) => {
        try {
          await resetPassword({ currentPassword, password });
          await logout(dispatch, itemsInCart);
          handleClose();
          alert(
            "Your password has been successfully reset. Please login again."
          );
          window.location = "/login";
        } catch (e) {
          toast.error(e.message);
        }
      },
    });

  const input = [
    {
      name: "currentPassword",
      type: "password",
      path: "currentPassword",
      label: "Current Password",
    },
    {
      name: "password",
      type: "password",
      path: "password",
      label: "New Password",
    },
    {
      name: "confirmPassword",
      type: "password",
      path: "confirmPassword",
      label: "Confirm Password",
    },
  ];

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Reset Password</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            {input.map(({ label, path, ...props }) => (
              <CustomInput
                key={path}
                label={label}
                path={path}
                props={props}
                errors={errors}
                handleBlur={handleBlur}
                handleChange={handleChange}
                touched={touched}
                values={values}
              />
            ))}
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

export default ChangePasswordForm;
