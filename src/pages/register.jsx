import React from "react";
import RegisterForm from "../components/auth/registerForm";
import { Card } from "react-bootstrap";

const Register = () => {
  return (
    <div className="d-flex justify-content-center">
      <Card className="my-4" style={{ width: "40rem" }}>
        <Card.Body>
          <h2 className="mb-3">Register</h2>
          <RegisterForm />
        </Card.Body>
      </Card>
    </div>
  );
};

export default Register;
