import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import { useState } from 'react';
import { ThemeContext, ThemeProvider } from './contexts/ThemeContext';

function App() {
  const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('isDarkMode')))

  return (
    // <ThemeContext.Provider value={ [isDark, setIsDark] } >
      <ThemeProvider>
        <Header />
        <Outlet /> 
      </ThemeProvider>
          
    // </ThemeContext.Provider>
  )
}

export default App
