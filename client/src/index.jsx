import React from 'react';
import ReactDOM  from 'react-dom';

class MovieList extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [
        {title: 'Mean Girls'},
        {title: 'Hackers'},
        {title: 'The Grey'},
        {title: 'Sunshine'},
        {title: 'Ex Machina'}
      ]
    }
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.movies.map(movie => (
            <Movie movie={movie} />
          ))}
        </ul>
      </div>
    );
  }
}

//It says "Movie is not defined." In reacast.ly, we gave each element access to the others
//by putting them on the window, but I though webpack was supposed to take care of that?
//Do we need to import them all? Seems like a question for Shane.

ReactDOM.render( <MovieList />, document.getElementById('app'));
