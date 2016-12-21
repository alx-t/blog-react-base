import React, { PropTypes } from 'react';

import BlogItem from './BlogItem';

export default class BlogList extends React.Component {
  render() {
    const { items } = this.props.items;
    const listItems = items.map(function(item, key) {
      return (
        <div key={key}>
          <BlogItem item={item} />
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
  items: PropTypes.shape({ items: PropTypes.array })
}
