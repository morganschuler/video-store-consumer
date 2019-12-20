import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Library from './components/Library.js'
import CustomerList from './components/CustomerList.js'
import Search from './components/Search.js'
import Customer from './components/Customer.js'
import Rentals from './components/Rentals.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home.js'
import './components/Home.css';




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
    <div className="App">

      <Router>
        <div>
          <nav>
            <ul className="Menu">
              <li className="side">
                <Link to="/home">HOME</Link>
              </li>
              <li className="side">
                <Link to="/library">RENTALS</Link>
              </li>
              <li className="side">
                <Link to="/customers">CUSTOMERS</Link>
              </li>
              <li className="side">
                <Link to="/search">SEARCH</Link>
              </li>
              <li className="selection">
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
            <Route path="/home" render={() => <Home />}/>

          </Switch>
        </div>
      </Router>
      </div>
    )
  };
}

export default App;
