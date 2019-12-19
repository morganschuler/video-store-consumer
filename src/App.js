import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Library from './components/Library.js'
import CustomerList from './components/CustomerList.js'
import Search from './components/Search.js'
// import Customer from './components/Customer.js'
import Rentals from './components/Rentals.js'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedMovie: '',
      selectedCustomer: '',
      // selectedCustomerId: null,
      // message: '',
    }
  };

  // onSelectedCustomer = (CustomerId) => {
  //   const customerToSelect = this.state.customerList.find(customer => customer.id === CustomerId);
  //   this.setState({
  //     selectedCustomer: customerToSelect,
  //   });
  // }

    selectMovie = (movie) => {
  this.setState({
    selectedMovie: movie,
  });
}

    selectCustomer = (customer) => {
  this.setState({
    selectedCustomer: customer,
  });
}

render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/search">Search</Link>
              </li>
              <li>
                <Link to="/library">Library</Link>
              </li>
              <li>
                <Link to="/customers">Customers</Link>
              </li>
              <li>
              <Rentals movie={this.state.selectedMovie} customer={this.state.selectedCustomer}/>
              </li>
            </ul>
          </nav>
          {console.log(this.state.selectedMovie)}
          {console.log('MORGAN')}

          
          <Switch>
            <Route path="/search">
              <Search />
            </Route>
            {/* <Route path="/rentals"  />}/> */}
            <Route path="/library" render={() => <Library selectMovie={this.selectMovie} />}/>
            <Route path="/customers" render={() => <CustomerList selectCustomer={this.selectCustomer} />}/>
          </Switch>
        </div>
      </Router>
    )
  };
}

export default App;
