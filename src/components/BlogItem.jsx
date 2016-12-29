import React, { PropTypes } from 'react';
import { Container, Row, Col } from 'reactstrap';

import Image from './Image';
import TextBox from './TextBox';
import Meta from './Meta';
import Like from './Like';

export default class BlogItem extends React.Component {
  render() {
    const { image, text, meta, likes } = this.props.item;
    const likeHandler = this.props.likeHandler;

    return (
      <Container>
        <Row>
          <Col xs="2">
            <Image {...image} />
          </Col>
          <Col xs="10">
            <TextBox>{text}</TextBox>
          </Col>
        </Row>
        <Row>
          <Meta {...meta} />
        </Row>
        <Row>
          <Like likes={likes} likeHandler={likeHandler} />
        </Row>
      </Container>
    );
  }
};

BlogItem.propTypes = {
  image: PropTypes.shape(Image.propTypes),
  text: PropTypes.string,
  meta: PropTypes.shape(Meta.propTypes),
  likes: PropTypes.number,
  likeHandler: PropTypes.func
}

// Image & Meta got defaults
BlogItem.defaultProps = {
  text: 'default text'
}
