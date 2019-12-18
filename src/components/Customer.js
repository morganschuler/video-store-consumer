import React from 'react';

const Customer = (props) => {
  const onSelectClick = (event) => {
    console.log(event.target.id);
  }
    return (
      <section>
      {props.name}
      {<button id={props.id} onClick={onSelectClick}>Select</button>}
      </section>
    );
}
export default Customer; 