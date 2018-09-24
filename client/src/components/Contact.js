import React, { Component } from 'react';
import { Container, Header, Grid } from 'semantic-ui-react';
import DoorDash from '../images/doordash.jpg';
// import { MapWithAMarker } from 'whatever';

class Contact extends Component {
  render() {
    return (

      <Container>
        <Header as='h1' textAlign='center'>Contact Us!</Header>
        <Grid stackable>
        <Grid.Row>
        <Grid.Column width={8}>
              <Header as='h2' textAlign='left' textAlign='center'>Location</Header>
              <div align='center'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1511.0303314710347!2d-111.88428610095525!3d40.76069047493472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752f5130c207e95%3A0x7d24574a9ed4d540!2sCharlie+Chows+Dragon+Grill!5e0!3m2!1sen!2sus!4v1515279306579" width="450" height="450" frameborder="0" style={{ border: "0"}} allowfullscreen></iframe>
              </div>
              </Grid.Column>
              <Grid.Column width={8}>
                <Header as='h2' textAlign='left' textAlign='center'>Delivery</Header>
                <div align='center'>
                  <a href="https://www.doordash.com/store/charlie-chow-s-dragon-grill-salt-lake-city-130169/?utm_campaign=gpa" width='450' height='450'>Order Now!</a>
                  <img src={DoorDash} alt='Order from Door Dash' />
                </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default Contact;
