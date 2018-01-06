import React, { Component } from 'react';
import { Header, Container, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Logo from '../images/ChowsLogoWhite.png';

class NoMatch extends Component {
  render() {
    return (
      <Container text>
        <Header>
          <Header textAlign='center'>
            Error - 404<br />
            "No you go wrong way... You go <Link to='/'>back</Link> now!"<br />- Charlie Chow
          </Header>
          <br />
          <br />
          <div align='center'>
            <iframe src="https://giphy.com/embed/46yeAcewRq7Re" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/46yeAcewRq7Re"></a></p>
          </div>
        </Header>
      </Container>
    );
  }
}

const styles = {
  logo: {
      width: '500px',
  },
}

export default NoMatch;
