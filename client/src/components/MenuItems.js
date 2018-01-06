import React from 'react';
import {
  Container,
  Grid,
  Header,
  Card,
  Image,
  Dropdown,
  Divider,
  Button,
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class MenuItems extends React.Component {
  state = { category: '' }


  items = () => {
    const { items } = this.props;
    const { category } = this.state;
    let visible = items;
    if (category)
      visible = items.filter( a => a.category === category )
    return visible.map( item =>
      <Card key={item.id}>
        <Image src={item.logo} />
        <Card.Content>
          <Card.Header>
            {item.name}
          </Card.Header>
          <Card.Meta>
            <span>{item.price}</span>
          </Card.Meta>
          <Card.Description>
            {item.description}
          </Card.Description>
          <Card.Content extra>
            <Link to={`/menu/menu_items/${item.id}`}>
              View Item
            </Link>
          </Card.Content>
        </Card.Content>
      </Card>
    )
  }

  categoryOptions = () => {
    return this.props.categories.map( (c,i) => {
      return { key: i, text: c, value: c }
    })
  }

  render() {
    const { category } = this.state;
    return (
      <Container>
        <Header as="h3" textAlign="center">items</Header>
        <Dropdown
          placeholder="Filter by category"
          fluid
          selection
          options={this.categoryOptions()}
          onChange={ (e, data) => this.setState({ category: data.value }) }
          value={category}
        />
        { category &&
            <Button
              fluid
              basic
              onClick={ () => this.setState({ category: '' }) }
            >
              Clear Filter: {category}
            </Button>
        }
        <Divider />
        <Card.Group itemsPerRow={4}>
          { this.items() }
        </Card.Group>
      </Container>
    )
  }
}

  const mapStateToProps = (state) => {
    const { items } = state;
    const categories = [...new Set(items.map( a => a.category ))]
    return { items, categories }
  }



export default connect(mapStateToProps)(MenuItems);
