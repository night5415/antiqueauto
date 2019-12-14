import React from 'react'; 
import './App.css';
import { SocialIcon } from 'react-social-icons';
import { employees, bio, projects } from './data/data.js'
import {
  BrowserRouter as Router,
  Switch,
  Route 
} from "react-router-dom"; 
import Contact from './components/Contact';
import Crew from './components/Crew';
import Story from './components/Story';
import Home from './components/Home';
import Project from './components/Project';
import { FullMenu, HamburgerMenu} from './components/Menu';

function App() {
  let date = new Date().getFullYear();
  return (
    <div className="App">
      <header className="App-header">
        <img alt="company logo" className="logo" src={process.env.PUBLIC_URL + '/logo.png'} />
      </header>
      <hr />
      <Router>
        <HamburgerMenu />
        <FullMenu />
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/project">
              <Project projects = {projects}/>
            </Route>
            <Route path="/story">
              <Story story = {bio} />
            </Route>
            <Route path="/crew">
              <Crew employees={employees}/>
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </main>
      </Router>
      <hr />
      <footer> 
        <div>
          <SocialIcon target="_blank" url="https://www.instagram.com/antiqueautoworks/" />
          <SocialIcon target="_blank" url="https://www.facebook.com/antiqueautoworks" />
        </div>
        <div className="copyright"><i >Copyright {date}</i></div>
      </footer>
    </div>
  );
}

export default App;
 


 

 