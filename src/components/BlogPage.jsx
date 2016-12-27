import React from 'react';
import { bind, map } from 'lodash';

import BlogList from './BlogList';
import { items } from '../constants/items'

export default class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: items };

    this.incrementLikes = bind(this.incrementLikes,this);
  }

  incrementLikes(itemId) {
    const newItems =  map(this.state.items, function(item) {
      if (item.id === itemId) {
        ++item.likes;
      }
      return item;
    })
    this.setState({ items: newItems });
  }

  render() {
    return (
      <div>
        <BlogList items={this.state.items} likeHandler={this.incrementLikes} />
      </div>
    )
  }
}
