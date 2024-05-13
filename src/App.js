
import './App.css';
import React from 'react';
import { Route, Router, Routes, BrowserRouter } from 'react-router-dom';

//component
import Main from './component/Main';
import Header from './component/header/Header';
import Button from './component/button/Button';
import Name from './component/inputText/Name';
import JsonApi from './component/jsonapi/JsonApi';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path='/' Component={Main}/>
        <Route path='/button' Component={Button}/>
        <Route path='/name' Component={Name}/>
        <Route path='/json' Component={JsonApi}/>
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
