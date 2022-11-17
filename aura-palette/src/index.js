import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './Views/AppView/App';
import Profile from './Views/ProfileView/Profile';

export default function Root() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index path="/" element={<App />} />
          <Route path="profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root />);