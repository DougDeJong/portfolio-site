import React, { Component } from 'react';
import logo from './logo.svg';
import myface from './myface.jpg'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={myface} className="App-logo" alt="logo" />
          <p>
            Hi! I'm Douglas DeJong.          </p>
            <p>I'm a full-stack Web Developer specializing in the MERN Stack</p>
            <p>I'm also a...</p>
            <p>Type 1 Diabetic | Music Producer | EA Gamechanger | Hockey Lover</p>
          <a
            className="App-link"
            href="https://github.com/DougDeJong"
            target="_blank"
            rel="noopener noreferrer"
          >
            My Github
          </a>
        </header>
      </div>
    );
  }
}

export default App;
