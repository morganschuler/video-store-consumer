import React, { Component } from 'react';
import SearchResults from './SearchResults';
// import movie_data from './movie-data.json'
import SearchForm from './SearchForm';
import axios  from 'axios';

class Search extends Component {
    constructor() {
        super();

        this.state = {
            // searchResults: [],
            movies: [],
            error:null
        }
    }

    movieSearchCallback = (title) => {
      console.log(title)
      const getURL = 'http://localhost:3000/movies'
      axios.get(getURL, {
          params: {
            query: title.title
          }
      })
          .then((response) => {
            console.log(response.data)
                const movies = response.data.map((movie) => {
                    const movieResult = {
                        title: movie.title
                    }
                    return movieResult
                })
                this.setState({ movies });
            })
            .catch((error) => {
                this.setState({error: error.message });
            })
  }

  render() {
    return (
      <div>
      <SearchForm movieSearchCallback={this.movieSearchCallback}/>
      <SearchResults movieData={this.state.movies}/>
      </div>
    );
  }
}

export default Search; 