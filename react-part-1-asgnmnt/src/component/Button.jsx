import React from 'react'

function ButtonCom(props) {
    function onClick() {
         return(
            <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi cum obcaecati est ab molestiae blanditiis corporis repellat reiciendis voluptas officiis dolorem, aut, asperiores nulla necessitatibus eveniet laboriosam? Libero, doloribus tempore?</p>
            </div>
         )
    }

  return (
    <div>
      <button onClick= {onClick}> {props.text} </button>
      
      
        
        
    </div>
  )
}

export default ButtonCom