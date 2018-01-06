import React, { Component } from 'react';
import { Container, Header, Tab } from 'semantic-ui-react';

const panes = [
  { menuItem: 'lunchdinner', render: () => <Tab.Pane attached={false}>Lunch & Dinner</Tab.Pane> },
  { menuItem: 'beverages', render: () => <Tab.Pane attached={false}>Breverages</Tab.Pane> },
  { menuItem: 'deserts', render: () => <Tab.Pane attached={false}>Deserts</Tab.Pane> },
]

class Home extends Component {
  render() {
    return (
      <Container>
        <Header as='h1' textAlign='center'>Charlie Chow's</Header>
        <Header as='h2' textAlign='center'>Dragon Grill</Header>
        <Tab menu={{ pointing: true }} panes={panes} />
      </Container>
    );
  }
}

export default Home;
