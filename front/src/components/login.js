import React from "react";
import { connect } from "react-redux";
import { login } from "../actions/user";
import Form from "./form";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
  }

  fields() {
    return [
      {
        label: "Email",
        placeholder: "Email",
        inputType: "text",
        inputName: "email",
        controlFunction: (email) => this.setState({ email }),
        currentValue: this.state.email,
        key: "login-email",
      },
      {
        label: "Password",
        placeholder: "Password",
        inputType: "password",
        inputName: "password",
        controlFunction: (password) => this.setState({ password }),
        currentValue: this.state.password,
        key: "login-password",
      },
    ];
  }
  render() {
    return (
      <div className="ui container">
        <div className="vertical-space-20"></div>
        <div className="ui two column centered grid">
          <div className="column">
            <div className="ui segment">
              <Form
                onSubmitAction={() =>
                  this.props.login(this.state.email, this.state.password)
                }
                actionButtonText="Log In"
                fields={this.fields()}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { login })(Login);
