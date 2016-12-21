import React, { PropTypes } from 'react';
import { Container, Row, Col } from 'reactstrap';

import TextBox from './TextBox';
import FormattedDate from './FormattedDate';

export default class Author extends React.Component {
  render() {
    const { author, created_at, updated_at } = this.props;
    return (
      <Container>
        <Row>
          <Col xs="4">
            <TextBox>Author: </TextBox>
            <TextBox>{author}</TextBox>
          </Col>
          <Col xs="4">
            <TextBox>Created at</TextBox>
            <FormattedDate>{created_at}</FormattedDate>
          </Col>
          <Col xs="4">
            <TextBox>Updated at</TextBox>
            <FormattedDate>{updated_at}</FormattedDate>
          </Col>
        </Row>
      </Container>
    )
  }
}

Author.propTypes = {
  author: PropTypes.string,
  created_at: PropTypes.instanceOf(Date),
  updated_at: PropTypes.instanceOf(Date)
}

Author.defaultProps = {
  created_at: new Date(),
  apdated_at: new Date()
}
