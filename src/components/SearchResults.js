import React from 'react';

const SearchResults = (props) => {
console.log(props.movieData)
const movies = props.movieData.map((movie, i) => {
  return <li key={i}>{movie.title}</li>
});
    return (
        {movies}
    );
}

export default SearchResults;