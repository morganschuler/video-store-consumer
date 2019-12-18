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
import Customer from './components/Customer.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedMovie: '',
      selectedCustomer: '',
      // selectedCustomerId: null,
      message: '',
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
  

// onSelectedCustomer = (customer) => {
//   this.setState({
//     selectedCustomer: Customer,
//   });
// }

// onSearchChange = (searchTerm) => {
//   this.setState({
//     searchTerm,
//   });
// }

// filteredMovieList = () => {
//   return this.state.movieList.filter((movie) => {
//     const text = `${ movie.name }`.toLocaleLowerCase();
//     return text.includes(this.state.searchTerm.toLocaleLowerCase());
//   });
// }

// function Index() {
//   return <h2>Home</h2>;
// }

// function Search() {
//   return <h2>Search</h2>;
// }

// function Library() {
//   return <h2>Library</h2>;
// }

// function Customers() {
//   return <h2>Customers</h2>;
// }


render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              {this.state.selectedMovie.title}
              {this.state.selectedCustomer.name}
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
            </ul>
          </nav>

          
          <Switch>
            <Route path="/search">
              <Search />
            </Route>
            <Route path="/rentals" render={() => <Rentals movie={this.selectMovie} customer={this.selectCustomer} />}/>
            <Route path="/library" render={() => <Library selectMovie={this.selectMovie} />}/>
            <Route path="/customers" render={() => <CustomerList selectCustomer={this.selectCustomer} />}/>
          </Switch>
        </div>
      </Router>
    )
  };
}

export default App;
