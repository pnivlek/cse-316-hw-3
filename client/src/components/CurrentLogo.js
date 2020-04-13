import React, { Component } from "react";
import "../App.css";

class CurrentLogo extends Component {
  render() {
    const logoStyle = {
      color: this.props.logo.textColor,
      fontSize: this.props.logo.fontSize + "pt",
      backgroundColor: this.props.logo.backgroundColor,
      borderStyle: "solid",
      borderColor: this.props.logo.borderColor,
      borderRadius: this.props.logo.borderRadius + "px",
      borderWidth: this.props.logo.borderWidth + "px",
      padding: this.props.logo.padding + "px",
      margin: this.props.logo.margin + "px",
    };
    console.log("logo initialized");
    return (
      <div className="center" style={logoStyle}>
        {this.props.logo.text}
      </div>
    );
  }
}

export default CurrentLogo;
