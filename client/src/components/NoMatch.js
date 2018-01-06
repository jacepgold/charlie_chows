import React, { Component } from 'react';
import { Header, Container, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Logo from '../images/ChowsLogoWhite.png';

class NoMatch extends Component {
  render() {
    return (
      <Container text>
      <Header>
      
       <h2>404 Error Page -- "No you go wrong way...you go <Link to='/'>back</Link> now!"</h2>
        <br />
        <div align='center'>
          <iframe src="https://giphy.com/embed/46yeAcewRq7Re" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/46yeAcewRq7Re"></a></p>
       </div>
       <br />
     
        </Header>
     </Container>
    );
  }
}

const styles = {
  logo: {
      width: '500px'
  }
}

export default NoMatch;
