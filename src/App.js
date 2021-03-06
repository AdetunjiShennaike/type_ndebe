// Dependencies
import React, { useState } from 'react';
// API
// import Airtable from 'airtable'
import { glyphs } from "./assets/ndebeGlyphs.json";

// Styling
import './App.css';

function App() {
  // State
  let [display, setDisplay] = useState([])
  // let [loading, setLoading] = useState(false)
  
  // Air table API 
  // const base = new Airtable({apiKey: 'process.env.REACT_APP_API_KEY'}).base('process.env.REACT_APP_BASE_ID')
  
  
  // Image look up
  const lookUp = word => {
    if(word.length > 1){
      for(let i = 0;i < word.length;i++){
        console.log(word.substring(i, i + 1))
        for(let j = i + 1;j < word.length;j++){
          if(glyphs[word.substring(i, j)]){
            setDisplay([...display, glyphs[word.substring(i, j)]])
            console.log('add')
          }
        }
      }
    }
  }

  // Text input handler
  const inputHandler = e => {
    setDisplay([])
    lookUp(e.target.value)
  }

  // Post to twitter
  const shareCurrent = () => {
    window.location.href='https://twitter.com/intent/tweet?text=I%20wrote%20Igbo%20in%20Ndebe%20using%20https%3A%2F%2Fndebe.org%20for%20%23NdebeForIgbo&original_referer=https://typendebe.com'
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
