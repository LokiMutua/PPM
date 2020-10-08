import React, { Component } from 'react';
import CustomButton from './../CustomButton/CustomButton.jsx';

import Stepper from 'react-stepper-horizontal';
import ProjectStore from './../../store/Store.js';

import {
    ProjectDetails,
    ProjectDescription,
    Finances,
    Timelines,
    Finish
} from './ProjectForms.jsx';
import { inject, observer } from "mobx-react";
import { withRouter } from "react-router";

class NewProject extends Component {
    constructor() {
        super();
        this.state = {
            steps: [{
                title: 'Project Details',
                onClick: (e) => {
                    e.preventDefault()
                    console.log('onClick', 1)
                }
            }, {
                title: 'Project Description',
                onClick: (e) => {
                    e.preventDefault()
                    console.log('onClick', 2)
                }
            }, {
                title: 'Finances',
                onClick: (e) => {
                    e.preventDefault()
                    console.log('onClick', 3)
                }
            }, {
                title: 'Timelines',
                onClick: (e) => {
                    e.preventDefault()
                    console.log('onClick', 4)
                }
            }, {
                title: 'Finish',
                onClick: (e) => {
                    e.preventDefault()
                    console.log('onClick', 5)
                }
            }],
            currentStep: 0,
        };
    }
    onClickNext = () => {
        const { steps, currentStep } = this.state;
        if (currentStep >= steps.length) {
            return;
        }
        this.setState({
            currentStep: currentStep + 1,
        });
    }
    onClickPrevious = () => {
        const { steps, currentStep } = this.state;
        if (currentStep < 1) {
            return;
        }
        this.setState({
            currentStep: currentStep - 1,
        });
    }

    render() {
        const { steps, currentStep } = this.state;
        let { project, sub_project, implenting_agancy,
            project_output, project_technology, project_fit_non,
            project_county, project_constituency } = this.props.ProjectStore.projectDetails.project_details;
        let detailsDict = {
            "project": project, "sub_project": sub_project, "implenting_agancy": implenting_agancy,
            "project_output": project_output, "project_technology": project_technology, "project_fit_non": project_fit_non,
            "project_county": project_county, "project_constituency": project_constituency
        }
        const buttonStyle = { background: '#E0E0E0', width: 200, padding: 16, textAlign: 'center', margin: '0 auto', marginTop: 32 };

        return (
            <div>
                <Stepper steps={steps} activeStep={currentStep} />
                <form>
                    {currentStep === 0 && (
                        <ProjectDetails
                            // detailsDict={detailsDict}
                            projectStore={ProjectStore}
                        />
                    )}
                    {currentStep === 1 && (
                        <ProjectDescription
                            projectStore={ProjectStore}
                        />
                    )}
                    {currentStep === 2 && (
                        <Finances
                            projectStore={ProjectStore}
                        />
                    )}
                    {currentStep === 3 && (
                        <Timelines
                            projectStore={ProjectStore}

                        />
                    )}
                    {currentStep == 4 && (
                        <Finish />
                    )}
                    {currentStep > 0 && (
                        <CustomButton bsStyle="info" fill type="button" className="ml-1" onClick={this.onClickPrevious} >Back</CustomButton>
                    )}
                    {currentStep < steps.length - 1 && (
                        <CustomButton bsStyle="info" fill type="button" className='pull-right' onClick={this.onClickNext} >Next</CustomButton>
                    )}
                </form>
            </div>
        );
    }
};

export default withRouter(inject("ProjectStore")(observer(NewProject)));