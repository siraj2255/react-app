import React, { Component } from 'react';   

function ChildComp(props)
 {
       return (
            <div>
                <button onClick={()=>props.parentHandler('Childcomponent')}>from Parent </button>
           </div>);
  }
 
export default ChildComp;