import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';

class Home extends Component {
  render() {
    return (
      <Container>
        <Header as='h1' textAlign='center'>Charlie Chows</Header>
        <Header as='h2' textAlign='center'>Dragon Grill</Header>
      </Container>
    );
  }
}

export default Home;
