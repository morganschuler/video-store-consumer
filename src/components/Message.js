import React from 'react'
const Message = (props) => {

  return (
      <div>

      {props.message && 
        <p>{props.message}</p>
      }
      </div>

    )
}
export default Message;