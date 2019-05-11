import React from 'react';   

function Person({x}) {
  return (
    <div>
        <h3>i am {x.firstName} i am now {x.age} year old.</h3>
    </div>
  )
}

export default Person
 