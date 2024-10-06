import React, { useState } from 'react';
import './App.css';

function App() {
  // Step 2: State Hook to manage button text
  const [buttonText, setButtonText] = useState('Click Me!');

  // Step 3: Function to handle button clicks
  const handleClick = () => {
    setButtonText('You clicked me!');
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* Step 1: Personalized greeting */}
        <h1>Welcome to My First React App!</h1>
        
        {/* Step 2: Button with click event */}
        <button onClick={handleClick}>
          {buttonText}
        </button>

        {/* Step 1: Simple paragraph */}
        <p>
          I am learning React and this is my first change to the app!
        </p>
      </header>
    </div>
  );
}

export default App;
