import React, { Component } from 'react';   
import ChildComp from './ChildComp';
class ParentC extends Component {
  
    constructor()
    {
        super()

        this.state={
            parentName :'I am from parent'
        }
        this.greetParent = this.greetParent.bind(this);
    }

    greetParent(childName)
    {
        alert(`hello : ${this.state.parentName} from and this is from : ${childName}`)
    }

    render() { 
        return (<ChildComp parentHandler={this.greetParent}/>);
    }
}
 
export default ParentC ;