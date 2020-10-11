import React, { Component } from "react";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";
import { Grid, Row, Col, Table } from "react-bootstrap";

import Card from "components/Card/Card.jsx";
import { trProjects, tdProjects } from "variables/Data.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import NewForm from "components/Modal/FormModal.jsx";
import ProjectDetails from "./ProjectDetails.jsx"
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';


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
        const products = [
            
            {   
                id:1,
                project: 'Geothermal Exploration and Development (105 MW Geothermal)',
                implementing_agency: 'Bright',
                technology: 'Central finish thousand policy.',
                project_output:'Enabling technologies',
                indicator:1,
                county: 'Garissa',
                consultant: 'Douglas Bond',
                contractor:'Jacob Herrera',
                eastings:'-43.886120',
                northings: '-57.553383',
                project_cost:'Ksh 8319'
            },
          {
            id:2,
            project:'Construction of a substation',
            implementing_agency: 'Taylor-Dunn',
            technology: 'Discover keep item nothing debate remember whatever.',
            project_output:'Geothermal',
            indicator: 1,
            county:'Garissa',
            consultant:'Monica Velasquez',
            contractor:'Ms. Kristen Archer',
            eastings: '-83.021608',
            northings:'44.232281',
            project_cost:'Ksh 4019'
          },
          {
            id:2,
            project: 'Construction of geothermal power plant',
            implementing_agency:'Jackson, Holt and George',
            technology:'Send speech must',
            project_output:'Hydropower',
            indicator:1,
            county:'Garissa',
            consultant:'Thomas Cruz',
            contractor:'Jason Richardson',
            eastings:'-11.867488',
            northings:'-152.242839',
            project_cost:'Ksh 6044'
          }
            
            ]
           
        
          const columns = [
            { dataField: 'id', text: 'ID', sort: true },
            { dataField: 'project', text: 'Project' , sort: true},
            { dataField: 'implementing_agency', text: 'Impelenting Agency' , sort: true},
            { dataField: 'project_output', text: 'Project Output', sort: true },
            { dataField: 'technology', text: 'Technology', sort: true },
            { dataField: 'indicator', text: 'Indicator', sort: true },
            { dataField: 'county', text: 'County', sort: true },
            { dataField: 'consultant', text: 'Consultant', sort: true },
            { dataField: 'contractor', text: 'Contractor', sort: true },
            { dataField: 'eastings', text: 'Eastings', sort: true },
            { dataField: 'northings', text: 'Nothings', sort: true },
            { dataField: 'project_cost', text: 'Project Cost', sort: true },
            { dataField: 'view', text: 'View'}
          ];

          const defaultSorted = [{
            dataField: 'id',
            order: 'desc'
          }];

          const pagination = paginationFactory({
            page: 1,
            sizePerPage: 10,
            lastPageText: '>>',
            firstPageText: '<<',
            nextPageText: '>',
            prePageText: '<',
            showTotal: true,
            alwaysShowAllBtns: true,
            onPageChange: function (page, sizePerPage) {
              console.log('page', page);
              console.log('sizePerPage', sizePerPage);
            },
            onSizePerPageChange: function (page, sizePerPage) {
              console.log('page', page);
              console.log('sizePerPage', sizePerPage);
            }
          });
          const { SearchBar, ClearSearchButton } = Search;

        return (
            <div classproject="content">
                <NewForm show={show} handleClick={this.handleClick}  />
                <Grid fluid>
                    <Row>
                        <Col md={12} classproject="mb-1">
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
                                    <ToolkitProvider
                                    bootstrap4
                                    keyField='id'
                                    data={products}
                                    columns={columns}
                                    search
                                  >
                                    {
                                      props => (
                                        <div>
                                          <SearchBar {...props.searchProps} />
                                          <ClearSearchButton {...props.searchProps} />
                                          <hr />
                                          <BootstrapTable
                                            defaultSorted={defaultSorted}
                                            pagination={pagination}
                                            {...props.baseProps}
                                            striped
                                            hover
                                            condensed
                                            bordered={ false }
                                            />
                                          
                                        </div>
                                      )
                                    }
                                  </ToolkitProvider>
                                    // <Table striped hover>
                                    //     <thead>
                                    //         <tr>
                                    //             {/* {trProjects.slice(0, 10).map((prop, key) => {
                                    //                 return <th key={key}>{prop}</th>;
                                    //             })} */}
                                    //         </tr>
                                    //     </thead>
                                    //     <tbody>
                                    //         {/* {tdProjects.slice(0, 6).map((prop, key) => {
                                    //             let url = '/admin/projects/' + prop[0];
                                    //             return (
                                    //                 <tr key={key}>
                                    //                     {prop.slice(0, 10).map((prop, key) => {
                                    //                         return <td key={key}>{prop}</td>;
                                    //                     })}
                                    //                     <td><Link to={url} classproject="btn btn-info" >View</Link></td>
                                    //                 </tr>
                                    //             );
                                    //         })} */}
                                    //     </tbody>
                                    // </Table>
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