import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

// render cycle : componentWillMount() -> render() -> componentDidMount()
// update cycle : componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()

class App extends Component {
  // state : 컴포넌트의 state가 변하면 다시 render()를 호출
  // state가 없는 컴포넌트는 stateless component라고함(dumb component)
  state = {
    greeting: "Hello!"
  };
  
  componentWillMount() {
    
  }
  
  render() {
    const { movies } = this.state;
    return (
      <div className={movies ? "App" : "App--loading"}>
        {movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
  
  componentDidMount() {
    this._getMovies();
  }
  
  _getMovies = async () => {
    const movies = await this._callApi(); // await 뒤의 작업을 기다린다
    this.setState({
      movies
    });
  };
  
  _callApi = () => {
    // .then()은 한가지 attribute를 가짐
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err));
  };
  
  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      return <Movie
        key={movie.id}
        title={movie.title} 
        poster={movie.medium_cover_image}
        genres={movie.genres}
        synopsis={movie.synopsis}
      />
    })
    return movies;
  };
  
}

export default App;
