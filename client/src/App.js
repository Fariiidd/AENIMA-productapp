import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// COMPONENTS
import Navbar from './components/Navbar/Navbar'

// STYLES
import GlobalStyles from './globalStyles'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <GlobalStyles />
      <Navbar />
      
      </BrowserRouter>
    </>
  )
}

export default App