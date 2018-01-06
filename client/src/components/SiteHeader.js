import React, { Component } from 'react';
import { Segment, Header } from 'semantic-ui-react';

class SiteHeader extends Component {
  render() {
    return (
      <div>
        <Header as='h1' textAlign='center'>Charlie Chow's</Header>
      </div>
    );
  }
}

export default Header;