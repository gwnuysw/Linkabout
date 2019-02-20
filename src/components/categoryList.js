import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

export default class categoryList extends React.Component {
  componentDidMount() {
    fetch('http://localhost/auth/signcheck')
      .then(response => response.json())
      .then((data) => {
        this.setState({...data});
      });
  }
  render() {
    return (
      <ListGroup>
        <ListGroupItem>Cras justo odio</ListGroupItem>
        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem>Morbi leo risus</ListGroupItem>
        <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
        <ListGroupItem>Vestibulum at eros</ListGroupItem>
      </ListGroup>
    );
  }
}
