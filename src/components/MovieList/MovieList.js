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
      currentPage: 1,
      totalPage: '',
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

  if (prevState.currentPage !== this.state.currentPage) {
      this.setNumberPage();
    }
  }


  setNumberPage = () => {
    fetch(`${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${this.state.sort_by}&page=${this.state.currentPage}`)
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          this.setState({
            movies: data.results,
          });
          console.log(data)
        })
  };

  getMovies = () => {
    this.setState({
      loading: true
    });

    fetch(`${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${this.state.sort_by}&page=${this.state.currentPage}`)
        .then((response) => {
          return response.json()
        })
        .then((data)=> {
          this.setState({
            movies: data.results,
            totalPage: data.total_pages,
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
      currentPage: this.state.currentPage
    })
  };

  nextPage = () => {
    this.setState({
      currentPage: this.state.currentPage + 1
    })
  };

  prevPage = () => {
    this.setState({
      currentPage: this.state.currentPage === 1 ? this.state.currentPage : this.state.currentPage - 1
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
                <Pagination nextPage={this.nextPage} prevPage={this.prevPage} currentPage={this.state.currentPage} totalPage={this.state.totalPage}/>
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
