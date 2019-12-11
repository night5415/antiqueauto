import React from 'react';
import logo from './construction.png';
import './App.css';
import { SocialIcon } from 'react-social-icons';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="logo" src={process.env.PUBLIC_URL + '/logo.png'} />
      </header>
      <hr />
      <main> 
        <p><img className="logo" src={logo} alt="Under Construction" /></p>
      </main>
      <hr />
      <footer>
        <p>
          <div><a className="phone" target="_blank" href="tel:8166251651">(816) 625-1651</a></div>
          <div><a className="phone" target="_blank" href="mailto:antiqueautoworks@gmail.com">antiqueautoworks@gmail.com</a></div> 
        </p>
        <div>
          <SocialIcon url="https://www.instagram.com/antiqueautoworks/" />
          <SocialIcon url="https://www.facebook.com/antiqueautoworks" /> 
        </div>
      </footer>
    </div>
  );
}

export default App;
