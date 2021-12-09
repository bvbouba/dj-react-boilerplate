import React from "react";
import { Form, Card, Button,Container } from "react-bootstrap";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { authSignup } from "../store/actions/auth";

class RegistrationForm extends React.Component {
  state = {
    username: "",
    email: "",
    password1: "",
    password2: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    const { username, email, password1, password2 } = this.state;
    this.props.signup(username, email, password1, password2);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { username, email, password1, password2 } = this.state;
    const { error, loading, token } = this.props;
    if (token) {
      return <Redirect to="/" />;
    }
    return (
      <Container align='center'>
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>  Signup to your account </Card.Title>
        <Card.Text>
        {error && <p>{this.props.error.message}</p>}
        </Card.Text>
        <Form onSubmit={this.handleSubmit}>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Username </Form.Label>
        <Form.Control 
          onChange={this.handleChange} 
          type="text" 
          placeholder="Username" 
          value={username} 
          name='username'
          />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email </Form.Label>
        <Form.Control 
        onChange={this.handleChange} 
        type="email" 
        placeholder="E-mail address" 
        value={email} 
        name='email'
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
        onChange={this.handleChange} 
        type="password" 
        placeholder="Password" 
        value={password1} 
        name='password1'
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control 
        onChange={this.handleChange} 
        type="password" 
        placeholder="Password" 
        value={password2} 
        name='password2'
        />
      </Form.Group>

      <Button 
         variant="primary" 
         type="submit" 
         disabled={loading}>
          Signup
      </Button>
    </Form>
    <Card.Text>
    Already have an account? <Card.Link href="/login">Login</Card.Link>
        </Card.Text>
      </Card.Body>
    </Card>
   </Container>

    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    token: state.auth.token
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signup: (username, email, password1, password2) =>
      dispatch(authSignup(username, email, password1, password2))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationForm);