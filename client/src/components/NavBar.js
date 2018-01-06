import React, { Component } from 'react';
import { Container, Segment, Menu, Dropdown, Header, Grid, Image } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../actions/auth';
import SiteHeader from './SiteHeader';
import Logo from '../images/ChowsLogo.png';

class NavBar extends Component {
  state = { activeItem: 'home' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  // <Image style={styles.logo} src={Logo} alt='Charlie Chows Dragon Grill' />
  
  callToAction = () => {
    return(
      <div style={styles.header}>
        <Container>
          <Grid stackable>
            <Grid.Row>
              <Grid.Column width={8}>
                <div align='center'>
                  <Image style={styles.logo} src={Logo} alt='Charlie Chows Dragon Grill' />
                </div>
              </Grid.Column>
              <Grid.Column width={8}>
                <Header as='h3' style={styles.black} textAlign='center'>
                  For dining reservations,<br />carry-out, delivery, or catering.
                </Header>
                <Header as='h1' textAlign='center' style={styles.red}>
                  Call Us Now!
                </Header>
                <Header as='h3' textAlign='center' class="middle aligned" style={styles.black}>
                  Call (801) 328-3663<br />
                  255 East 400 South, Salt Lake City, Utah 84111
                </Header>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    )
  }

  rightNavs = () => {
    const { activeItem } = this.state;
    const { user, dispatch, history } = this.props;

    if (user.id) {
      return (
        <Menu.Menu position='right'>
          <Menu.Item
            name='Logout'
            onClick={() => dispatch(handleLogout(history))}
          />
        </Menu.Menu>
      );
    }
    return (
      <Menu.Menu position='right'>
        <Link to='/login'>
          <Menu.Item name='login' active={activeItem === 'login'} onClick={this.handleItemClick} />
        </Link>
      </Menu.Menu>
    );
  }


  render() {
    const { activeItem } = this.state
    return (
      <div>
        <Segment basic>
          { this.callToAction() }
        </Segment>
        <nav>
          <Menu inverted style={ styles.main_menu } stackable>
            <Link to='/'>
              <Menu.Item name='Home' active={activeItem === 'home'} onClick={this.handleItemClick} />
            </Link>
            <Link to='/menu'>
              <Menu.Item name='Menu' active={activeItem === 'menu'} onClick={this.handleItemClick} />
            </Link>
            <Link to='/catering'>
              <Menu.Item name='Catering' active={activeItem === 'catering'} onClick={this.handleItemClick} />
            </Link>
            <Link to='/contact'>
              <Menu.Item name='Contact' active={activeItem === 'contact'} onClick={this.handleItemClick} />
            </Link>
            <Link to='/about'>
              <Menu.Item name='Our History' active={activeItem === 'about'} onClick={this.handleItemClick} />
            </Link>
            { this.rightNavs() }
          </Menu>
        </nav>
      </div>
    );
  }
}

const styles = {
  main_menu: {
    borderRadius: '0',
    borderTop: '1px solid gray',
    marginTop: '-14px',
  },
  white: {
    color: 'white',
  },
  black: {
    color: 'black'
  },
  red: {
    color: 'red',
  },
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(NavBar));
