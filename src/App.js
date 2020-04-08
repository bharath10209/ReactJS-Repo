import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons: [
      {id : '1', name: 'React', age: 27 },
      {id : '2', name: 'Test', age: 28 }
    ],
    other: { objName: 'testsda' },
    showDicv: false
  };

  switchNameHandler = () => {
    const dataval = this.state.showDicv;
    this.setState({
      showDicv: !dataval
    })
  }

  nameChangeHandler = (event,id) => {
    const personObjIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const personObj = { 
      ...this.state.persons[personObjIndex]
    };
    personObj.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personObjIndex] = personObj;

    // const personObjIndexObj = this.state.persons.find(p => {
    //   return p.id === id;
    // })
    // console.log(personObjIndexObj);

    this.setState({
      persons: persons
    })
  }

  deletePersonHandler = (indexValue) =>{
    // const personArray = this.state.persons.slice();
    const personArray = [...this.state.persons];
    personArray.splice(indexValue,1);
    this.setState({persons : personArray}) ;
  }

  render() {
    let persons = null;
    if (this.state.showDicv) {
      persons = (
        <div>
          {this.state.persons.map((persondata,index) => {
            return <Person click={()=>this.deletePersonHandler(index)} 
            name={persondata.name} 
            age={persondata.age}
            key = {persondata.id}
            changed = {(event)=> this.nameChangeHandler(event,persondata.id)}/>
          })}
          {/* <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age} changed={this.nameChangeHandler}>Test project</Person> */}
        </div>
      )
    }
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <button onClick={this.switchNameHandler}>Switch Name</button>
        {persons}
      </div>

    );
  }
}

export default App;
