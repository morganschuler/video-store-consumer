import React from 'react'

const Movie = (props) => {
  const onMovieSelect = (event) => {
    const movie = props.title;

    this.props.onMovieSelectCallback(movie)
  }
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.overview}</p>
      <p>Release date: {props.release_date}</p>
      <img src={props.image_url}/>
      <input
        type="button"
        value="Select this Movie"
        onClick={props.onMovieSelect}
      />
    </div>
  )
}

export default Movie 