import React, { PropTypes } from 'react';
import { Container, Row, Col } from 'reactstrap';

import Image from './Image';
import TextBox from './TextBox';
import Author from './Author';
import Like from './Like';

export default class BlogItem extends React.Component {
  render() {
    const { image, text, author, likes } = this.props.item;
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
          <Author {...author} />
        </Row>
        <Row>
          <Like likes={likes} />
        </Row>
      </Container>
    );
  }
};

BlogItem.propTypes = {
  image: PropTypes.shape({
                      alt: PropTypes.string,
                      src: PropTypes.string,
                      width: PropTypes.number,
                      height: PropTypes.number
                    }),
  text: PropTypes.string,
  author: PropTypes.shape({
                      author: PropTypes.string,
                      created_at: PropTypes.instanceOf(Date),
                      updated_at: PropTypes.instanceOf(Date)
                    }),
  likes: PropTypes.number
}

// Image & Author got defaults
BlogItem.defaultProps = {
  text: 'default text'
}
