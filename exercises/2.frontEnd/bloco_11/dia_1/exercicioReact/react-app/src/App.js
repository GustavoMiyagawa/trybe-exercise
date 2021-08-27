import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const animals = ['Lion', 'Horse', 'Hawk', 'Crow'];

class App extends React.Component{
  render() {
    return animals.map((animal) => {
      return Task(animal)
    });
  }
}

export default App;
