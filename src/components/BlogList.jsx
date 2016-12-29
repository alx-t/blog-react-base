import React, { PropTypes } from 'react';
import { map } from 'lodash';

import BlogItem from './BlogItem';

export default class BlogList extends React.Component {
  render() {
    const { items, likeHandler } = this.props;
    const listItems = map(items, function(item) {
      return (
        <div key={item.id}>
          <BlogItem item={item} likeHandler={() => likeHandler(item.id)} />
        </div>
      );
    });

    return (
      <div>
        {listItems}
      </div>
    )
  }
}

BlogList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(BlogItem.propTypes)),
  likeHandler: PropTypes.func
}
