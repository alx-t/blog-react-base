import React, { Component } from 'react';

import Image from './components/Image';
import TextBox from './components/TextBox';
import BlogItem from './components/BlogItem';
import BlogPage from './components/BlogPage';
import { items } from './constants/items'

export default class App extends Component {
  render() {
    const blogItems = items.map(function(item, key) {
      return (
        <div key={key}>
          <BlogItem item={item} />
        </div>
      )
    })
    return (
      <div className="App">
        <Image
          alt='cat image'
          src='http://www.zooundco24.de/uploads/tx_news/Fotolia_18657342_farbkombinat.jpg'
          width='60'
          height='46'
        />
        <TextBox>TextBox sample text</TextBox>
        { blogItems }
        <BlogPage />
      </div>
    );
  }
}
