import React, { Component } from 'react'
import { Container, Navbar,Nav } from 'react-bootstrap'
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/actions/auth";

class Header extends Component {
    render() {
        const { authenticated } = this.props;
        return (
            <Navbar bg="light" className='mb-4'>
            <Container>
                <Navbar.Brand> 
                <Link to="/">
                    <span>Home</span>
                    </Link>
                </Navbar.Brand>
               
                <Nav>
                {authenticated ? (
              <Nav.Link  onClick={() => this.props.logout()}>
                Logout
              </Nav.Link>
            ) : (
              <React.Fragment>
                <Nav.Link href="/login">
                  <li >Login</li>
                </Nav.Link>
                <Nav.Link href="/signup">
                  <li >Signup</li>
                </Nav.Link>
              </React.Fragment>
            )}
                </Nav>
            
          </Container>
          </Navbar>
        )
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
    )(Header)
  );