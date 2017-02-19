import React, { PropTypes } from 'react';
import { Item, Icon, Button } from 'semantic-ui-react';

export default class Like extends React.Component {
  render() {
    const { likes, likeHandler } = this.props;
    return (
      <Item.Meta>
        <span><Icon name='empty heart' /> liked: { likes }</span>
        <Button onClick={likeHandler}>Like</Button>
      </Item.Meta>
    );
  }
}

Like.propTypes = {
  likes: PropTypes.number,
  likeHandler: PropTypes.func
};

Like.defaultProps = {
  likes: 0
};
