import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import CustomInput from "./customInput";
import { useEffect } from "react";
import { getUserInfo, updateUserInfo } from "../../service/userService";
import { Button, Form, Modal } from "react-bootstrap";
import { toast } from "react-toastify";

const EditUserInfoForm = ({ handleClose, show }) => {
  const schema = Yup.object({
    firstName: Yup.string()
      .min(1, "First name has to be between 1-50 characters")
      .max(50, "First name has to be between 1-50 characters")
      .required("First name is required"),
    lastName: Yup.string()
      .min(1, "Last name has to be between 1-50 characters")
      .max(50, "Last name has to be between 1-50 characters")
      .required("Last name is required"),
    phone: Yup.string()
      .max(10, "Exactly ten characters required")
      .min(10, "Exactly ten characters required"),
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
      firstName: "",
      lastName: "",
      phone: "",
    },
    validationSchema: schema,
    onSubmit: async (values, { resetForm }) => {
      try {
        await updateUserInfo({ ...values });
        console.log(values);
        handleClose();
        window.location.reload();
      } catch (e) {
        toast.error(e.message);
      }
    },
  });

  const input = [
    {
      name: "firstName",
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
      const { firstName, lastName, phone } = await getUserInfo();
      await setValues({
        firstName,
        lastName,
        phone,
      });
    };
    fetchUser();
  }, []);

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
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

export default EditUserInfoForm;
