import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import NoteState from './Context/notes/NoteState';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Alert from './Components/Alert';
function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert message="This is alert" />
          <div className='Container'>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
            </Switch>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
