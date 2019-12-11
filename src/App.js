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
            <Story />
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

function Contact() {
  return (
    <div className="contact-main"> 
      <div>
        <div>Phone: <a className="phone" href="tel:8166251651">(816) 625-1651</a></div>  
        <div>Email: <a className="phone" href="mailto:antiqueautoworks@gmail.com">antiqueautoworks@gmail.com</a></div>
      </div>
      <div>
        Address: 
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3100.337328717231!2d-94.07564888464641!3d39.007617879553806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c11353c9bf8633%3A0xa2d019325d777fe3!2s203%20N%201st%20St%2C%20Bates%20City%2C%20MO%2064011!5e0!3m2!1sen!2sus!4v1576093344921!5m2!1sen!2sus" width="100%" height="450" frameborder="0"  allowfullscreen=""></iframe>
      </div>
    </div>
  );
}

function Home() {
  return (
    <div className="home">
       <img className="logo" src={logo} alt="Under Construction" />
    </div>
  );
}

function Story() {
  return (
    <div className="home">
       <p>blah blah blah</p>
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
  let people = [1,2,3,4];
  return (
    <div> 
        {
            people.map((person) => <Person person={person} />)
        } 
    </div>
  );
}

function Person(x) {
  console.log(x);
  return (
    <div>
         <h2>Person</h2>
    </div>
  );
}