import React from "react";
import Modal from 'react-bootstrap/lib/Modal.js';
import Projects from "views/Projects.jsx";
import Button from "../CustomButton/CustomButton.jsx";
import {
    Grid,
    Row,
    Col,
    FormGroup,
    ControlLabel,
    FormControl
} from "react-bootstrap";
import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import { UserCard } from "components/UserCard/UserCard.jsx";
import NewProject from "components/Project/NewProject.jsx";

const ProjectForm = () => {
    return (
        <div className="content">
            <Grid fluid>
                <Row>
                    <Col md={12}>
                        <Card
                            title="Edit Profile"
                            content={
                                <form>
                                    <FormInputs
                                        ncols={["col-md-5", "col-md-3", "col-md-4"]}
                                        properties={[
                                            {
                                                label: "Name",
                                                type: "text",
                                                bsClass: "form-control",
                                                placeholder: "project_name",
                                            },
                                            {
                                                label: "Company",
                                                type: "text",
                                                bsClass: "form-control",
                                                placeholder: "Company",
                                            },
                                            {
                                                label: "Technology",
                                                type: "text",
                                                bsClass: "form-control",
                                                placeholder: "Hydropower"
                                            }
                                        ]}
                                    />
                                    <FormInputs
                                        ncols={["col-md-6", "col-md-6"]}
                                        properties={[
                                            {
                                                label: "County",
                                                type: "text",
                                                bsClass: "form-control",
                                                placeholder: "e.g Nairobi",
                                            },
                                            {
                                                label: "Contrator",
                                                type: "text",
                                                bsClass: "form-control",
                                                placeholder: "Last name",
                                            }
                                        ]}
                                    />
                                    <FormInputs
                                        ncols={["col-md-12"]}
                                        properties={[
                                            {
                                                label: "Adress",
                                                type: "text",
                                                bsClass: "form-control",
                                                placeholder: "Home Adress",
                                            }
                                        ]}
                                    />
                                    <FormInputs
                                        ncols={["col-md-4", "col-md-4", "col-md-4"]}
                                        properties={[
                                            {
                                                label: "City",
                                                type: "text",
                                                bsClass: "form-control",
                                                placeholder: "City",
                                            },
                                            {
                                                label: "Country",
                                                type: "text",
                                                bsClass: "form-control",
                                                placeholder: "Country",
                                            },
                                            {
                                                label: "Postal Code",
                                                type: "number",
                                                bsClass: "form-control",
                                                placeholder: "ZIP Code"
                                            }
                                        ]}
                                    />

                                    <Row>
                                        <Col md={12}>
                                            <FormGroup controlId="formControlsTextarea">
                                                <ControlLabel>About Me</ControlLabel>
                                                <FormControl
                                                    rows="5"
                                                    componentClass="textarea"
                                                    bsClass="form-control"
                                                    placeholder="Here can be your description"
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <div className="clearfix" />
                                </form>
                            }
                        />
                    </Col>
                </Row>
            </Grid>
        </div>)
}

function NewForm(props) {
    return (
        <Modal
            show={props.show}
            onHide={props.handleClick}
            backdrop="static"
            keyboard={false}
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
                <Button variant="primary">Create</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default NewForm;