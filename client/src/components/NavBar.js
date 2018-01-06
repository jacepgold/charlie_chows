import React, { Component } from 'react';
import { Menu, Input } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../actions/auth';

class NavBar extends Component {
  state = { activeItem: 'home' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

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
      <nav>
        <Menu pointing inverted style={ styles.main_menu }>
          <Link to='/'>
            <Menu.Item name='Home' active={activeItem === 'home'} />
          </Link>
          <Link to='/menu'>
            <Menu.Item name='Menu' active={activeItem === 'menu'} />
          </Link>
          <Link to='/menu'>
            <Menu.Item name='Catering' active={activeItem === 'catering'} />
          </Link>
          <Link to='/menu'>
            <Menu.Item name='Contact' active={activeItem === 'contact'} />
          </Link>
          <Link to='/about'>
            <Menu.Item name='Our History' active={activeItem === 'about'} />
          </Link>
          { this.rightNavs() }
        </Menu>
      </nav>
    );
  }
}

const styles = {
  main_menu: {
    borderRadius: '0',
  },
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(NavBar));
