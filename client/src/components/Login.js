import React, { Component } from 'react';
import { Container, Header, Segment, Form, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { handleLogin } from '../actions/auth';

class Login extends Component {
  state = { email: '', password: '' };

  handleChange = event => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { dispatch, history } = this.props;
    const { email, password } = this.state;
    dispatch(handleLogin(email, password, history));
  }

  render() {
    const { email, password } = this.state;
    return (
      <Container>
        <Segment basic>
          <Header as='h1' textAlign='center'>Login</Header>
          <Form onSubmit={this.handleSubmit}>
            <Form.Field>
              <label htmlFor='email'>Email</label>
              <input
                required
                id='email'
                value={email}
                placeholder='Email'
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor='password'>Password</label>
              <input
                required
                id='password'
                value={password}
                placeholder='Password'
                type='password'
                onChange={this.handleChange}
              />
            </Form.Field>
            <Segment textAlign='center' basic>
              <h4>
                Need an account? <Link to='/register'>Create one now!</Link>
              </h4>
              <Button primary type='submit'>Submit</Button>
            </Segment>
          </Form>
        </Segment>
      </Container>
    );
  }
}

export default connect()(Login);
