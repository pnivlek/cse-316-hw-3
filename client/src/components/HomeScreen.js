import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const GET_LOGOS = gql`
  {
    logos {
      _id
      text
      lastUpdate
    }
  }
`;

class HomeScreen extends Component {
  render() {
    return (
      <Query pollInterval={500} query={GET_LOGOS}>
        {({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return `Error! ${error.message}`;

          return (
            <div className="container">
              <div className="row">
                <div className="col-8">
                  <div className="card">
                    <div className="card-header">
                      <div id="home_banner_container">goLogoLo Logo Maker</div>
                    </div>
                    <div className="card-body">
                      <Link
                        id="add_logo_button"
                        to="/create"
                        className="btn btn-primary"
                      >
                        Add Logo
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col s4">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Recent Work</h4>
                    </div>
                    <div className="card-body">
                      {data.logos
                        .sort(
                          (logo, logo2) =>
                            new Date(logo2.lastUpdate) -
                            new Date(logo.lastUpdate)
                        )
                        .map((logo, index) => (
                          <div
                            key={index}
                            className="home_logo_link"
                            style={{ cursor: "pointer" }}
                          >
                            <Link
                              className="btn btn-secondary"
                              to={`/view/${logo._id}`}
                            >
                              {logo.text}
                            </Link>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default HomeScreen;
