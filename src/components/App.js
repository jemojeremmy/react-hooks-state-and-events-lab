// App.js
import React, { useState } from 'react';


function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark' : 'light'}`}>
      <button onClick={toggleDarkMode}>Toggle Mode</button>
    </div>
  );
}

export default App;
