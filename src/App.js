import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';

/**
  Challenge: Display all users to the browser
**/

const users = [
  { name: "John Doe", id: 1 },
  { name: "Jane Doe", id: 2 },
  { name: "Billy Doe", id: 3 }
];

// comment this out after completion and uncomment code below it to proceed
// function Child() {
//   return <div><h1>This is children content</h1></div>;
// }

  //Challenge: Uncomment this code to complete quiz

function handleClick(event){
  console.log(event)
}

// function handleChange(event){
//   console.log (event.target.value)
// }

function Child() {
  return (
    <>
      <div>Child</div>
      <button>Change Parent Value</button>
    </>
  );
}

function Parent() {
  const [value, setValue] = React.useState(
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
        <Child />
      </div>
    </>
  );
}
//Uncomment this to tackle quiz

// Comment out after completion
// function Parent() {
//   return (
//     <div>
//       <h3>Parent Component</h3>
//     </div>
//   );
// }
// Comment above code after completion
// const userNames= users.map((users)=>
// <li key={users.id}>
//   {users.toString}
// </li>)

// const [isVisible, setIsVisible]= useState(true)
// setIsVisible(false)
// setIsVisible(false)

// setIsVisible(prevIsVisibleValue => !prevIsVisibleValue)

function App() {
  const [] = React.useState(true);
  return (
    
    <>
    <p><h1>'JSX IS COOL !!'</h1></p>
    <img src={'https://raw.githubusercontent.com/jsx-ir/logo/master/jsx.png'} className="App-logo" alt="logo" />
    
      <h3>User names</h3>
      <ul>
      
      </ul>
      <button>Hide Element Below</button>

      <div> Toggle Challenge</div>
      <Parent>
      <Child />
    </Parent>
    </>
  );
}

export default App;
