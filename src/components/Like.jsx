import React, { PropTypes } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { bind } from 'lodash';

export default class Like extends React.Component {
  constructor(props) {
    super(props);
    this.state = { likes: props.likes }

    this.handleClick = bind(this.handleClick, this);
  }

  handleClick(e) {
    this.setState({ likes: this.state.likes + 1 })
  }

  render() {
    const likes = this.state.likes;
    return (
      <Container>
        <Row>
          <Col xs='2'>Likes: {likes}</Col>
          <Col xs='2'>
            <Button color="info" onClick={this.handleClick}>Like</Button>
          </Col>
        </Row>
      </Container>
    )
  }
}

Like.propTypes = {
  likes: PropTypes.number
}

Like.defaultProps = {
  likes: 0
}
