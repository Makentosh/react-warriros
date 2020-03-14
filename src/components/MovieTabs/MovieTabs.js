import React from "react";
import './MovieTabs.scss';

const MovieTabs =  props => {
  const {sort_by, updateSortBy} = props;

  const handleClick = value => () => updateSortBy(value);

  const getClassByValue = value => {
    return `nav-link ${sort_by === value ? 'active' : ''}`
  };

  return (
    <ul className="tabs nav nav-pills justify-content-center mb-4">
      <li className="nav-item">
        <div className={getClassByValue('popularity.desc')} onClick={handleClick('popularity.desc')}>Popularity desc</div>
      </li>
      <li className="nav-item">
        <div className={getClassByValue('revenue.desc')} onClick={handleClick('revenue.desc')}>Revenue desc</div>
      </li>
      <li className="nav-item">
        <div className={getClassByValue('vote_average.desc')} onClick={handleClick('vote_average.desc')}>Vote average desc</div>
      </li>
    </ul>
  )
};

export default MovieTabs;
