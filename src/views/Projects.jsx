import React, { Component } from "react";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";
import { Grid, Row, Col, Table } from "react-bootstrap";

import Card from "components/Card/Card.jsx";
import { trProjects, tdProjects } from "variables/Data.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import NewForm from "components/Modal/FormModal.jsx";
import ProjectDetails from "./ProjectDetails.jsx"

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { show: false }
    }

    handleClick = () => {
        this.setState((state) => {
            return { show: !state.show };
        })
    }

    render() {
        const { show } = this.state;

        return (
            <div className="content">
                <NewForm show={show} handleClick={this.handleClick}  />
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
                                                {trProjects.slice(0, 10).map((prop, key) => {
                                                    return <th key={key}>{prop}</th>;
                                                })}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {tdProjects.slice(0, 6).map((prop, key) => {
                                                let url = '/admin/projects/' + prop[0];
                                                return (
                                                    <tr key={key}>
                                                        {prop.slice(0, 10).map((prop, key) => {
                                                            return <td key={key}>{prop}</td>;
                                                        })}
                                                        <td><Link to={url} className="btn btn-info" >View</Link></td>
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
                                                {trProjects.slice(0, 10).map((prop, key) => {
                                                    return <th key={key}>{prop}</th>;
                                                })}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {tdProjects.slice(6, 9).map((prop, key) => {
                                                return (
                                                    <tr key={key}>
                                                        {prop.slice(0, 10).map((prop, key) => {
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
};

const ProjectsRoutes = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/admin/projects" >
                    <Projects />
                </Route>
                <Route exact path="/admin/projects/:id">
                    <ProjectDetails />
                </Route>
            </Switch>
        </div>
    )
}

export default ProjectsRoutes;