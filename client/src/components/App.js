import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Flash from './Flash';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import ProtectedRoute from './ProtectedRoute';
import AuthRoute from './AuthRoute';
import FetchUser from './FetchUser';
import MenuItems from './MenuItems';
import Footer from './Footer';

// Site pages
import Login from './Login';
import Register from './Register';
import Catering from './Catering';


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
              <Route exact path='/menu' component={MenuItems} />
              <Route exact path='/about' component={About} />
              <Route exact path='/catering' component={Catering} />
              <Route exact path='/contact' component={Contact} />
              <AuthRoute exact path='/login' component={Login} />
              <AuthRoute exact path='/register' component={Register} />
              //NO ROUTES BEYOND THIS POINT
              <Route component={NoMatch} />
            </Switch>
          </FetchUser>
          <Footer />
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
