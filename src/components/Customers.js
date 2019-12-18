import React, { Component } from 'react';
import axios  from 'axios';
import Customer from './Customer';

class Customers extends Component {
    constructor() {
        super();

        this.state = {
            customers: [],
            error: null
        }

    }

    componentDidMount() {
      const getURL = "http://localhost:3000/customers"

        axios.get(getURL)
          .then((response) => {
            console.log(response.data);

            const customers = response.data.map((customer) => {
                const customerEntry = {
                    name: customer.name,
                    id: customer.id,
                }

                return customerEntry;
            })

            this.setState({ customers });
          })
          .catch((error) => {
            //Do something if there's an error
            console.log(error);
            // this.setState({ error: `${error.message} while loading your cards!` });

          });
    }

    selectCustomer = (name) => {
      console.log("Cus")
        console.log(name);
    }

    render() {
      const customerComponents = this.state.customers.map((customer, index) => {
        return (
            <li key={index}>
              <Customer name={customer.name} id={customer.id} selectCustomerCallback={this.selectCustomer} />
            </li>
        )
    })
        return (
            <div>
                { customerComponents }
            </div>
        );
    }
}

export default Customers; 

