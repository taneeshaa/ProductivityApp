import React, { useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  const handleSendMessage = async () => {
    if (window.electronAPI) {
      try {
        const response = await window.electronAPI.sendMessage('Hello from React!');
        setMessage(response);
      } catch (error) {
        console.error('Error sending message:', error);
      }
    } else {
      setMessage('Running in browser - Electron APIs not available');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>My React Desktop App</h1>
        <button onClick={handleSendMessage}>
          Test Electron Communication
        </button>
        {message && <p>{message}</p>}
      </header>
    </div>
  );
}

export default App;