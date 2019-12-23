// import React from 'react'

// const Customer = (props) => {
//   // const onMovieSelect = (event) => {
//   //   const movie = props.title;

//   //   this.props.onMovieSelectCallback(movie)
//   // }
//   return (
//     <div>
//       <h3>{props.name}</h3>

//       <button
//         type="button"
//         onClick={() => {props.findCustomer(props.id)}}>
//           {console.log(props.id)}
//       Select Me
//       </button>
//     </div>
//   )
// }

// export default Customer; 

import React from 'react';
import { Table } from 'reactstrap';
import "./CustomerList.css";
const Customer = (props) => {
  return (
    <div>
      <Table>
      <thead>
        <tr>
          <th>ID</th>
          <th className="name">Name</th>
          <th className="account-credit">Account Credit</th>
          <th className="phone">Phone Number</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">{props.id}</th>
          <td className="table-name" onClick={() => {props.findCustomer(props.id)}}>{props.name}</td>
          <td className="table-credit"onClick={() => {props.findCustomer(props.id)}}>{props.account_credit}</td>
      <td className="table-phone" onClick={() => {props.findCustomer(props.id)}}>{props.phone}</td>
        </tr>
        </tbody>
      </Table>
    </div>
  );
}
export default Customer;