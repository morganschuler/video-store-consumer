import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import './Movie.css'

const Movie = (props) => {
  // const onMovieSelect = (event) => {
  //   const movie = props.title;

  //   this.props.onMovieSelectCallback(movie)
  // }
  return (
  
  // <span className="container">
  //   <div className="movie">
  //   <h3 className="title">{props.title}</h3>
  //     <img className="image" src={props.image_url}/>
  //     <div className="content">{props.overview} 
  //     <br></br>
  //     Release Date: {props.release_date}</div>
  //     <button className="button"
  //       type="button"
  //       onClick={() => {props.findMovie(props.id)}}>
  //         {console.log(props.id)}
  //     Rent Me!
  //     </button>

  //   </div>
  // </span>
  <ul>
  <Card style={{ width: "20rem" }}>
          <Card.Header>
            <Card.Img className="img" variant="top" src={props.image_url} />
            <Card.Title className="movie-title">{props.title}</Card.Title>
            <Button
              variant="warning"
              type="button"
              onClick={() => {props.findMovie(props.id)}}>
            Rent Me!
            </Button>
          </Card.Header>
        </Card>
        <Card style={{ width: "20rem" }}>
            <Card.Body>
              <Card.Text>{props.overview}</Card.Text>
              <Card.Text>Release Date: {props.release_date}</Card.Text>
            </Card.Body>
        </Card>
    </ul>
  );

}

export default Movie; 


