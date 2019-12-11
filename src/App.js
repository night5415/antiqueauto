import React from 'react';
import logo from './construction.png';
import './App.css';
import { SocialIcon } from 'react-social-icons';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="logo" src={process.env.PUBLIC_URL + '/logo.png'} />
      </header>
      <hr /> 
      <Router>
      <nav className="navigation">
        <Link to="/">Home</Link>
        <Link to="/project">Projects</Link>
        <Link to="/crew">The Crew</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>
    
      <main> 
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/project">
            <Project />
          </Route>
          <Route path="/crew">
            <Crew />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </main>
      </Router>
      <hr />
      <footer>
        <p>
          <div><a className="phone" href="tel:8166251651">(816) 625-1651</a></div>
          <div><a className="phone" href="mailto:antiqueautoworks@gmail.com">antiqueautoworks@gmail.com</a></div>
        </p>
        <div>
          <SocialIcon target="_blank" url="https://www.instagram.com/antiqueautoworks/" />
          <SocialIcon target="_blank" url="https://www.facebook.com/antiqueautoworks" />
        </div>
      </footer>
    </div>
  );
}

export default App;

function Contact() {
  return (
    <div>
      <h2>Contact Us</h2>
    </div>
  );
}

function Home() {
  return (
    <div>
       <p><img className="logo" src={logo} alt="Under Construction" /></p>
    </div>
  );
}

function Project() {
  return (
    <div>
         <h2>Projects</h2>
    </div>
  );
}

function Crew() {
  return (
    <div>
        <h2>The Crew</h2>
    </div>
  );
}
