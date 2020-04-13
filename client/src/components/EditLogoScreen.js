import React, { Component } from "react";
import { Link } from "react-router-dom";
import gql from "graphql-tag";
import { Query, Mutation } from "react-apollo";
import CurrentLogo from "./CurrentLogo";
import FormGroup from "./FormGroup";
const GET_LOGO = gql`
  query logo($logoId: String) {
    logo(id: $logoId) {
      _id
      text
      color
      fontSize
      backgroundColor
      borderColor
      borderRadius
      borderWidth
      padding
      margin
      lastUpdate
    }
  }
`;

const UPDATE_LOGO = gql`
  mutation updateLogo(
    $id: String!
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
    updateLogo(
      id: $id
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
      lastUpdate
    }
  }
`;

class EditLogoScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadedState: false,
      text: null,
      color: null,
      fontSize: null,
      backgroundColor: null,
      borderColor: null,
      borderRadius: null,
      borderWidth: null,
      padding: null,
      margin: null,
    };
  }
  render() {
    return (
      <Query
        query={GET_LOGO}
        variables={{ logoId: this.props.match.params.id }}
      >
        {({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return `Error! ${error.message}`;
          if (!this.state.loadedState) {
            this.setState(Object.assign(data["logo"], { loadedState: true }));
          }
          var disableSubmit = false;
          if (this.state.text === null || this.state.text.trim() === "") {
            disableSubmit = true;
          }
          return (
            <Mutation
              mutation={UPDATE_LOGO}
              key={data.logo._id}
              onCompleted={() => this.props.history.push(`/`)}
            >
              {(updateLogo, { loading, error }) => (
                <div className="container">
                  <div className="row">
                    <div className="col-4">
                      <div className="card">
                        <div className="card-header">
                          <h4>
                            <Link to="/">Home</Link>
                          </h4>
                          <h3 className="card-title">Edit Logo</h3>
                        </div>
                        <div className="card-body">
                          <form
                            onSubmit={(e) => {
                              e.preventDefault();
                              updateLogo({
                                variables: {
                                  id: data.logo._id,
                                  text: this.state.text,
                                  color: this.state.color,
                                  fontSize: parseInt(this.state.fontSize),
                                  backgroundColor: this.state.backgroundColor,
                                  borderColor: this.state.borderColor,
                                  borderRadius: parseInt(
                                    this.state.borderRadius
                                  ),
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
                              defValue={data.logo.text}
                              onChangeCallback={(e) => {
                                this.setState({ text: e.target.value });
                              }}
                            />
                            <FormGroup
                              param="color"
                              label="Color"
                              formType="color"
                              defValue={data.logo.color}
                              onChangeCallback={(e) => {
                                this.setState({ color: e.target.value });
                              }}
                            />
                            <FormGroup
                              param="fontSize"
                              label="Font Size"
                              formType="text"
                              defValue={data.logo.fontSize}
                              onChangeCallback={(e) => {
                                this.setState({ fontSize: e.target.value });
                              }}
                            />
                            <FormGroup
                              param="backgroundColor"
                              label="Background Color"
                              formType="color"
                              defValue={data.logo.backgroundColor}
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
                              defValue={data.logo.borderColor}
                              onChangeCallback={(e) => {
                                this.setState({ borderColor: e.target.value });
                              }}
                            />
                            <FormGroup
                              param="borderRadius"
                              formType="text"
                              defValue={data.logo.borderRadius}
                              onChangeCallback={(e) => {
                                this.setState({ borderRadius: e.target.value });
                              }}
                            />
                            <FormGroup
                              param="borderWidth"
                              label="Border Width"
                              formType="text"
                              defValue={data.logo.borderWidth}
                              onChangeCallback={(e) => {
                                this.setState({ borderWidth: e.target.value });
                              }}
                            />
                            <FormGroup
                              param="padding"
                              label="Border Padding"
                              formType="text"
                              defValue={data.logo.padding}
                              onChangeCallback={(e) => {
                                this.setState({ padding: e.target.value });
                              }}
                            />
                            <FormGroup
                              param="margin"
                              label="Border Margin"
                              formType="text"
                              defValue={data.logo.margin}
                              onChangeCallback={(e) => {
                                this.setState({ margin: e.target.value });
                              }}
                            />
                            <button
                              type="submit"
                              className="btn btn-success"
                              disabled={disableSubmit}
                            >
                              Submit
                            </button>
                          </form>
                          {loading && <p>Loading...</p>}
                          {error && <p>Error :( Please try again</p>}
                        </div>
                      </div>
                    </div>
                    <div className="spanFl">
                      <CurrentLogo
                        logo={{
                          text: this.state.text,
                          color: this.state.color,
                          fontSize: this.state.fontSize,
                          backgroundColor: this.state.backgroundColor,
                          borderColor: this.state.borderColor,
                          borderRadius: this.state.borderRadius,
                          borderWidth: this.state.borderWidth,
                          padding: this.state.padding,
                          margin: this.state.margin,
                        }}
                      />
                    </div>
                  </div>
                </div>
              )}
            </Mutation>
          );
        }}
      </Query>
    );
  }
}

export default EditLogoScreen;
