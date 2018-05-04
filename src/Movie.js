// import React, { Component } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis'
import './Movie.css';

// stateless functional component
// props를 제외한 나머지 변수나 cycle이 없다. 심지어 render() 도
function Movie({title, poster, genres, synopsis}) {
  return (
    // className == class in css
    <div className="Movie">
      <div className="Movie__Columns">
        <MoviePoster poster={poster} alt={title} />
      </div>
      <div className="Movie__Columns">
        <h1>{title}</h1>
        <div className="Movie__Genres">
          {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
        </div>
        <div className="Movie__Synopsis">
          <LinesEllipsis
            text={synopsis}
            maxLine='3'
            ellipsis='...'
            trimRight
            basedOn='letters'
          />
        </div>
      </div>
    </div>
  );
}

// functional component의 prop 타입
Movie.propTypes = {
  title:    PropTypes.string.isRequired,
  poster:   PropTypes.string.isRequired,
  genres:   PropTypes.array.isRequired,
  synopsis: PropTypes.string.isRequired,
};

function MoviePoster({poster, alt}) {
  return (
    <img src={poster} alt={alt} />
  );
}

// functional component의 prop 타입
MoviePoster.propTypes = {
  alt:    PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
};

function MovieGenre({genre}) {
  return (
    <span className="Movie__Genre">{genre}</span>
  );
}

MovieGenre.propTypes = {
  genre: PropTypes.string.isRequired,
};


/*
class Movie extends Component {
  static propTypes = {
    title:  PropTypes.string.isRequired,
    poster: PropTypes.string
  };
  
  render() {
    return (
      <div>
        <MoviePoster poster={this.props.poster} />
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}
*/

/*
class MoviePoster extends Component {
  static propTypes = {
    poster: PropTypes.string.isRequired
  };
  
  render() {
    return (
      <img src={this.props.poster} alt="poster"/>
    );
  }
}
*/

export default Movie;
