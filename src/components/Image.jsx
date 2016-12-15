import React from 'react';

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
};
