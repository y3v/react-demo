import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js'
import './Person/Person.css';

class App extends Component {

  state = {
    persons: [
      {id:"asdfas",name:"Yev Kantorovich"},
      {id:"asdfasdfg",name:"Yevgeni"},
      {id:"asdf4",name:"Zhenya"}
    ],
    showPersons : false
  }

  switchNameHandler = (newName) => {
    //console.log("Was clicked properly");
    //To change the state
      this.setState({
        persons: [
          {name:"Yev"},
          {name: newName},
          {name:"Zhenya K"}
        ]
      })
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p=>{
      return p.id === id;
    })

    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
        persons:persons
    })
  }

  togglePersonsHandler = ()=>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons : !doesShow})
    console.log("Show: " + doesShow)
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({persons: persons})
    console.log("Deleteing")
  }

  render() {
    const style={
      backgroundColor:"white",
      font:'inherit',
      border: "1px solid blue",
      padding: "8px",
      cursor:"pointer"
    }

    let persons = null;

    if (this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
              return <Person
              click={() => this.deletePersonHandler(index)}
              brap={person.name}
              key={person.id}
              change={(event) => {this.nameChangedHandler(event, person.id)}}
              />
          })}
        </div>
      )
    }

    return (
      <div className="App">

          <h1>React!!</h1>
          <button style={style} onClick= {this.togglePersonsHandler} >Switch Name</button>
          {persons}

      </div>
    );

    //return React.createElement('div', null, React.createElement('h1', {className: 'App'}, "SHHITT SON"))
  }
}

export default App;
