import React from 'react'

function List(props) {
  return (
    <div>
    <ol>
        <li>{props.Electronic}</li>
        <li>{props.Clothes}</li>
        <li>{props.Kids}</li>
        <li>{props.KidsGarmet}</li>
        <li>{props.Mens}</li>
    </ol>
    </div>
  )
}

export default List