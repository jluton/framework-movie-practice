import React from 'react';
import ReactDOM  from 'react-dom';

var Movie = (props) => (
  <div class="movie">
    <span class="movieTitle">
      {props.movie.title}
    </span>
  </div>
);

exports.Movie = Movie;
