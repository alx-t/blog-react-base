import React, { PropTypes } from 'react';
import { Grid } from 'semantic-ui-react';

import Image from './elements/Image';
import TextBox from './elements/TextBox';
import Meta from './elements/Meta';
import Like from './elements/Like';

export default class BlogItem extends React.Component {
  render() {
    const { image, text, meta } = this.props.item;
    const likeHandler = this.props.likeHandler;

    return (
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column width={2}>
            <Image {...image} />
          </Grid.Column>
          <Grid.Column width={8}>
            <TextBox>{text}</TextBox>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column width={6}>
            <Meta {...meta} />
          </Grid.Column>
          <Grid.Column>
            <Like likes={meta.likes} likeHandler={likeHandler} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
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
