import React from "react";
import './MovieList.scss';
// import {moviesData} from "../../moviesData";
import MovieItem from "../MovieItem";
import {API_URL, API_KEY_3} from '../../utils/api'
import MovieTabs from "../MovieTabs";
import Pagination from "../Pagination";
import Loader from "../Loader";

class MovieList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      moviesWillWatch: [],
      sort_by: "popularity.desc",
      page: '',
      total_pages: '',
      loading: false
    }
  }

  componentDidMount() {
    this.getMovies();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.sort_by !== this.state.sort_by) {
      this.getMovies()
    }

  if (prevState.page !== this.state.page) {
      this.getMovies({page: this.state.page});
    }
  }


  getMovies = (page) => {
    this.setState({
      loading: true
    });

    fetch(`${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${this.state.sort_by}&page=${this.state.page}`)
        .then((response) => {
          return response.json()
        })
        .then((data)=> {
          this.setState({
            movies: data.results,
            total_pages: data.total_pages,
            page: data.page,
            loading:  false
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
      sort_by: value,
      page: this.state.page
    })
  };

  nextPage = () => {
    this.setState({
      page: this.state.page + 1
    })
  };

  prevPage = () => {
    this.setState({
      page: this.state.page - 1
    })
  };



  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <MovieTabs sort_by={this.state.sort_by} updateSortBy={this.updateSortBy}/>
          </div>

          { this.state.loading ?

              <Loader/>
             : <React.Fragment>
              <div className="col-md-12">
                <Pagination nextPage={this.nextPage} prevPage={this.prevPage} page={this.state.page} total_pages={this.state.total_pages}/>
              </div>
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
          }

        </div>
      </div>
    );
  }
}
export default MovieList;
