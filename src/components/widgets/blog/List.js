import React, { PropTypes } from 'react';
import { Item } from 'semantic-ui-react';

import { map } from 'lodash';

import BlogItem from './Item';

export default class BlogList extends React.Component {
  render() {
    const { items, likeHandler } = this.props;
    const listItems = map(items, function(item) {
      return (
        <BlogItem
          item={item}
          key={item.id}
          likeHandler={() => likeHandler(item.id)} />
      );
    });

    return (
      <Item.Group>
        {listItems}
      </Item.Group>
    );
  }
}

BlogList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(BlogItem.propTypes)),
  likeHandler: PropTypes.func
};
