import React, { useState } from "react";
// import logo from './logo.svg';
import './App.css';



const users = [
  { name: "John Doe", id: 1 },
  { name: "Jane Doe", id: 2 },
  { name: "Billy Doe", id: 3 }
];

  function Child({ onAddToParent }) {

    return (
      <>
        <div>Child</div>
        <button onClick={onAddToParent}>Change Parent Value</button>
      </>
    );
  }
  
  function Parent() {
    const [value, setValue] = useState(
      "I need to be updated from my child"
    );
  
    return (
      <>
        <h3>Update Parent State Challenge (Using Callback)</h3>
        <div className="wrapper">
          <div>Parent</div>
          <div className="box-wrapper">{value}</div>
        </div>
  
        <div className="wrapper">
          <Child onAddToParent={() => setValue(' jSX isnt that cool')}/>
        </div>
      </>
    );
  }
  
  
  function App() {
    
    const [toggleChallenge, setToggleChallenge] = useState(false);
    
    const users = [
      { name: "John Doe", id: 1 },
      { name: "Jane Doe", id: 2 },
      { name: "Billy Doe", id: 3 }
    ];
  
   
    
    function handleClick() {
      setToggleChallenge(toggleChallenge ? "" : "Toggle Challenge")
      return toggleChallenge
    }
  
  
    return (
      
      <> 
        <h1>JSX is cool!</h1>   
        <img src={'https://raw.githubusercontent.com/jsx-ir/logo/master/jsx.png'} className="App-logo" alt="logo" />
        <h3>User names</h3>
        <ul>
        {users.map(users=>{
          return(
            <li key={users.id}>{users.name}</li>
          )
        })}
      
        </ul>
        <button onClick={handleClick} > { toggleChallenge ? 'Hide Element Below' : 'Show Element' } </button>
  
        <div>{toggleChallenge}</div>
        <Parent>
        <Child />
        </Parent>
      </>
    );
  }
  
  export default App;