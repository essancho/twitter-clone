import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { FrontPage } from '../pages';

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
