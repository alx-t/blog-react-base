import React, { PropTypes } from 'react';
import { Item, Image } from 'semantic-ui-react';

import { postsPath } from 'helpers/routes';

import Meta from './elements/Meta';
import Like from './elements/Like';
import Link from 'components/elements/Link';

export default class BlogItem extends React.Component {
  render() {
    const { id, image, text, meta } = this.props.item;
    const likeHandler = this.props.likeHandler;

    return (
      <Item>
        <Item.Image {...image} />
        <Item.Content>
          <Item.Header>
            <Link to={postsPath(id)}>{text}</Link>
          </Item.Header>
          <Meta {...meta} />
          <Like likes={meta.likes} likeHandler={likeHandler} />
        </Item.Content>
      </Item>
    );
  }
}

BlogItem.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.shape(Image.propTypes),
    text: PropTypes.string,
    meta: PropTypes.shape(Meta.propTypes)
  }),
  likeHandler: PropTypes.func
};

// Image & Meta got defaults
BlogItem.defaultProps = {
  text: 'default text'
};
