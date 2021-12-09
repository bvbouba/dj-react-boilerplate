import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import BaseRouter from "./routes";
import * as actions from "./store/actions/auth";
import 'bootstrap/dist/css/bootstrap.min.css';
import { CustomLayout } from "./containers";

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {
    return (
      <Router>
        <CustomLayout>
          <BaseRouter />
          </CustomLayout>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);