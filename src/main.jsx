import React from 'react';
import ReactDOM from 'react-dom/client';
import { GifExpertApp } from './GifExpertApp';
import './styles.css';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>
)


//como ordenarlo? mejor hacerlo por funcionalidades 
//(dependiendo de que tan grande sea la app)