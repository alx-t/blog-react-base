import React, { PropTypes } from 'react';

const DOM = React.DOM;

export default class Image extends React.Component {
  render() {
    return DOM.img({
      src: this.props.src,
      alt: this.props.alt,
      width: this.props.width,
      height: this.props.height
    });
  }
}

Image.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
};

Image.defaultProps = {
  alt: 'default image',
  width: 60,
  height: 40
};
