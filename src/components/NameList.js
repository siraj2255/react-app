import React,{components} from 'react';
import Person from './person';
function NameList() 
{
  const names=['apple','banana','graps','watermelon','mango','coconut']
  const nameList = names.map(x=><h2>{x}</h2>);

  const arrayObj = [{firstName:"siraj", lastName:"Doe", age:46},{firstName:"suraj", lastName:"Doe", age:46},{firstName:"John", lastName:"Doe", age:46},{firstName:"John", lastName:"Doe", age:46}]
  const personList =arrayObj.map(x=><Person x={x} />)

  return (
    <div>
        {personList}
    </div>
  )
}

export default NameList
