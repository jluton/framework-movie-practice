import React from 'react';
import ReactDOM  from 'react-dom';

var Movie = (props) => (
  <li>
    {props.movie.title}
  </li>
);

exports.Movie = Movie;
