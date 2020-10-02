import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";

import Card from "components/Card/Card.jsx";
import { trProjects, tdProjects } from "variables/Data.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import NewForm from "components/Modal/FormModal.jsx";

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { show: false }
    }

    handleClick = () => {
        this.setState((state)=> {
            return {show: !state.show};
        })
    }

    render() {
        const {show} = this.state;

        return (
            <div className="content">
                <NewForm show={show} handleClick={this.handleClick} />
                <Grid fluid>
                    <Row>
                        <Col md={12} className="mb-1">
                            <Button bsStyle="info" fill type="button" onClick={this.handleClick}>
                                Create Project
                    </Button>
                        </Col>
                        <Col md={12}>
                            <Card
                                title="Projects"
                                //category="Here is a subtitle for this table"
                                ctTableFullWidth
                                ctTableResponsive
                                content={
                                    <Table striped hover>
                                        <thead>
                                            <tr>
                                                {trProjects.map((prop, key) => {
                                                    return <th key={key}>{prop}</th>;
                                                })}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {tdProjects.map((prop, key) => {
                                                let id = prop[0];
                                                return (
                                                    <tr key={key}>
                                                        {prop.map((prop, key) => {
                                                            return <td key={key}>{prop}</td>;
                                                        })}
                                                        <td><Button data-id={id} onClick={this.handleClick}>Edit</Button></td>
                                                        <td><Button data-id={id} >Delete</Button></td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </Table>
                                }
                            />
                        </Col>

                        <Col md={12}>
                            <Card
                                plain
                                title="Completed Projects"
                                // category="Here is a subtitle for this table"
                                ctTableFullWidth
                                ctTableResponsive
                                content={
                                    <Table hover>
                                        <thead>
                                            <tr>
                                                {trProjects.map((prop, key) => {
                                                    return <th key={key}>{prop}</th>;
                                                })}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {tdProjects.map((prop, key) => {
                                                return (
                                                    <tr key={key}>
                                                        {prop.map((prop, key) => {
                                                            return <td key={key}>{prop}</td>;
                                                        })}
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </Table>
                                }
                            />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Projects;