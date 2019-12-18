import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Customer from './Customer';

class CustomerList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      customers: [],
      selectedCustomer: '',
      errors: '',
    }
  }

  onSelectedCustomer = (customer) => {
    this.setState({
      selectedCustomer: Customer,
    });
    this.props.onSelectedCustomer(customer);
  }
  makeCollection () {
    const customerCollection = this.state.customers.map((customer, i) => {
      < Customer
        key={customer.id} 
        id={customer.id} 
        name={customer.name}
        registered_at={customer.registered_at}
        address={customer.address}
        city={customer.city}
        state={customer.state}
        postal_code={customer.postal_code}
        phone={customer.phone}
        account_credit={customer.account_credit}
        selectedCustomer={this.onSelectedCustomer}
        />;
      }
    );
    return customerCollection
  }
  render () {
    return (
      <div>
      <NewStudentForm addStudentCallback={this.addStudent}/>
      <h3>Students</h3>
      <ul>
        {this.makeCollection()}
      </ul>
      </div>
    );
  }

  customerCollection() {
      return response.data.map((customer) => {
        return (
        < Customer
            key={customer.id} 
            id={customer.id} 
            name={customer.name}
            registered_at={customer.registered_at}
            address={customer.address}
            city={customer.city}
            state={customer.state}
            postal_code={customer.postal_code}
            phone={customer.phone}
            account_credit={customer.account_credit}
            selectedCustomer={this.onSelectedCustomer}
            />
        );
      })
    })
    .then((customers) => {
      this.setState({customers}, () => { 
      })
    })
    .catch((error) => {
      console.log(error);
    });
  } //end of customer info

  componentDidMount() {
    this.customerInfo();
    console.log(this.state.customers)
  }
  render() {
    // showingAllCustomers = 
    console.log(this.state.customers)

    return (
      <div>
      <table className="customer-table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Movies Rented</th>
          </tr>
        </thead>
        { this.state.customers } 
      </table>
      </div>
    )
  }
}

// CustomerList.PropTypes = {
// name:PropTypes.string.isRequired

// }


export default CustomerList;
