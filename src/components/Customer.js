import React from 'react';

const Customer = (props) => {
  const onSelectClick = (event) => {

props.selectCustomerCallback(props.name)
  }
    return (
      <section>
      {props.name}
      {<button id={props.id} onClick={onSelectClick}>Select Customer</button>}
      </section>
    );
}
export default Customer; 
