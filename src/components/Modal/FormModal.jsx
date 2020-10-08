import React from "react";
import Modal from 'react-bootstrap/lib/Modal.js';
import Projects from "views/Projects.jsx";
import Button from "../CustomButton/CustomButton.jsx";
import NewProject from "components/Project/NewProject.jsx";


function NewForm(props) {
    return (
        <Modal
            show={props.show}
            onHide={props.handleClick}
            backdrop="static"
            keyboard={false}
            bsSize='lg'
        >
            <Modal.Header closeButton>
                <Modal.Title>Create a new Project</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <NewProject />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClick}>
                    Close
            </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default NewForm;