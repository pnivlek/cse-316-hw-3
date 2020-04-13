import React, { Component } from "react";

class FormGroup extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="form-group">
        <label htmlFor={this.props.param}>{this.props.label}:</label>
        <input
          type={this.props.formType}
          className="form-control"
          name={this.props.param}
          placeholder={this.props.label}
          defaultValue={this.props.defValue}
          onChange={this.props.onChangeCallback}
        />
      </div>
    );
  }
}
export default FormGroup;
