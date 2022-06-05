import React from "react";

class Field extends React.Component {
  triggerControlFunction = (event) => {
    this.props.controlFunction(event.target.value);
  };
  render() {
    return (
      <div className="field">
        <label>{this.props.label}</label>
        <input
          type={this.props.inputType}
          name={this.props.inputName}
          placeholder={this.props.label}
          value={this.props.currentValue}
          onChange={this.triggerControlFunction}
        />
      </div>
    );
  }
}

export default Field;
