import React from "react";
import Field from "./field";

class Form extends React.Component {
  sendAction = (event) => {
    event.preventDefault();
    this.props.onSubmitAction();
  };

  renderFields() {
    return this.props.fields.map((field) => {
      return (
        <Field
          key={field.key}
          label={field.label}
          inputType={field.inputType}
          inputName={field.inputName}
          controlFunction={field.controlFunction}
          currentValue={field.currentValue}
        />
      );
    });
  }

  render() {
    return (
      <form className="ui form">
        {this.renderFields()}
        <button
          className="ui button"
          onClick={(event) => this.sendAction(event)}
        >
          {this.props.actionButtonText}
        </button>
      </form>
    );
  }
}

export default Form;
