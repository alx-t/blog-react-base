import React, { PropTypes } from 'react';
import { Item, Icon } from 'semantic-ui-react';

import { formatDate } from 'helpers/FormatDate';

export default class Meta extends React.Component {
  render() {
    const { author, createdAt, updatedAt } = this.props;
    return (
      <Item.Meta>
        <span><Icon name='calendar outline' /> created at: { formatDate(createdAt) }</span>
        <span><Icon name='history' /> updated at: { formatDate(updatedAt) }</span>
        <span><Icon name='user' /> author: { author }</span>
      </Item.Meta>
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
