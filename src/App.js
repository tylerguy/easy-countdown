import React from 'react';
import './App.css';
import Home from './scenes/Home';
import particlesJS from 'particles.js'

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particlesjs-config.json', function() {
  console.log('callback - particles.js config loaded');
});

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
