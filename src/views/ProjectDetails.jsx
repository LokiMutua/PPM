import React from "react";
import { useParams } from 'react-router-dom';

import { Grid, Row, Col, Table } from "react-bootstrap";
import Card from "components/Card/Card.jsx";
import {
  project_details,
  project_desc,
  finances, timelines,
  major_milestones_headers,
  major_milestones,
  challenges,
  challenges_headers
} from "./../variables/Data.jsx";
class ProjectDetails extends React.Component {
  // let { id } = useParams();
  generate_key_value_data = (data, heading) => {
    return (
      <div className="card">
      <table className="table borderless bg-light">
        <thead className="mx-auto">
          <tr>
            <th scope="col" ><b>{heading}</b></th>
            <th scope="col"><b><i className="fa pe-7s-note pull-right" /></b></th>
          </tr>
        </thead>
        <tbody>
          {
            Object.keys(data).map((key, index) => (
              <tr key={index}>
                <td style={{ borderTop: 'none' }}>{data[key][0]}</td>
                <td style={{ borderTop: 'none' }}><b>{data[key][1]}</b></td>
              </tr>
            ))
          }
        </tbody></table>
        </div>
    )
  }
  render() {

    return (
      <>
        <Grid>
          <h3 className="center">Project Details</h3>
          <Row className="show-grid">
            <Col xs={12} md={6}>
              {this.generate_key_value_data(project_details, "Project Details")}
            </Col>
            <Col xs={12} md={6}>
              {this.generate_key_value_data(finances, "Finances")}
            </Col>
          </Row>
          <Row className="show-grid">
            <Col xs={12} md={6}>
              {this.generate_key_value_data(project_desc, "Project Description")}
            </Col>
            <Col xs={12} md={6}>
              {this.generate_key_value_data(timelines, "Timelines")}
            </Col>

          </Row>
          <Row>
            <Col md={6}>
              <Card
                title="Major Milestones"
                //category="Here is a subtitle for this table"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                        {major_milestones_headers.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {major_milestones.map((prop, key) => {
                        let id = prop[0];
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
            <Col md={6}>
              <Card
                title="Challenges"
                //category="Here is a subtitle for this table"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                        {challenges_headers.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {challenges.map((prop, key) => {
                        // let id = prop[0];
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
      </>

    )
  }
};

export default ProjectDetails;