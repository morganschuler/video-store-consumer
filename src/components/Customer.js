import React from 'react'

const Customer = (props) => {
  // const onMovieSelect = (event) => {
  //   const movie = props.title;

  //   this.props.onMovieSelectCallback(movie)
  // }
  return (
    <div>
      <h3>{props.name}</h3>

      <button
        type="button"
        onClick={() => {props.findCustomer(props.id)}}>
          {console.log(props.id)}
      Select Me
      </button>
    </div>
  )
}

export default Customer; 