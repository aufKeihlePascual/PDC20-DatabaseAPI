import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import './event.css'
// import UserProfilePage from './Profile/UserProfilePage.jsx'
import MainEvent from './Events/MainEvent.jsx';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>
);
