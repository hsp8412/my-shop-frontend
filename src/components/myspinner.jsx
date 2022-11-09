import React from "react";
import { Spinner } from "react-bootstrap";

const MySpinner = () => {
  return (
    <div>
      <Spinner className="my-4" animation="border" variant="primary" />
    </div>
  );
};

export default MySpinner;
