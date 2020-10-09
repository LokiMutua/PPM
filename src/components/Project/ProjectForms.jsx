import React from 'react';
import {
    project_details,
    project_desc,
    timelines,
    finances,
    implementing_agency,
    fit_options,
    counties
} from './../../variables/Data.jsx';
import Card from 'components/Card/Card.jsx';
import FormInputs from './../FormInputs/FormInputs.jsx';
import CustomButton from 'components/CustomButton/CustomButton.jsx';
import { observer } from "mobx-react"

let countiesList = [];
for (var key in counties) {
    // check if the property/key is defined in the object itself, not in parent
    if (counties.hasOwnProperty(key)) {
        countiesList.push(key)
    }
}
export const ProjectDetails = observer(({ projectStore }) => {
    let projectDetails = projectStore.ProjectStore.projectDetails.project_details;
    return (<Card
        title="Project Details"
        content={
            <div>
                <FormInputs
                    ncols={["col-md-4", "col-md-4", "col-md-4"]}
                    properties={[
                        {
                            label: project_details["project"][0],
                            type: "text",
                            bsClass: "form-control",
                            value: projectDetails.project,
                            placeholder: project_details["project"][1],
                            onChange: (e => projectDetails.project = e.target.value),

                        },
                        {
                            label: project_details["sub_project"][0],
                            type: "text",
                            bsClass: "form-control",
                            placeholder: project_details["sub_project"][1],
                            value: projectDetails.sub_project,
                            onChange: (e => projectDetails.sub_project = e.target.value),
                        },
                        {
                            label: project_details["implementing_agency"][0],
                            options: implementing_agency,
                            componentClass: "select",
                            bsClass: "form-control",
                            placeholder: project_details["implementing_agency"][1],
                            value: projectDetails.implementing_agency,
                            onChange: (e => projectDetails.implementing_agency = e.target.value),
                        }
                    ]}
                />
                <FormInputs
                    ncols={["col-md-4", "col-md-4", "col-md-4"]}
                    properties={[
                        {
                            label: project_details["county"][0],
                            options: countiesList,
                            componentClass: "select",
                            bsClass: "form-control",
                            placeholder: project_details["county"][1],
                            value: projectDetails.project_county,
                            onChange: (e => projectDetails.project_county = e.target.value),
                        }, {
                            label: project_details["constituency"][0],
                            type: "text",
                            bsClass: "form-control",
                            placeholder: project_details["constituency"][1],
                            value: projectDetails.project_constituency,
                            onChange: (e => projectDetails.project_constituency = e.target.value),
                        },

                        {
                            label: project_details["fit_non"][0],
                            options: fit_options,
                            componentClass: "select",
                            bsClass: "form-control",
                            placeholder: project_details["fit_non"][1],
                            value: projectDetails.project_fit_non,
                            onChange: (e => projectDetails.project_fit_non = e.target.value),
                        }
                    ]}
                />
                <FormInputs
                    ncols={["col-md-12"]}
                    properties={[
                        {
                            label: project_details["technology"][0],
                            type: "email",
                            bsClass: "form-control",
                            placeholder: project_details["technology"][1],
                            value: projectDetails.project_technology,
                            onChange: (e => projectDetails.project_technology = e.target.value),
                        }
                    ]}
                />
                <FormInputs
                    ncols={["col-md-12"]}
                    properties={[
                        {
                            label: project_details["ouput"][0],
                            rows: "3",
                            componentClass: "textarea",
                            bsClass: "form-control",
                            placeholder: project_details["ouput"][1],
                            value: projectDetails.project_ouput,
                            onChange: (e => projectDetails.project_ouput = e.target.value),
                        },
                    ]}
                />
            </div>
        }
    />)
})

