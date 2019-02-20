import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import CategoryList from './categoryList';

export default class colContainer extends React.Component {
  render() {

    return (
      <Container fluid style={{marginTop:'50px'}}>
        <Row>
          <Col xs="4"><CategoryList /></Col>
          <Col xs="4">.col-auto - variable width content</Col>
          <Col xs="3">.col-3</Col>
        </Row>
      </Container>
    );
  }
}
