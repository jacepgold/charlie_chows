import React, { Component } from 'react';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Login from './Login';
import Register from './Register';
import Flash from './Flash';
import Home from './Home';
import About from './About';
import ProtectedRoute from './ProtectedRoute';
import AuthRoute from './AuthRoute';
import FetchUser from './FetchUser';
import MainMenu from './MainMenu';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div id="page" style={styles.page}>
          <Flash />
          <FetchUser>
            <Switch id='page' style={ styles.page }>
              <Route exact path='/' component={Home} />
              <Route exact path='/menu' component={MainMenu} />
              <Route exact path='/about' component={About} />
              <AuthRoute exact path='/login' component={Login} />
              <AuthRoute exact path='/register' component={Register} />
              //NO ROUTES BEYOND THIS POINT
              <Route component={NoMatch} />
            </Switch>
          </FetchUser>
        </div>
      </div>
    );
  }
}

const styles = {
  page: {
    paddingTop: '2%',
  }
}
export default App;