export const ProjectDescription = observer(({ projectStore }) => {
    let project_desc_obj = projectStore.ProjectStore.projectDetails.project_desc;
    return (<Card
        title="Project Description"
        content={
            <div>
                <FormInputs
                    ncols={["col-md-4", "col-md-4", "col-md-4"]}
                    properties={[
                        {
                            label: project_desc["project_location"][0],
                            type: "text",
                            bsClass: "form-control",
                            value: project_desc_obj.project_location,
                            placeholder: project_desc["project_location"][1],
                            onChange: (e => project_desc_obj.project_location = e.target.value),

                        },
                        {
                            label: project_desc["consultant"][0],
                            type: "email",
                            bsClass: "form-control",
                            value: project_desc_obj.project_consultant,
                            placeholder: project_desc["consultant"][1],
                            onChange: (e => project_desc_obj.project_consultant = e.target.value),
                        },
                        {
                            label: project_desc["contractor"][0],
                            type: "text",
                            bsClass: "form-control",
                            value: project_desc_obj.project_contrator,
                            placeholder: project_desc["contractor"][1],
                            onChange: (e => project_desc_obj.project_contrator = e.target.value),
                        },

                    ]}
                />
                <FormInputs
                    ncols={["col-md-12"]}
                    properties={[
                        {
                            label: project_desc["finciers"][0],
                            type: "text",
                            bsClass: "form-control",
                            value: project_desc_obj.project_finaciers,
                            placeholder: project_desc["finciers"][1],
                            onChange: (e => project_desc_obj.project_finaciers = e.target.value),
                        }
                    ]}
                />
                <FormInputs
                    ncols={["col-md-12"]}
                    properties={[
                        {
                            label: project_desc["scope_description"][0],
                            rows: "3",
                            componentClass: "textarea",
                            bsClass: "form-control",
                            value: project_desc_obj.project_scope,
                            placeholder: project_desc["scope_description"][1],
                            onChange: (e => project_desc_obj.project_scope = e.target.value),
                        }
                    ]}
                />
                <FormInputs
                    ncols={["col-md-12"]}
                    properties={[
                        {
                            label: project_desc["benefit"][0],
                            rows: "3",
                            componentClass: "textarea",
                            bsClass: "form-control",
                            value: project_desc_obj.project_benefit,
                            placeholder: project_desc["benefit"][1],
                            onChange: (e => project_desc_obj.project_benefit = e.target.value),
                        }
                    ]}
                />
            </div>}
    />)
}
)
export const Finances = observer(({ projectStore }) => {
    let finances_obj = projectStore.ProjectStore.projectDetails.finances;
    return (<Card
        title="Finances"
        content={
            <div>
                <FormInputs
                    ncols={["col-md-4", "col-md-4", "col-md-4"]}
                    properties={[
                        {
                            label: finances["foreign"][0],
                            type: "number",
                            bsClass: "form-control",
                            value: finances_obj.project_foreign_funding,
                            placeholder: finances["foreign"][1],
                            onChange: (e => finances_obj.project_foreign_funding = e.target.value),
                        },
                        {
                            label: finances["gok"][0],
                            type: "number",
                            bsClass: "form-control",
                            value: finances_obj.project_gok_funding,
                            placeholder: finances["gok"][1],
                            onChange: (e => finances_obj.project_gok_funding = e.target.value),
                        },
                        {
                            label: finances["direct"][0],
                            type: "number",
                            bsClass: "form-control",
                            value: finances_obj.project_direct_loan,
                            placeholder: finances["direct"][1],
                            onChange: (e => finances_obj.project_direct_loan = e.target.value),
                        }
                    ]}
                />
                <FormInputs
                    ncols={["col-md-4", "col-md-4", "col-md-4"]}
                    properties={[
                        {
                            label: finances["other"][0],
                            type: "number",
                            bsClass: "form-control",
                            value: finances_obj.project_other_contributor,
                            placeholder: finances["other"][1],
                            onChange: (e => finances_obj.project_other_contributor = e.target.value),
                        },
                        {
                            label: finances["approved"][0],
                            type: "number",
                            bsClass: "form-control",
                            value: finances_obj.project_approved_variation,
                            placeholder: finances["approved"][1],
                            onChange: (e => finances_obj.project_approved_variation = e.target.value),
                        },
                        {
                            label: finances["cumulative_expenditure"][0],
                            type: "number",
                            bsClass: "form-control",
                            value: finances_obj.project_cumulative_expenditure,
                            placeholder: finances["cumulative_expenditure"][1],
                            onChange: (e => finances_obj.project_cumulative_expenditure = e.target.value),
                        }
                    ]}
                />
                <FormInputs
                    ncols={["col-md-4", "col-md-4", "col-md-4"]}
                    properties={[
                        {
                            label: finances["allocation"][0],
                            type: "number",
                            bsClass: "form-control",
                            value: finances_obj.project_allocation,
                            placeholder: finances["allocation"][1],
                            onChange: (e => finances_obj.project_allocation = e.target.value),
                        }, {
                            label: finances["actual_expenditure"][0],
                            type: "number",
                            bsClass: "form-control",
                            value: finances_obj.project_actual_expenditure,
                            placeholder: finances["actual_expenditure"][1],
                            onChange: (e => finances_obj.project_actual_expenditure = e.target.value),
                        }, {
                            label: finances["balance"][0],
                            type: "number",
                            bsClass: "form-control",
                            value: finances_obj.project_balance,
                            placeholder: finances["balance"][1],
                            onChange: (e => finances_obj.project_balance = e.target.value),
                        }
                    ]}
                />
            </div>}
    />)
})

export const Timelines = observer(({ projectStore }) => {
    let timelines_obj = projectStore.ProjectStore.projectDetails.timelines;
    return (<Card
        title="Timelines"
        content={
            <div>
                <FormInputs
                    ncols={["col-md-4", "col-md-4", "col-md-4"]}
                    properties={[
                        {
                            label: timelines["start_date"][0],
                            type: "date",
                            bsClass: "form-control",
                            value: timelines_obj.project_start_date,
                            onChange: (e => timelines.project_start_date = e.target.value),
                        },
                        {
                            label: timelines["initial_completion"][0],
                            type: "date",
                            bsClass: "form-control",
                            value: timelines_obj.project_initial_completion,
                            onChange: (e => timelines_obj.project_initial_completion = e.target.value),
                            placeholder: timelines["initial_completion"][1],
                        },
                        {
                            label: timelines["revised_completion"][0],
                            type: "date",
                            bsClass: "form-control",
                            value: timelines_obj.project_revised_completion,
                            onChange: (e => timelines_obj.project_revised_completion = e.target.value),
                            placeholder: timelines["revised_completion"][1],
                        }
                    ]}
                />
                <FormInputs
                    ncols={["col-md-4"]}
                    properties={[
                        {
                            label: timelines["actual_completion"][0],
                            type: "date",
                            bsClass: "form-control",
                            value: timelines_obj.project_actual_completion,
                            onChange: (e => timelines_obj.project_actual_completion = e.target.value),
                            placeholder: timelines["actual_completion"][1],
                        }
                    ]}
                />
            </div>}
    />)
})

export const Finish = props => {
    return (
        <div>
            <CustomButton bsStyle="primary" fill type="button" className='pull-right'>
                Submit
            </CustomButton>
        </div>
    )
}
