import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';
import "./Search.css"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'



class Search extends Component {
   constructor(props) {
       super(props);

       this.state = {
           movieAddToRentalLib: null,
           searchMovie: "",
           searchResults: [],
           apiError: null,
           apiSuccess: null,
       };
   }

   onSearchChange = (event) => {
       const updatedState = {
           searchMovie: event.target.value
       }
       this.setState(updatedState)
   }


   onSearchButtonHandler = () => {

    if (this.state.searchMovie) {
        axios.get('http://localhost:3000/movies?query=' + this.state.searchMovie)
        .then((response) => {
            const updatedMovieList = response.data

            this.setState({
                searchResults: updatedMovieList
            });
       })
       .catch((error) => {
           this.setState({
               apiError: error.message
           })
       });

        }

   }

   onAddtoRentalButtonHandler = (movie) => {
    // const slashIndex = movie.image_url.lastIndexOf('/')
    // const imageUrl = movie.image_url.slice(slashIndex, movie.image_url.length)
    const movieDataToSendToApi ={
            "movie": {
              "title": movie.title,
              "overview": movie.overview,
              "release_date": movie.release_date,
              "image_url": movie.image_url,
              "external_id": movie.external_id,
            //   "inventory": 1
            }
    }
    console.log(movieDataToSendToApi)
    axios.post('http://localhost:3000/movies', movieDataToSendToApi)
    .then((response) => {
      console.log(response)
      if (response.data.movie) {
        const successMessage = `Yay! Succesfully added ${response.data.movie.title}`
        this.setState({
            apiSuccess: successMessage
        })
      } else {
        const successMessage = response.data.errors
        this.setState({
            apiSuccess: successMessage
        })
      }

   })
   .catch((error) => {
       this.setState({
           apiError: error.message
       })
   });
   }

   render() {
        const eachMovie = this.state.searchResults.map((movie, i) => {
            return (
                <section className="movie_search_card" key={i}>
                <ul>
                <Card style={{ width: "30rem" }}>
                    <Card.Header>
                        <Card.Img className="img" variant="top" src={movie.image_url} />
                        <Card.Title className="movie-title">{movie.title}</Card.Title>
                        <Button
                        variant="warning"
                        type="button"
                        onClick={() => {this.onAddtoRentalButtonHandler(movie)}}>
                            Add: {movie.title}
                        </Button>
                    </Card.Header>
                    </Card>
                    <Card style={{ width: "30rem" }}>
                        <Card.Body>
                        <Card.Text>{movie.overview}</Card.Text>
                        <Card.Text>Release Date: {movie.release_date}</Card.Text>
                     </Card.Body>
                     </Card>

                    {/* <Card style={{ width: "20rem" }}>
                        <img src={movie.image_url} alt="movie poster" className="movie_IMG" />
                        <Card.Text>{movie.overview}</Card.Text>
                        <br></br>
                        <Button
                        variant="warning"
                        type="button"
                        onClick={() => {this.onAddtoRentalButtonHandler(movie)}}>
                            Add: {movie.title}
                        </Button>
                    </Card> */}
                    </ul>
            </section>
            )
        })
        const successSection = (this.state.apiSuccess) ? (<section>{this.state.apiSuccess} </section>) : null;
       const errorSection = (this.state.apiError) ? (<section> Error: {this.state.apiError}</section>) : null;
    return (
        <main className="movie_search">
            <h1>Movie Search Page</h1>
            <p>Search for a movie to add to the rental library!</p>
            <label>
                <input
                type="text"
                onChange={this.onSearchChange}>
                </input>
            </label>
            <input className="most_btns"type="submit" name="submit" value="Search"
              onClick={this.onSearchButtonHandler} />
            {errorSection}
            {successSection}
            {eachMovie}
        </main>
        )
    }
}

export default Search;