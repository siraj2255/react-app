import React, { Component } from 'react';   
 import Child from './components/child';
 import Classcomponent from './components/Welcome';
 import Message from './components/message';
 import Counter from './components/Counter';
 import FunctionClick from './components/FunctionClick';
 import ClassClick from './components/ClassClick';
 import ParentC from './components/ParentC';
 import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
 
 class App extends Component {
    render() { 
        return ( 
             <React.Fragment>
             <UserGreeting />
              <NameList />
             {/* <Message />
             <Counter />
               
            <Child uname ="siraj" lstname ="jamadar">
                <p>under childern props </p>
            </Child>

            <FunctionClick />
            <ClassClick />

            <ParentC /> */}

              {/*  <Child uname ="mejo" lstname ="jamadar">
                   <button>Action</button>
                   </Child>

               <Classcomponent welcome ="welcome back rect"/> */}
            
            
            </React.Fragment>

         );
    }
}
 
export default App;