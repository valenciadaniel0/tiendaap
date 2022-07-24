import React from "react";

class Field extends React.Component {
  triggerControlFunction = (event) => {
    this.props.controlFunction(event.target.value);
  };
  render() {
    return (
      <input
        type={this.props.inputType}
        name={this.props.inputName}
        placeholder={this.props.placeholder}
        value={this.props.currentValue}
        onChange={this.triggerControlFunction}
      />
    );
  }
}

export default Field;
