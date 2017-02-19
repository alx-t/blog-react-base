import React from 'react';
import { bind, map, cloneDeep } from 'lodash';
import request from 'superagent';

import BlogList from 'components/widgets/blog/List';
import PieChart from 'components/widgets/blog/PieChart';
import { host } from 'constants/static/host';

export default class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
    this.incrementLikes = bind(this.incrementLikes,this);
  }

  incrementLikes(itemId) {
    const newItems =  map(cloneDeep(this.state.items), function(item) {
      if (item.id === itemId) ++item.meta.likes;
      return item;
    });
    this.setState({ items: newItems });
  }

  fetchPosts() {
    request.get(
      host,
      {},
      (err, res) => this.setState({ items: res.body })
    );
  }

  componentDidMount() {
    this.fetchPosts();
  }

  render() {
    const items = this.state.items;
    const columns = map(items, (item) => [item.text, item.meta.likes]);
    return (
      <div>
        <BlogList items={items} likeHandler={this.incrementLikes} />
        <PieChart columns={columns} />
      </div>
    );
  }
}
