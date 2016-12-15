import React from 'react';

import BlogItem from './BlogItem';

export default class BlogList extends React.Component {
  render() {
    const { records } = this.props.items;
    const listItems = records.map(function(item, key) {
      const blogItem = {
        alt: 'oops, no image',
        src: item.img_src,
        width: '60',
        height: '40',
        text: item.text
      }
      return (
        <div key={key}>
          <BlogItem item={blogItem} />
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
