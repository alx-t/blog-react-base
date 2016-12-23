import React, { PropTypes } from 'react';
import { map } from 'lodash';

import BlogItem from './BlogItem';

export default class BlogList extends React.Component {
  render() {
    const items = this.props.items;
    const listItems = map(items, function(item, key) {
      return (
        <div key={key}>
          <BlogItem item={item} />
        </div>
      );
    });

    console.log(BlogItem.propTypes);

    return (
      <div>
        {listItems}
      </div>
    )
  }
}

BlogList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object)
  //items: PropTypes.arrayOf(PropTypes.instanceOf(BlogItem.propTypes))
}
