import React, { PropTypes } from 'react';
import { List } from 'semantic-ui-react';

import { formatDate } from 'helpers/FormatDate';

export default class Meta extends React.Component {
  render() {
    const { author, createdAt, updatedAt } = this.props;
    return (
      <List bulleted>
        <List.Item>Author: {author}</List.Item>
        <List.Item>Created at: { formatDate(createdAt) }</List.Item>
        <List.Item>Updated at: { formatDate(updatedAt) }</List.Item>
      </List>
    );
  }
}

Meta.propTypes = {
  author: PropTypes.string,
  createdAt: PropTypes.instanceOf(Date),
  updatedAt: PropTypes.instanceOf(Date)
};

Meta.defaultProps = {
  createdAt: new Date(),
  updatedAt: new Date()
};
