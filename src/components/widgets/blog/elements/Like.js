import React, { PropTypes } from 'react';
import { Grid, Button } from 'semantic-ui-react';

export default class Like extends React.Component {
  render() {
    const { likes, likeHandler } = this.props;
    return (
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column width={4}>Likes: {likes}</Grid.Column>
          <Grid.Column width={4}>
            <Button onClick={likeHandler}>Like</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
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
