import React from 'react';

import Image from './Image';
import TextBox from './TextBox';

export default class BlogItem extends React.Component {
  render() {
    const item = this.props.item;
    return (
      <div>
-        <Image
          alt={item.alt}
          src={item.src}
          width={item.width}
          height={item.height}
        />
        <TextBox>{item.text}</TextBox>
      </div>
    );
  }
};
