import React from 'react';

import BlogList from './BlogList';
import { items } from '../constants/items'

export default class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: items };
  }

  render() {
    return (
      <div>
        <BlogList items={this.state.items} />
      </div>
    )
  }
}
