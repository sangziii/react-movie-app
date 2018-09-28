import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {
  
  state = {
    movies: [
      {
        "title": "Matrix",
        "poster": "https://image.tmdb.org/t/p/original/lZpWprJqbIFpEV5uoHfoK0KCnTW.jpg",
      },
      {
        "title": "Full Metal",
        "poster": "https://alternativemovieposters.com/wp-content/uploads/2018/01/alberto_fullmetal.jpg"
      },
      {
        "title": "Old boys",
        "poster": "http://www.languagetrainers.com/reviews/foreign-film-reviews/uploads/9214-Oldboy.jpg"
      },
      {
        "title": "Star Wars",
        "poster": "https://pbs.twimg.com/media/DRDYKz1UMAA5fUP.jpg"
      }
    ]
  }

  componentDidMount(){
    setTimeout(() => {
    
    } ,1000);
  }

  render() {
    return (
      <div className="App">
        {this.state.greeting}
        {this.state.movies.map(function(movie, idx){
          return <Movie title={movie["title"]} poster={movie["poster"]} key={idx} />
        })}
      </div>
    );
  }
}

export default App;
