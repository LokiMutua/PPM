import React from 'react';
import { project_details, project_desc } from './../../variables/Data.jsx';
import Card from 'components/Card/Card.jsx';
import FormInputs from './../FormInputs/FormInputs.jsx';

export const ProjectDetails = props => {
    return (<Card
        title="Edit Profile"
        content={
            <form>
                <FormInputs
                    ncols={["col-md-5", "col-md-3", "col-md-4"]}
                    properties={[
                        {
                            label: project_details["project"][0],
                            type: "text",
                            bsClass: "form-control",
                            placeholder: project_details["project"][1]
                        },
                        {
                            label: project_details["sub_project"][0],
                            type: "text",
                            bsClass: "form-control",
                            placeholder: project_details["sub_project"][1],
                        },
                        {
                            label: project_details["implementing_agency"][0],
                            type: "text",
                            bsClass: "form-control",
                            placeholder: project_details["implementing_agency"][1],
                        }
                    ]}
                />
                <FormInputs
                    ncols={["col-md-5", "col-md-3", "col-md-4"]}
                    properties={[
                        {
                            label: project_details["ouput"][0],
                            type: "text",
                            bsClass: "form-control",
                            placeholder: project_details["ouput"][1],
                        },
                        {
                            label: project_details["technology"][0],
                            type: "email",
                            bsClass: "form-control",
                            placeholder: project_details["technology"][1]
                        },
                        {
                            label: project_details["fit_non"][0],
                            type: "text",
                            bsClass: "form-control",
                            placeholder: project_details["fit_non"][1]
                        }
                    ]}
                />
                <FormInputs
                    ncols={["col-md-5", "col-md-3"]}
                    properties={[
                        {
                            label: project_details["county"][0],
                            type: "email",
                            bsClass: "form-control",
                            placeholder: project_details["county"][1]
                        }, {
                            label: project_details["constituency"][0],
                            type: "text",
                            bsClass: "form-control",
                            placeholder: project_details["constituency"][1]
                        }
                    ]}
                />
            </form>}
    />)
}

export const ProjectDescription = props => {
    return (<Card
        title="Edit Profile"
        content={
            <form>
                <FormInputs
                    ncols={["col-md-5", "col-md-3", "col-md-4"]}
                    properties={[
                        {
                            label: project_desc["project_location"][0],
                            type: "text",
                            bsClass: "form-control",
                            placeholder: project_desc["project_location"][1]
                        },
                        {
                            label: project_desc["scope_description"][0],
                            type: "text",
                            bsClass: "form-control",
                            placeholder: project_desc["scope_description"][1],
                        },
                        {
                            label: project_desc["benefit"][0],
                            type: "text",
                            bsClass: "form-control",
                            placeholder: project_desc["benefit"][1],
                        }
                    ]}
                />
                <FormInputs
                    ncols={["col-md-5", "col-md-3", "col-md-4"]}
                    properties={[
                        {
                            label: project_desc["finciers"][0],
                            type: "text",
                            bsClass: "form-control",
                            placeholder: project_desc["finciers"][1],
                        },
                        {
                            label: project_desc["consultant"][0],
                            type: "email",
                            bsClass: "form-control",
                            placeholder: project_desc["consultant"][1]
                        },
                        {
                            label: project_desc["contractor"][0],
                            type: "text",
                            bsClass: "form-control",
                            placeholder: project_desc["contractor"][1]
                        }
                    ]}
                />
            </form>}
    />)
}