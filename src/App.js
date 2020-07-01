import React, { useState } from 'react';
import './App.css';

function App() {

  let [text, setText] = useState()

  const inputHandler = e => {
    setText(e.input)
  }

  const shareCurrent = () => {
    
  }



  return (
    <div className="App">
      <header>
        <img src='./ndebeblackicon.png' alt='logo' />
        <p>Social Media Link</p>
      </header>
      <div className='container'>
        <div className='leftside'>
            <h2>Type Ndebe</h2>
            <h3>This changes your text from english to ndebe like so:</h3>
            <p>man <span>to</span> <img src='./igboscript.png' alt='something'/></p>
            <p>woman <span>to</span> <img src='./igboscript.png' alt='something'/></p>
            <p>child <span>to</span> <img src='./igboscript.png' alt='something'/></p>
        </div>
        <div className='rightside'>
          <div className='top'>
            <h2> Type a message here</h2>
            <label>Maximum character count is 128</label>
            <input onChange={inputHandler} name='translate' type='text' maxLength={128} />
            <button onClick={shareCurrent} >Share Your Ndebe Text</button>
          </div>
          <div className='bottom'>
            <img src='./ndebeblackicon.png' alt='typed' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
