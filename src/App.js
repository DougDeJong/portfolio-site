import React, { Component } from 'react';
import { Switch, Route, Link} from 'react-router-dom'
import logo from './logo.svg';
import myface from './myface.jpg'
import './App.css';
import Hockey  from './components/Hockey'
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
            <p>Type 1 Diabetic | Music Producer | EA Gamechanger | <Link to={'/hockey'}>Hockey Lover</Link></p>
            <p>Click any of the above to find out more...</p>
          <a
            className="App-link"
            href="https://github.com/DougDeJong"
            target="_blank"
            rel="noopener noreferrer"
          >
            My Github
          </a>
          
        </header>
        <Switch>
        <Route exact path='/hockey' component={Hockey}/>

        </Switch>
      </div>
    );
  }
}

export default App;
