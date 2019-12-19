// Rental in app where you pass in selectedMovie and selectedCustomer
// state in rental - empty, date: is the let variable 
//create a rental using movie cstomer due date  as params 
//customer_id : customer.id// due_date movie_id
//post request with params
//set response date as set state
// in return, passing in args from 

import React, { Component } from 'react'
import axios from 'axios'

 let date = new Date();
date.setDate(new Date().getDate() + 7);

class Rentals extends Component {
  constructor(props) {
    super(props);
    this.state= {
      dueDate: date,
      rental: '',
    }
  }


  makeRental = (customer, movie, dueDate) => {
    let params = {
      "customer_id": customer.id,
      "due_date": date
    }
    console.log('RentalMorgan')
    console.log(movie)

    axios.post(`http://localhost:3000/rentals/${movie.title}/check-out`, params)
      .then((response) => { 
        this.setState({
          rental: response.data
        });
      })
      .catch((error) => {
        this.setState({ error: error.message });
      });
  }; 

  showRental = () => {
    const showMovie = this.props.movie ? <p>{this.props.movie.title}</p> : "";
    const showCustomer = this.props.customer ? <p>{this.props.customer.name}</p> : "";
    const showRental= this.state.rental && <p>{this.state.rental.id}</p>;
    return(
      <div>
        <p>
          {showMovie}
          {showCustomer}
          {showRental}
          <button onClick={() => {this.makeRental(this.props.customer, this.props.movie, this.state.dueDate)}}> Check out!</button>
        </p>
      </div>
    )
  }

  render(){
    const renderRental = this.props.movie || this.props.customer ? <p>{this.showRental()}</p> : "";
    return (
      <div>
        { renderRental }
        {console.log('Morgan')}
        {console.log(this.props)}
      </div>
    )
  }
}

export default Rentals;