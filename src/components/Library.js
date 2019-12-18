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
    const getURL = 'http://localhost:3000/movies'
    axios.get(getURL)
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

  render() {
    const movieComponents = this.state.movies.map((movie, index) => {
        return (
          <Movie 
          key={index}
          title={movie.title}
          overview={movie.overview}
          release_date={movie.release_date}
          image_url={movie.image_url}
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

export default Library 