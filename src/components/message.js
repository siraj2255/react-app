import React, { Component } from 'react';


class Message extends Component {
   
    constructor()
    {
        super()
        
        this.state={
            message:" to my web app"
        }

    }

    changeMsg()
    {
           this.setState({
            message:'thank you for subscribing'
           }) 
    }

    render() { 
        return (
        <div> 
            <h1>Welcome : {this.state.message} <button onClick={()=>this.changeMsg()}>subscribe</button> </h1> 
            
        </div>
        );
    }
}
 
export default Message ;      