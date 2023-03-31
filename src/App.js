import React, { Component, useState } from 'react';
import './App.css';
import Watsapp from './context/watsap';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Chatlist from './Components/Chatlist/Chatlist';
import ButtonLinks from './Components/ButtonLinks/ButtonLinks';

const App = (props) => {
  
  const [ theme, setTheme ] = useState('light')

  const changeMode  = () =>{
    setTheme(()=>{
      return theme === 'light' && 'dark' || 'light'
    })
  }

  return (
    <div className='App'>
    <div className={`main ${theme} modeDiv`}>
      <button onClick={()=> changeMode()} className={`main ${theme} themeModeBTn`}>

        {theme === 'light' && 'Dark Mode' || 'Light Mode'}

        </button>
    </div>

      <Watsapp.Provider value={theme} >
        <Navbar />
        <Header />
        <Chatlist/>
        <ButtonLinks/>
      </Watsapp.Provider>
    </div>
  );
}

export default App;
