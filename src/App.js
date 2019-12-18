import React from 'react';
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

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedMovie: [],
      selectedCustomer: '',
      selectedCustomerId: null,
      message: '',
    }
  }

// onSelectedCustomer = (customer) => {
//   this.setState({
//     selectedCustomer: Customer,
//   });
// }

// onSelectedMovie = (movie) => {
//   this.setState({
//     selectedMovie: movie,
//   });
// }

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



AppRouter() {
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
            <Customers />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default AppRouter;
