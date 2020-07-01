import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <img src='./ndebeblackicon.png' alt='logo' />
      </header>
      <div className='container'>
        <div className='leftside'>
            <h2>Type Ndebe</h2>
            <h3>This changes your text from english to ndebe like so:</h3>
            <p>man <span>to</span> <img src='./igboscript' alt='something'/></p>
            <p>woman <span>to</span> <img src='./igboscript' alt='something'/></p>
            <p>child <span>to</span> <img src='./igboscript' alt='something'/></p>
        </div>
        <div className='rightside'>
          <div className='top'>
            <h2> Type a message here</h2>
            <label>Maximum character count is 128</label>
            <input name='translate' type='text' />
            <button onClick >Share Your Ndebe Text</button>
          </div>
          <div className='bottom'>
            <img src='./logo.svg' alt='typed' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
