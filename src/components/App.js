import React from 'react';
import '../App.scss';
import MovieList from "./MovieList";

// const movie = {
//   title: 'Avengers: Infinity',
//   vote_average: 8.5,
//   image: 'https://www.nme.com/wp-content/uploads/2019/04/Payoff_1-Sht_Online_v6_Domestic_Sm-1-e1552570783683-696x477.jpg',
//   overview: 'As avenger firt film have project dlkgjdl fgdlkjf glkdj fkg djf glkdfj g'
// };
//
// function Image(props) {
//   return <img width="100%" src={props.src} alt={props.title}/>
// }
// class MovieItem extends React.Component {
//   constructor() {
//     super();
//
//     this.state = {
//       show: false,
//       like: false
//     }
//   }
//
//   toggleOverview = () => {
//     this.setState({
//       show: !this.state.show
//     })
//   };
//
//   handleLike = () => {
//     this.setState({
//       like: !this.state.like
//     })
//   };
//
//   render() {
//       const { data: {title, vote_average, image, overview }} = this.props;
//       return (
//           <div style={{width: "400px", margin: "0 auto"}}>
//             <Image src={image} alt={title}/>
//             <p>{title}</p>
//             <p>{vote_average}</p>
//             <div style={{display: "flex", justifyContent: "space-between"}}>
//               <button type="button" onClick={this.handleLike} className={this.state.like ? "blue" : "white"}>like</button>
//               <button type="button" onClick={this.toggleOverview}>{ this.state.show ? 'hide' : 'show'}</button>
//             </div>
//
//             {this.state.show ? <p>{overview}</p> : null}
//           </div>
//       )
//     }
// }



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      moviesWillWatch: []
    }
  }

  render() {
    return (
        <div className="App">
          <MovieList/>
        </div>
    )
  }
}

export default App;
