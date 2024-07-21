import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Divergence from './components/Divergence';
import Monitored from './components/Monitored';
import Organize from './components/Organize';
import Chat from './components/Chat';
import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Home />
      </div>
      <div className="container">
        <Divergence />
      </div>
      <div className="container">
        <Monitored />
      </div>
      <div className="container">
        <Organize />
      </div>
      <Chat />
    </div>
  );
}

export default App;