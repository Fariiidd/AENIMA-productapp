import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// COMPONENTS
import Navbar from './components/Navbar/Navbar'
import Home from './components/Pages/Home/Home';

// STYLES
import GlobalStyles from './globalStyles'
import { Color } from './style';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <Navbar />
        <Color>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </Color>
      </BrowserRouter>
    </>
  )
}

export default App