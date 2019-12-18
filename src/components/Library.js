import React, { Component } from 'react';
import axios from 'axios'
import Movie from './Movie';

class Library extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      error: null
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/movies')
      .then((response) => {
        const movies = response.data.map((movie) => {
          const movieListing = {
            title: movie.title,
            overview: movie.overview,
            release_date: movie.release_date,
            image_url: movie.image_url
          }
          return movieListing
        })
        this.setState({ movies });
      })
      .catch((error) => {
        this.setState({error: error.message});
      })
  }

  findMovie = (movieId) => {
    const selectedMovie = this.state.movies.find((movie) => {
      return movie.id === movieId // return the movie whose ID is equal to the id I passed in
    })
    this.props.selectMovie(selectedMovie);
  }

  render() {
    const movieComponents = this.state.movies.map((movie, index) => {
        return (
          <Movie 
          id={movie.id}
          key={index}
          title={movie.title}
          overview={movie.overview}
          release_date={movie.release_date}
          image_url={movie.image_url}
          findMovie={this.findMovie}
          />
        )
    })
    return (
      <div>
        { movieComponents }
      </div>
    )
  }
}

export default Library;