import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './Views/AppView/App';
import Profile from './Views/ProfileView/Profile';
import Settings from './Views/SettingsView/Settings';

export default function Root() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index path="/" element={<App />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root />);