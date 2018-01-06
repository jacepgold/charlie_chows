import React, { Component } from 'react';
import { Container, Header, Image } from 'semantic-ui-react';
import ChinaFood1 from '../images/chinafood2.jpg';
import Slider from 'react-slick';
import Food1 from '../images/chinafood.jpg';
import Food2 from '../images/chinafood2.jpg';
import Food3 from '../images/chinafood3.jpg';
import Food4 from '../images/chinafood4.jpg';

class Home extends React.Component {
      render() {
      var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Container>
        <Header as='h1' textAlign='center' style={styles.heading}>Charlie Chow's</Header>
        <Header as='h2' textAlign='center'>Dragon Grill</Header>
      <Slider {...settings}>
        <div><img style={styles.food} src={Food1} alt='Charlie Chows Dragon Grill' /></div>
        <div><img style={styles.food} src={Food2} alt='Charlie Chows Dragon Grill' /></div>
        <div><img style={styles.food} src={Food3} alt='Charlie Chows Dragon Grill' /></div>
        <div><img style={styles.food} src={Food4} alt='Charlie Chows Dragon Grill' /></div>
      </Slider>
      <br /><br />
        <Container>
          <p style={ styles.paragraph }>
            Charlie Chow's Dragon Grill has always been known for it's fine 
            Asian cuisine served in an attractive, contemporary setting in 
            the heart of downtown Salt Lake City. Be sure to sample our fresh, 
            homemade Dim Sum (appertizer) in addition to the delicious entrees 
            made to order and elegantly served. And don't forget to try the 
            Dragon Gill, a tasty new way to create your own meal and sample a 
            varitey of Asian flavors. Because all of our entrees are made fresh
            to order, we use no MSG in our cooking. Plus, our traditon of friendly
            service and great food have made Charlie Chow's Dragon Grill a long time 
            Salt Lake favorite.
          </p>
        </Container>
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
  img: {
    marginBottom: '10px',
  },
  food: {
    width: '750px',
    height: 'auto',
    margin: '0 auto',
  },
  paragraph: {
    textAlign: 'center',
    fontSize: '1.5em',
  },
}

export default Home;
