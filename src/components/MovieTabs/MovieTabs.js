import React, {PureComponent} from "react";
import './MovieTabs.scss';
// const classNames = require('classnames');

class MovieTabs extends PureComponent {

  render() {
    const handleClick = value => () => this.props.updateSortBy(value);

    // const getClassByValue = value => {
    //   return `nav-link ${sort_by === value ? 'active' : ''}`
    // };

    return (
      <ul className="tabs nav nav-pills justify-content-center mb-4">
        <li className="nav-item">
          <div className={`nav-link ${this.props.sort_by === 'popularity.desc' ? 'active' : ''}`} onClick={handleClick('popularity.desc')}>Popularity desc</div>
        </li>
        <li className="nav-item">
          <div className={`nav-link ${this.props.sort_by === 'revenue.desc' ? 'active' : ''}`} onClick={handleClick('revenue.desc')}>Revenue desc</div>
        </li>
        <li className="nav-item">
          <div className={`nav-link ${this.props.sort_by === 'vote_average.desc' ? 'active' : ''}`} onClick={handleClick('vote_average.desc')}>Vote average desc</div>
        </li>
      </ul>
    )
  }
}

export default MovieTabs;
