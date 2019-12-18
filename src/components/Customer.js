import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Customercss from './Customer.css'


class Customer extends Component {
  constructor(props) {
    super(props)
    }
//need an onclick action here?

render() {
  return (
  <h4> {this.props.name} </h4>
  )}
}

export default Customer;
