import React, { Component } from 'react';
import CustomButton from './../CustomButton/CustomButton.jsx';

import Stepper from 'react-stepper-horizontal';

import { ProjectDetails, ProjectDescription } from './ProjectForms.jsx';

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
                title: 'Majormilestones',
                onClick: (e) => {
                    e.preventDefault()
                    console.log('onClick', 4)
                },
            },],
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
        const buttonStyle = { background: '#E0E0E0', width: 200, padding: 16, textAlign: 'center', margin: '0 auto', marginTop: 32 };

        return (
            <div>
                <Stepper steps={steps} activeStep={currentStep} />
                {currentStep === 0 && (
                    <ProjectDetails />
                )}
                {currentStep === 1 && (
                    <ProjectDescription />
                )}
                <CustomButton bsStyle="info" fill type="button" className="ml-1" onClick={this.onClickPrevious} >Back</CustomButton>
                <CustomButton bsStyle="info" fill type="button" onClick={this.onClickNext} >Next</CustomButton>
            </div>
        );
    }
};

export default NewProject;