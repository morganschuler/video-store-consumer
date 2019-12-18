import React, { Component } from 'react';

export class Customer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCustomer: {}
    };
  }

toSelect = (props) => {
  const selectedCustomer = this.props.customer

  this.setState({
    selectedCustomer: selectedCustomer
  });

  this.props.selectedCustomer(selectedCustomer);
}

  render () {
    const {id, name, address, city, state, postal_code, phone, account_credit, movies_checked_out_count } = this.props.customer
    return (
      <section>
      <h2>{name}</h2>
      <p>{id}</p>
      <p>{address}</p>
      {/* {<button id={props.id} onClick={this.toSelect}>Select Customer</button>} */}
      </section>
    );
  }
}
export default Customer; 
