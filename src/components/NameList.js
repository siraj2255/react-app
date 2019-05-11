import React,{components} from 'react';
import Person from './person';
function NameList() 
{
  const names=['apple','banana','graps','watermelon','mango','coconut']
  const nameList = names.map((name,index)=><h2 key={index}>{name}</h2>);

  const arrayObj = [{id:1,firstName:"siraj", lastName:"Doe", age:46},{id:2,firstName:"suraj", lastName:"Doe", age:46},{id:3,firstName:"John", lastName:"Doe", age:46},{id:4,firstName:"John", lastName:"Doe", age:46}]
  const personList =arrayObj.map(x=><Person key ={x.id} x={x} />)

  return (
    <div>
        {personList}
        {nameList}
    </div>
  )
}

export default NameList
