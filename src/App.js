import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import axios from 'axios';
import CustomerList from './components/CustomerList';
import './App.css';
import Customer from './components/Customer';
import Search from './components/Search.js'
import Library from './components/Library.js';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedMovie: [],
      selectedCustomer: '',
      selectedCustomerId: null,
      message: '',
      customerList: []
    }
  };

  componentDidMount() {
    axios.get('http://localhost:3000/customers')
      .then((response) => {
        this.setState({ customerList: response.data });
      })
      .catch((error) => {
        this.setState({ error: error.message });
      });
  }
  onSelectedCustomer = (CustomerId) => {
    const customerToSelect = this.state.customerList.find(customer => customer.id === CustomerId);
    this.setState({
      selectedCustomer: customerToSelect,
    });
  }

  onSelectedMovie = (movie) => {
    this.setState({
      selectedMovie: movie,
    });
  }

//checkedOutMovie if selected customer and selected movie
//send this data to the api
//will need an axios post request


Index() {
  return <h2>Home</h2>;
}

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
          <Route path="/library">
            <Library />
          </Route>
          <Route path="/customers">
            <CustomerList 
             customers={this.state.CustomerList}
             selectPetCallback={this.onSelectPet}/>
          </Route>
        </Switch>
      </div>
    </Router>
  )};
}

export default App;