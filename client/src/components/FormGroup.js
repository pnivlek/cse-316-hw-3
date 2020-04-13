import React, { Component } from "react";

class FormGroup extends Component {
  render() {
    return (
      <div className="form-group">
        <label htmlFor={this.props.param}>{this.props.label}:</label>
        <input
          type={this.props.formType}
          min={this.props.min}
          max={this.props.max}
          className="form-control"
          name={this.props.param}
          placeholder={this.props.label}
          defaultValue={this.props.defValue}
          onChange={this.props.onChangeCallback}
          required="required"
        />
      </div>
    );
  }
}
export default FormGroup;
