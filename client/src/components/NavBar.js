import React, { Component } from 'react';
import { Segment, Menu, Dropdown, Header } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../actions/auth';
import SiteHeader from './SiteHeader';

class NavBar extends Component {
  state = { activeItem: 'home' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  callToAction = () => {
    return(
      <div>
        <Header as='h1' id='logo' textAlign='center' style={ styles.white }>Above Nav</Header>
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
        <Segment basic inverted>
          { this.callToAction() }
        </Segment>
        <nav>
          <Menu inverted style={ styles.main_menu }>
            <Link to='/'>
              <Menu.Item name='Home' active={activeItem === 'home'} onClick={this.handleItemClick} />
            </Link>
            <Dropdown item text='Menu'>
              <Dropdown.Menu>
                <Dropdown.Item>Lunch & Dinner</Dropdown.Item>
                <Dropdown.Item>Beverages</Dropdown.Item>
                <Dropdown.Item>Desert</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
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
  callToAction: {
    padding: '0',
    Height: '100px',
  },
  main_menu: {
    borderRadius: '0',
    marginTop: '-11px',
  },
  white: {
    color: 'white',
  },
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(NavBar));
