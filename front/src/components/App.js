import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import Login from "./login";
import Home from "./home";

class App extends React.Component {
  conditionalRendering() {
    if (this.props.user !== null) {
      return <Route path="/" element={<Home />} />;
    } else {
      return <Route path="/" element={<Login />} />;
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Routes>{this.conditionalRendering()}</Routes>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return { user: state.user };
};

export default connect(mapStateToProps, {})(App);
