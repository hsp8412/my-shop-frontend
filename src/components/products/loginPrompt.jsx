import React from 'react';
import {Button, Modal} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {pageActions} from "../../store/page-slice";

const LoginPrompt = () => {
    const show = useSelector((state) => state.page.showLoginPrompt);
    const dispatch = useDispatch();
    const handleClose = () => {
        dispatch(pageActions.setShowLoginPrompt(false));
    }
    const handleLogin = () =>{
        dispatch(pageActions.setShowLoginPrompt(false));
        dispatch(pageActions.changePage("Login"));
        window.location = "/login";
    }
    return (
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Login required</Modal.Title>
                </Modal.Header>
                <Modal.Body>Please login before adding items to the cart.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleLogin}>
                        Login
                    </Button>
                </Modal.Footer>
            </Modal>
    );
};

export default LoginPrompt;
