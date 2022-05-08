import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FrontPage, MainPage } from './pages';

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<MainPage />} />
        <Route path="/" element={<FrontPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
