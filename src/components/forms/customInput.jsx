import React from "react";
import { Form } from "react-bootstrap";

const CustomInput = ({
  handleChange,
  handleBlur,
  errors,
  touched,
  label,
  path,
  values,
  props,
}) => {
  return (
    <div>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>{label}</Form.Label>
        <Form.Control
          {...props}
          value={values[path]}
          onChange={handleChange}
          onBlur={handleBlur}
          isInvalid={touched[path] && errors[path]}
        />
        {touched[path] && errors[path] ? (
          <Form.Text className="text-danger">{errors[path]}</Form.Text>
        ) : null}
      </Form.Group>
    </div>
  );
};

export default CustomInput;
