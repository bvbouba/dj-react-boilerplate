import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/actions/auth";
import Header from "./Header";
import Footer from "./Footer";

class CustomLayout extends React.Component {
  render() {
    const { authenticated } = this.props;
    return (
      <div>

        <Header authenticated={authenticated} />

        {this.props.children}

        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CustomLayout)
);
