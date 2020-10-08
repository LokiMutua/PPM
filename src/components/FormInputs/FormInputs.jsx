/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import validate from "validate.js";
import { FormGroup, ControlLabel, FormControl, Row } from "react-bootstrap";
import { constraints }from "./../Validations/ProjectValidations.js";

const formatValidate = (key, value) => {
  if (validate.single(value, constraints[key])) {
    return "warning";
  }
  return "success";
}


function FieldGroup({ label, ...props }) {
  return (
    <FormGroup validationState="success">
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
    </FormGroup>
  );
}
const OptionGroup = ({ label, options, ...props }) => {
  return (
    <FormGroup>
      <ControlLabel>{label}</ControlLabel>
      <FormControl placeholder="Select" {...props}>
        {options.map((item, key) =>
          <option key={key} value={item}>{item}</option>
        )}
      </FormControl>
    </FormGroup>
  )
}

export class FormInputs extends Component {
  render() {
    var row = [];
    for (var i = 0; i < this.props.ncols.length; i++) {
      if (this.props.properties[i].options) {
        row.push(<div key={i} className={this.props.ncols[i]}>
          <OptionGroup {...this.props.properties[i]} />
        </div>
        );
      } else {
        row.push(
          <div key={i} className={this.props.ncols[i]}>
            <FieldGroup {...this.props.properties[i]} />
          </div>
        );
      }
    }
    return <Row>{row}</Row>;
  }
}

export default FormInputs;
