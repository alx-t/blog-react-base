import React, { PropTypes } from 'react';
import { Container, Row, Col } from 'reactstrap';

import Image from './Image';
import TextBox from './TextBox';
import Meta from './Meta';
import Like from './Like';

export default class BlogItem extends React.Component {
  render() {
    const { image, text, meta, likes } = this.props.item;
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
          <Like likes={likes} />
        </Row>
      </Container>
    );
  }
};

BlogItem.propTypes = {
  image: PropTypes.instanceOf(Image.propTypes),
  text: PropTypes.string,
  meta: PropTypes.instanceOf(Meta.propTypes),
  likes: PropTypes.number
}

// Image & Meta got defaults
BlogItem.defaultProps = {
  text: 'default text'
}
