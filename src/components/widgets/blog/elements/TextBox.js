import React from 'react';

const TextBox = (props) => (
  <span>{props.children}</span>
);

TextBox.PropTypes = {
  children: React.PropTypes.string
}

export default TextBox;
