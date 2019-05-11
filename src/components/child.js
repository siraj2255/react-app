import React from 'react'

// functional compoent 
const Child =props=>{ 
console.log(props);
const {uname,lstname} =props

return( 
    <div>
        <h2>  Child components  </h2>
            <p> name : {uname}  LastName : {lstname}</p>
    <span > {props.children} </span>
    </div>
)
}

export default Child;