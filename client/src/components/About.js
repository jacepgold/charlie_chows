import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';
import Chow from '../images/CharlieChowPortrate.png';

class About extends Component {
  render() {
    return (
      <div>
        <Container>
        <div align='center'>
          <img style={styles.logo} src={Chow} alt='Charlie Chows Dragon Grill' />
        </div>
          <Header as='h1' style={styles.history} >OUR HISTORY</Header>
          <h2>
            Charlie Chow's Dragon Grill has always been known for it's fine
            Asian cuisine served in an attractive, contemporary setting in the 
            heart of downtown Salt Lake City. Be sure to sample our fresh, homemade
            Dim Sum (appertizer) in addition to the delicious entrees made to order and
            elegantly served. And don't forget to try the Dragon Gill, a tasty new way to	
            create your own meal and sample a varitey of Asian flavors. Because all of our 
            entrees are made fresh to order, we use no MSG in our cooking. Plus, our traditon of 
            friendly service and great food have made Charlie Chow's Dragon Grill a long time 
            Salt Lake favorite.
          </h2>
        </Container>
      </div>
    );
  }
}

const styles = {
  logo: {
      width: '200px',
      borderRadius: 300,
  },
  history: {
    textAlign: 'center',
    textDecoration: 'underline',
}
}

export default About;
