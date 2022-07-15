import React from "react";
import Field from "./field";
import { connect } from "react-redux";
import ErrorAlert from "./alerts/errorAlert";

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

  renderErrorMessage() {
    if (this.props.errorResponse) {
      return (
        <ErrorAlert
          header={"Login error"}
          errorMessage={this.props.errorResponse}
        />
      );
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.renderErrorMessage()}
        <form className="ui form">
          {this.renderFields()}
          <button
            className="ui button"
            onClick={(event) => this.sendAction(event)}
          >
            {this.props.actionButtonText}
          </button>
        </form>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return { errorResponse: state.errorResponse };
};

export default connect(mapStateToProps, {})(Form);
