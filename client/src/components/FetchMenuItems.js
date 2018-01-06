import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import MenuItems from './MenuItems';
import { getMenuItems } from '../actions/MenuItems';
import { Loader, Segment, Dimmer } from 'semantic-ui-react';

class FetchMenuItems extends React.Component {
  state = { loaded: false }

  componentDidMount() {
    this.props.dispatch(getMenuItems(this.setLoaded))
  }

  setLoaded = () => this.setState({ loaded: true })

  render() {
    const { loaded } = this.state;
    if (loaded) {
      return (
        <div>
          <Route exact path="/MenuItems" component={MenuItems} />
        </div>
      )
    } else {
      return (
        <Segment>
          <Dimmer active>
            <Loader />
          </Dimmer>
        </Segment>
      )
    }
  }
}

export default connect()(FetchMenuItems);
