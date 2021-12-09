import React from "react";
import { Form, Card, Button, Container } from "react-bootstrap";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { authLogin } from "../store/actions/auth";

class LoginForm extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { username, password } = this.state;
    this.props.login(username, password);
  };

  render() {
    const { error, loading, token } = this.props;
    const { username, password } = this.state;
    if (token) {
      return <Redirect to="/" />;
    }
    return (
<Container align='center'>
<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>  Log-in to your account </Card.Title>
    <Card.Text style={{ color:'red'}}>
    {error && <p>{this.props.error.message}</p>}
    </Card.Text>
    <Form onSubmit={this.handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Username </Form.Label>
    <Form.Control 
       onChange={this.handleChange} 
       type="text" 
       placeholder="Username" 
       value={username} 
       name='username' 
       />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control 
    onChange={this.handleChange} 
    type="password" 
    placeholder="Password" 
    value={password} 
    name='password'
    />
  </Form.Group>

  <Button variant="primary" type="submit" disabled={loading}
>
    Login
  </Button>
</Form>
<Card.Text>
         New to us? <Card.Link href="/signup">Sign Up</Card.Link>
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
    login: (username, password) => dispatch(authLogin(username, password))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);