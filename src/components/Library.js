import React, { Component } from 'react';
import axios from 'axios'

class Library extends Component {
  constructor() {
    super();

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
            title: movie.title
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
          <li key={index}>{movie.title}</li>
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