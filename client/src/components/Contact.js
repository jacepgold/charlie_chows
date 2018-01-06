import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';
// import { MapWithAMarker } from 'whatever';

class Contact extends Component {
  render() {
    return (
      <div>
        <Container>
          <Header as='h1' textAlign='center'>Contact Us!</Header>
          <Header as='h3' textAlign='left'>Location</Header>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1511.0303314710347!2d-111.88428610095525!3d40.76069047493472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752f5130c207e95%3A0x7d24574a9ed4d540!2sCharlie+Chows+Dragon+Grill!5e0!3m2!1sen!2sus!4v1515279306579" width="300" height="250" frameborder="0" style={{ border: "0"}} allowfullscreen></iframe>
        </Container>
      </div>
    );
  }
}

export default Contact;
