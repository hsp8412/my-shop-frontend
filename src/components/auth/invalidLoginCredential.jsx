import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth-slice";

const InvalidLoginCredential = ({ show }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <Modal
        show={show}
        onHide={() => dispatch(authActions.setShowInvalid(false))}
      >
        <Modal.Header closeButton>
          <Modal.Title>Invalid Credential</Modal.Title>
        </Modal.Header>
        <Modal.Body>Invalid email or password.</Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={dispatch(authActions.setShowInvalid(false))}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default InvalidLoginCredential;
