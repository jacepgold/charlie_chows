import React from 'react';
import axios from 'axios';
import { Segment,
  Card,
  Grid,
  Divider,
  Dimmer,
  Loader,
  Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
// import Search from './Search';

class MainMenu extends React.Component {
  state = {
    menus: { entries: [] },
    loading: true,
    visible: [],
  }

  componentDidMount() {
    this.getmenus(1)
  }

  getmenus = (page) => {
    axios.get(`/api/all_menus`)
      .then( res => this.setState({ menus: res.data, loading: false, visible: res.data }) )
  }

  handlePageClick = (page) => {
    this.setState({ loading: true }, () => {
      this.getmenus(page)
    });
  }

  search = (term) => {
    if (term === '')
      this.setState({ visible: this.state.menus });
    else {
      axios.get(`/api/search_menus?query=${term}`)
        .then( res => this.setState({ visible: res.data }) )
    }
  }

  render() {
    let { menus, visible, loading } = this.state;
    return (
      <Segment>
        { loading ?
          <Segment>
            <Dimmer active>
              <Loader />
            </Dimmer>
          </Segment> :
          <Grid id="menus_grid">
            <Grid.Row>
              <Grid.Column width={16}>
                <Divider />
              </Grid.Column>
              { visible.entries.map( menu => {
                  let {
                    id,
                    name,
                    style: { category: { name: catName } = {} } = {}
                  } = menu;
                  return (
                    <Grid.Column key={id} computer={4} tablet={16} mobile={16}>
                      <Card.Content>
                        <Card.Header>
                          { name }
                        </Card.Header>
                      </Card.Content>
                      <Card.Content extra>
                        Category: {catName}
                      </Card.Content>
                      <Divider hidden />
                    </Grid.Column>
                  )
                })
              }
            </Grid.Row>
          </Grid>
        }
      </Segment>
    )
  }
}

export default MainMenu;
