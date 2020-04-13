import React, { Component } from "react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import { Link } from "react-router-dom";
import FormGroup from "./FormGroup";

const ADD_LOGO = gql`
  mutation AddLogo(
    $text: String!
    $color: String!
    $fontSize: Int!
    $backgroundColor: String!
    $borderColor: String!
    $borderRadius: Int!
    $borderWidth: Int!
    $padding: Int!
    $margin: Int!
  ) {
    addLogo(
      text: $text
      color: $color
      fontSize: $fontSize
      backgroundColor: $backgroundColor
      borderColor: $borderColor
      borderRadius: $borderRadius
      borderWidth: $borderWidth
      padding: $padding
      margin: $margin
    ) {
      _id
    }
  }
`;

class CreateLogoScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "goLogolo",
      color: "#000000",
      fontSize: "24",
      backgroundColor: "#FFFFFF",
      borderColor: "#000000",
      borderRadius: "4",
      borderWidth: "8",
      padding: "8",
      margin: "8",
    };
  }
  render() {
    return (
      <Mutation
        mutation={ADD_LOGO}
        onCompleted={() => this.props.history.push("/")}
      >
        {(addLogo, { loading, error }) => (
          <div className="container">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h4>
                  <Link to="/">Home</Link>
                </h4>
                <h3 className="panel-title">Create Logo</h3>
              </div>
              <div className="panel-body">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    addLogo({
                      variables: {
                        text: this.state.text,
                        color: this.state.color,
                        fontSize: parseInt(this.state.fontSize),
                        backgroundColor: this.state.backgroundColor,
                        borderColor: this.state.borderColor,
                        borderRadius: parseInt(this.state.borderRadius),
                        borderWidth: parseInt(this.state.borderWidth),
                        padding: parseInt(this.state.padding),
                        margin: parseInt(this.state.margin),
                      },
                    });
                  }}
                >
                  <FormGroup
                    htmlFor="text"
                    param="text"
                    label="Text"
                    formType="text"
                    defValue={this.state.text}
                    onChangeCallback={(e) => {
                      this.setState({ text: e.target.value });
                    }}
                  />
                  <FormGroup
                    param="color"
                    label="Color"
                    formType="color"
                    defValue={this.state.color}
                    onChangeCallback={(e) => {
                      this.setState({ color: e.target.value });
                    }}
                  />
                  <FormGroup
                    param="fontSize"
                    label="Font Size"
                    formType="text"
                    defValue={this.state.fontSize}
                    onChangeCallback={(e) => {
                      this.setState({ fontSize: e.target.value });
                    }}
                  />
                  <FormGroup
                    param="backgroundColor"
                    label="Background Color"
                    formType="color"
                    defValue={this.state.backgroundColor}
                    onChangeCallback={(e) => {
                      this.setState({
                        backgroundColor: e.target.value,
                      });
                    }}
                  />
                  <FormGroup
                    param="borderColor"
                    label="Border Color"
                    formType="color"
                    defValue={this.state.borderColor}
                    onChangeCallback={(e) => {
                      this.setState({ borderColor: e.target.value });
                    }}
                  />
                  <FormGroup
                    param="borderRadius"
                    label="Border Radius"
                    formType="text"
                    defValue={this.state.borderRadius}
                    onChangeCallback={(e) => {
                      this.setState({ borderRadius: e.target.value });
                    }}
                  />
                  <FormGroup
                    param="borderWidth"
                    label="Border Width"
                    formType="text"
                    defValue={this.state.borderWidth}
                    onChangeCallback={(e) => {
                      this.setState({ borderWidth: e.target.value });
                    }}
                  />
                  <FormGroup
                    param="padding"
                    label="Border Padding"
                    formType="text"
                    defValue={this.state.padding}
                    onChangeCallback={(e) => {
                      this.setState({ padding: e.target.value });
                    }}
                  />
                  <FormGroup
                    param="margin"
                    label="Border Margin"
                    formType="text"
                    defValue={this.state.margin}
                    onChangeCallback={(e) => {
                      this.setState({ margin: e.target.value });
                    }}
                  />
                  <button type="submit" className="btn btn-success">
                    Submit
                  </button>
                </form>
                {loading && <p>Loading...</p>}
                {error && <p>Error :( Please try again</p>}
              </div>
            </div>
          </div>
        )}
      </Mutation>
    );
  }
}

export default CreateLogoScreen;
