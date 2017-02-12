import React, { PropTypes } from 'react';
import { Item } from 'semantic-ui-react';
import request from 'superagent';

import BlogItem from 'components/widgets/blog/Item';
import { host } from 'constants/static/host';

export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = { item: false };
  }

  fetchPost() {
    request.get(
      `${host}/${this.props.params.id}`,
      {},
      (err, res) => this.setState({ item: res.body })
    );
  }

  componentDidMount() {
    this.fetchPost();
  }

  render() {
    const post = (this.state.item) ? <BlogItem item={this.state.item} /> : '';
    return (
      <Item.Group>
        {post}
      </Item.Group>
    );
  }
}

Post.propTypes = {
  params: PropTypes.object
};
