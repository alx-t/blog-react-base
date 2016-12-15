import React from 'react';

import Image from './Image';
import TextBox from './TextBox';

export default class BlogItem extends React.Component {
  render() {
    const item = this.props.item;
    return (
      <div>
-        <Image
          alt={item.image.alt}
          src={item.image.src}
          width={item.image.width}
          height={item.image.height}
        />
        <TextBox>{item.text}</TextBox>
      </div>
    );
  }
};
