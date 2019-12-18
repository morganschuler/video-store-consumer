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


  render() {

    return (
      <div >
        <header>
          <CustomerList />
        <h1 className="App-title">That's showbiz, baby!</h1>
        </header>
        <p className="App-intro">
           <p>Search</p> 
           <p>Rental Library</p> 
           <a>Customers</a> 
        </p>
        </div>
    );
  }
}

  // return (
  //   <Router>
  //     <div>
  //       <nav>
  //         <ul>
  //           <li>
  //             <Link to="/">Home</Link>
  //           </li>
  //           <li>
  //             <Link to="/search">Search</Link>
  //           </li>
  //           <li>
  //             <Link to="/rentals">Rental List</Link>
  //           </li>
  //           <li>
  //             <Link to="customers">Customers</Link>
  //           </li>
  //         </ul>
  //       </nav>

//         {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//         <Switch>
//           <Route path="/search">
//             <Search />
//           </Route>
//           <Route path="/rentals">
//             <Rentals />
//           </Route>
//           <Route path="/customers">
//             <Customers />
//           </Route>
//           <Route path="/">
//             <Home />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );


// function Home() {
//   return <h2>Home</h2>;
// }

// function Search() {
//   return <h2>Search</h2>;
// }
// function Rentals() {
//   return <h2>Rentals</h2>;
// }

// function Customers() {
//   return <h2>Customers</h2>;
// }


export default App;
