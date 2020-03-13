import React from 'react';
import { Provider } from 'react-redux'
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'

// Strore
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <Home />
      </div>
    </Provider>
  );
}

export default App;
