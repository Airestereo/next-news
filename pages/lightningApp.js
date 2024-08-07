import { Utils } from '@lightningjs/core';
import Lightning from 'lightningjs'; // Adjusted import statement
import React from 'react';

let net;
if (typeof window === 'undefined') {
  net = require('net');
}

if (typeof window === 'undefined') {
  const net = require('net'); // Use net module here
}

class MyApp extends Lightning.Component {
  static _template() {
    return {
      Background: {
        rect: true,
        w: 1920,
        h: 1080,
        color: 0xff000000,
      },
      MovieList: {
        y: 100,
        x: 100,
        children: [],
      },
    };
  }

  _init() {
    this.loadMovies();
  }

  async loadMovies() {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
    );
    const data = await response.json();
    this.tag('MovieList').children = data.results.map((movie, index) => ({
      type: Lightning.Component,
      x: index * 200,
      y: 0,
      text: {
        text: movie.title,
        fontSize: 24,
        textColor: 0xffffffff,
      },
    }));
  }
}

const MyComponent = () => {
  return (
    <Lightning>
      <MyApp />
    </Lightning>
  );
};

export default MyComponent;
