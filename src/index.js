import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ChatProvider from './context/ChatProvider'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <ChatProvider>
      <App />  
    </ChatProvider>
  </React.StrictMode>,
  document.getElementById('root')
);