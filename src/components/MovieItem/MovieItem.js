import React from "react";
import './MovieItem..scss';


class MovieItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      willWatch: false
    }
  }

  render() {
    const {movie, addMovieToWillWatch, removeMovieWillWatch, removeMovie} = this.props;
    return (
      <div className="card">
        <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
        <div className="card-body">
          <h5 className="card-title">{movie.title}</h5>
          <div className="card-inner">
            <p className="card-text">{movie.vote_average}</p>
            {this.state.willWatch
                ? <button type="button" className="btn btn-success" onClick={() => {removeMovieWillWatch(movie); this.setState({willWatch: false})}}>Remove watch</button>
                : <button type="button" className="btn btn-secondary"
                          onClick={() => {addMovieToWillWatch(movie); this.setState({willWatch: true})}}>will watch</button>
            }
          </div>
          <button className="btn btn-danger" onClick={removeMovie.bind(null, movie)}>Delete film</button>
        </div>
      </div>
    )
  }
}

export default MovieItem;
