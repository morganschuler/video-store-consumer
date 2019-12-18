import React, { Component } from 'react';

class Customer extends Component {
  constructor(props) {
    super(props)
    }

render() {
  return (
  <h4> {this.props.name} </h4>
  )}
}

export default Customer;