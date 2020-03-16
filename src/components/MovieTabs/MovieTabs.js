import React, {PureComponent} from "react";
import './MovieTabs.scss';
const classNames = require('classnames');

class MovieTabs extends PureComponent {

  render() {
    const handleClick = value => () => this.props.updateSortBy(value);

    // const getClassByValue = value => {
    //   return `nav-link ${sort_by === value ? 'active' : ''}`
    // };

    const activeTabs = (value) => {
      return this.props.sort_by === value
    };

    return (
      <ul className="tabs nav nav-pills justify-content-center mb-4 mt-5">
        <li className="nav-item">
          <div className={classNames('nav-link', {active: activeTabs('popularity.desc')})} onClick={handleClick('popularity.desc')}>Popularity desc</div>
        </li>
        <li className="nav-item">
          <div className={classNames('nav-link', {active: activeTabs('revenue.desc')})} onClick={handleClick('revenue.desc')}>Revenue desc</div>
        </li>
        <li className="nav-item">
          <div className={classNames('nav-link', {active: activeTabs('vote_average.desc')})} onClick={handleClick('vote_average.desc')}>Vote average desc</div>
        </li>
      </ul>
    )
  }
}

export default MovieTabs;
