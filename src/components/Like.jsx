import React, { PropTypes } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
//import { bind } from 'lodash';

export default class Like extends React.Component {
  render() {
    const { likes, likeHandler } = this.props;
    return (
      <Container>
        <Row>
          <Col xs='2'>Likes: {likes}</Col>
          <Col xs='2'>
            <Button color="info" onClick={likeHandler}>Like</Button>
          </Col>
        </Row>
      </Container>
    )
  }
}

Like.propTypes = {
  likes: PropTypes.number,
  likeHandler: PropTypes.func
}

Like.defaultProps = {
  likes: 0
}
