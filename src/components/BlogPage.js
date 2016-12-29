import React from 'react';
import { bind, map, cloneDeep } from 'lodash';

import BlogList from 'components/widgets/blog/List';
import PieChart from 'components/widgets/blog/PieChart';

import { items as staticItems } from 'constants/static/items';

export default class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: staticItems };
    this.incrementLikes = bind(this.incrementLikes,this);
  }

  incrementLikes(itemId) {
    const newItems =  map(cloneDeep(this.state.items), function(item) {
      if (item.id === itemId) ++item.meta.likes;
      return item;
    });
    this.setState({ items: newItems });
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
