import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';
import Customer from './Customer';

class CustomerList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      customers: [],
      error: null
      // selectedCustomer: '',
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/customers')
    .then((response) => {
      this.setState({
        customers: response.data });
    })
    .catch((error) => {
      this.setState({error: error.message});
    });
  } //end of customer info

  findCustomer = (customerId) => {
    const selectedCustomer = this.state.customers.find((customer) => {
      return customer.id === customerId // return the movie whose ID is equal to the id I passed in
    })
    {console.log(selectedCustomer)}
    this.props.selectCustomer(selectedCustomer);
  }

  render() {
    const customerComponents = this.state.customers.map((customer, index) => {
      return (
        < Customer
            key={index} 
            id={customer.id} 
            name={customer.name}
            registered_at={customer.registered_at}
            address={customer.address}
            city={customer.city}
            state={customer.state}
            postal_code={customer.postal_code}
            phone={customer.phone}
            account_credit={customer.account_credit}
            findCustomer={this.findCustomer}
            />
        )
      })
    return (
      <div>
        { customerComponents }
      </div>
    )
  }
}

// CustomerList.PropTypes = {
// name:PropTypes.string.isRequired

// }


export default CustomerList;
