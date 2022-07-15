import React from "react";

class ErrorAlert extends React.Component {
  render() {
    return (
      <div className="ui negative message">       
        <div className="header">{this.props.header}</div>
        <p>{this.props.errorMessage}</p>
      </div>
    );
  }
}

export default ErrorAlert;
