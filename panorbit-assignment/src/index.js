import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/homePage/HomePage';
import ProfilePage from './components/profilePage/ProfilePage';
import PostPage from './components/postPage/PostPage';
import LandingPage from './components/landingPage/landingPage';
import { UserProvider } from './context/UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <UserProvider>
    <Routes>
          <Route element={<HomePage/>}>
            <Route index element={<ProfilePage/>} />
            <Route path="/posts" element={<PostPage/>} />
          </Route>
          <Route path="/landing" element={
        <div className="App">
          <LandingPage />
        </div>
      } />
        </Routes>
        </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
