import React from 'react';

import BlogList from './BlogList';
import { records } from '../constants/items'

export default class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { records };
  }

  render() {
    return (
      <div>
        <BlogList items={this.state} />
      </div>
    )
  }
}
