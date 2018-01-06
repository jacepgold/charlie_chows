import React, { Component } from 'react';
import { Header, Container, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Catering extends Component {
  render() {
    return (
      <Container>
        <Header as='h1' textAlign='center' style={styles.heading}>
          Catering
        </Header>
        <p style={ styles.paragraph }>
          For over 15 years, Charlie Chow’s Dragon Grill is one of Salt Lake City’s premiere Chinese dining and catering establishments. Whether it is for your New Year’s Eve Party (our specialty), a wedding, a working lunch, on-site filming, or any other special occasion, Charlie Chow’s is sure to be a crowd pleaser, with experience and expertise you can trust for that special occasion. So remember, from fully staffed catering to individually boxed meals you can pick up on the go, and anything else in between, Charlie Chow’s Dragon Grill is eager to serve your catering, banquet, and party needs!
        </p>
        <Header as='h2' textAlign='center' style={styles.headingTwo}>Business Luncheon Special</Header>
        <p style={ styles.paragraph }>
          Please contact the restaurant!
          Your choice of any two entrees,
          Plus a vegetarian dish
          Plus steamed rice/fried rice/both rice
          Served in elegant chafing dishes &
          delivered to your door.
          (available from 11:00 a.m. to 5 p.m.
          Monday through Friday with a minimum order for 20 people).
        </p>
        <Header as='h2' textAlign='center' style={styles.headingTwo}>
          For more information, please call our managers at (801) 328-3663 (EAT-FOOD). We look forward to serving you!
        </Header>
      </Container>
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
  headingTwo: {
    color: 'crimson',
    textDecoration: 'underline',
    textAlign: 'center',
    fontSize: '2em',
  },
  logo: {
    width: '500px',
  },
  paragraph: {
    textAlign: 'center',
    fontSize: '1.5em',
  },
}

export default Catering;
