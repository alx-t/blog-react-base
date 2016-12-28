import React from 'react';
import { bind, map, assign } from 'lodash';

import BlogList from './BlogList';
import PieChart from './PieChart';
import { items } from '../constants/items'

export default class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: items };
    this.incrementLikes = bind(this.incrementLikes,this);
  }

  incrementLikes(itemId) {
    const items = assign({}, this.state.items);
    //const newItems =  map(this.state.items, function(item) {
    const newItems =  map(items, function(item) {
      if (item.id === itemId) ++item.likes;
      return item;
    })
    this.setState({ items: newItems });
  }

  render() {
    const items = this.state.items;
    const columns = map(items, (item) => [item.text, item.likes]);
    return (
      <div>
        <BlogList items={items} likeHandler={this.incrementLikes} />
        <PieChart columns={columns} />
      </div>
    )
  }
}
