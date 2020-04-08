// import React, { useState } from 'react';
// import Person from './Person/Person';
// import './App.css';

// const app = props => {
//   const [stateArr, updateState] = useState({
//     persons : [{name : 'React', age : 27},{name : 'Test', age : 28}]
//   });

//   const switchNameHandler = ()=> {
//     console.log("clicked");
//     updateState({
//       persons : [{name : 'React Test', age : 27},{name : 'Test', age : 28}]
//      })
//   }

//   // render() {
//     return (
//       <div className="App">
//         {/* <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p> */}
//         <Person name = {stateArr.persons[0].name} age = {stateArr.persons[0].age}></Person>
//         <Person name = {stateArr.persons[1].name} age = {stateArr.persons[1].age}>Test project</Person>
//         <button onClick  = {switchNameHandler}>Switch Name</button>
//       </div>
//     );
//   }
// // }

// export default app;
