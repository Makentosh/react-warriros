import React from "react";
import './MovieList.scss';
// import {moviesData} from "../../moviesData";
import MovieItem from "../MovieItem";

import {API_URL, API_KEY_3, API_KEY_4} from '../../utils/api'
import MovieTabs from "../MovieTabs";

class MovieList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      moviesWillWatch: [],
      sort_by: "popularity.desc"
    }
  }

  componentDidMount() {
   this.getMovies()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.sort_by !== this.state.sort_by) {
      this.getMovies()
    }
  }

  getMovies = () => {
    fetch(`${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${this.state.sort_by}`)
        .then((response) => {
          return response.json()
        })
        .then((data)=> {
          console.log(data);
          this.setState({
            movies: data.results
          })
        })
  };

  removeMovie = movie => {
    const updateMovies = this.state.movies.filter((item) => item.id !== movie.id);

    this.setState({
      movies: updateMovies
    })
  };

  addMovieToWillWatch = movie => {
    const updateMovie = [...this.state.moviesWillWatch, movie];
    this.setState({
      moviesWillWatch: updateMovie
    })
  };


  removeMovieWillWatch = movie => {
    const updateMovie = this.state.moviesWillWatch.filter((item) => item.id !== movie.id);

    this.setState({
      moviesWillWatch: updateMovie
    })
  };

  updateSortBy = value => {
    this.setState({
      sort_by: value
    })
  };

  render() {
    return (
      <React.Fragment>
        <MovieTabs sort_by={this.state.sort_by} updateSortBy={this.updateSortBy}/>
        <div className="col-md-12 d-flex">
          <div className="movie col-md-9">
            <ul className="movie__list">
              {this.state.movies.map((movie, index) => <MovieItem key={movie.id} removeMovieWillWatch={this.removeMovieWillWatch} addMovieToWillWatch={this.addMovieToWillWatch} removeMovie={this.removeMovie} movie={ movie }/>)}
            </ul>
          </div>
          <div className="movie-list-watch col-md-3">
            <h1>Will Watch: {this.state.moviesWillWatch.length} movies</h1>
            <ul className="list-group">
              {this.state.moviesWillWatch.map((watch, index) =>  <li  key={index} className="list-group-item">{watch.title} {watch.vote_average}</li>)}
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default MovieList;
