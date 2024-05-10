
import './App.css';
import React from 'react';
import { Route, Router, Routes, BrowserRouter } from 'react-router-dom';

//component
import Main from './component/Main';
import Header from './component/header/Header';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path='/' Component={Main}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
