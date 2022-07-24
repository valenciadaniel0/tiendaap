import React from "react";

class Button extends React.Component {
  render() {
    return (
      <button className="ui button" onClick={this.props.action}>
        {this.props.text}
      </button>
    );
  }
}

export default Button;
