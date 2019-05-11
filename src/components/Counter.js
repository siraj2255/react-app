import React, { Component } from 'react';


class Counter extends Component {
   
    constructor()
    {
        super()
        this.state={
            counter:0
        }
    }

    onIncrement()
    {
        // this.setState({
        //     counter: this.state.counter+1
        // },()=>{console.log('Callback value : ',this.state.counter)})

        this.setState((prevState,props)=>({
            counter: prevState.counter + 1
        }))

        console.log(this.state.counter);
    }

    onIncrementALL()
    {
        this.onIncrement();
        this.onIncrement();
        this.onIncrement();
        this.onIncrement();
        this.onIncrement();
    }



    render() { 
        return (
        <div> 
            <h1>Count : : {this.state.counter}</h1>
            <button onClick={()=>this.onIncrementALL()}>Increment </button>
        </div>
        );
    }
}
 
export default Counter ;      