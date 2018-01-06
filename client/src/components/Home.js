import React, { Component } from 'react';
import { Container, Header, Image } from 'semantic-ui-react';
import ChinaFood1 from '../images/chinafood2.jpg';

class Home extends Component {
  render() {
    return (
      <div>
        <Header as='h1' textAlign='center' style={styles.heading}>Charlie Chow's</Header>
        <Header as='h2' textAlign='center'>Dragon Grill</Header>
        <Image style={ styles.img } src={ChinaFood1} centered />
        <Container>
          <p style={ styles.paragraph }>
            Charlie Chow's Dragon Grill has always been known for it's fine 
            Asian cuisine served in an attractive, contemporary setting in 
            the heart of downtown Salt Lake City. Be sure to sample our fresh, 
            homemade Dim Sum (appertizer) in addition to the delicious entrees 
            made to order and elegantly served. And don't forget to try the 
            Dragon Gill, a tasty new way to	create your own meal and sample a 
            varitey of Asian flavors. Because all of our entrees are made fresh
            to order, we use no MSG in our cooking. Plus, our traditon of friendly
            service and great food have made Charlie Chow's Dragon Grill a long time 
            Salt Lake favorite.
          </p>
        </Container>
      </div>
    );
  }
}

const styles = {
  heading: {
    color: 'crimson',
    textDecoration: 'underline',
    textAlign: 'center',
    fontSize: '3em',
  },
  img: {
    marginBottom: '10px',
  },
  paragraph: {
    textAlign: 'center',
    fontSize: '1.5em',
  },
}

export default Home;
