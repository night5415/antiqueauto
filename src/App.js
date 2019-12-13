import React from 'react'; 
import './App.css';
import { SocialIcon } from 'react-social-icons';
import { employees, bio, projects } from './data/data.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Car from './components/Car';
import Contact from './components/Contact';
import Crew from './components/Crew';
import Story from './components/Story';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img alt="company logo" className="logo" src={process.env.PUBLIC_URL + '/logo.png'} />
      </header>
      <hr />
      <Router>
        <nav className="navigation">
          <Link to="/">Home</Link>
          <Link to="/project">Projects</Link>
          <Link to="/story">Our Story</Link>
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
          <div><a className="phone" href="tel:8166251651">(816) 625-1651</a></div>
          <div><a className="phone" href="mailto:antiqueautoworks@gmail.com">antiqueautoworks@gmail.com</a></div>
        </div>
        <div>
          <SocialIcon target="_blank" url="https://www.instagram.com/antiqueautoworks/" />
          <SocialIcon target="_blank" url="https://www.facebook.com/antiqueautoworks" />
        </div>
      </footer>
    </div>
  );
}

export default App;
 
function Project() {
  return (
    <div className="project">
      {
        projects.map((project) => <Car key={project.id.toString()} project={project} />)
      } 
    </div>
  );
} 

 

 