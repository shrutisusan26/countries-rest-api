import React, { useContext, useState } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';

function Header() {
  // const [isDark, setIsDark] = theme
  // console.log(isDark);
  const [isDark,setIsDark] = useContext(ThemeContext);

  // if(isDark)   document.body.classList.add('dark'); 
  // else document.body.classList.remove('dark');
  return (
    <header className={`header-container ${isDark? 'dark': ''}`}>
      
    <div className="header-content">
        <h2 className="title"><a href="/">Where in the world?</a></h2>
        <p onClick={() => {  
          setIsDark(!isDark);
          localStorage.setItem('isDarkMode', !isDark);
          }}><i className={`fa-solid fa-${isDark ? 'sun' : 'moon'}`}></i>&nbsp;&nbsp;{isDark? 'Light' : 'Dark' } Mode</p>
    </div>
    </header>
  )
}

export default Header
