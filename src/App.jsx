import {
  Routes,
  Route
} from "react-router-dom";
import React from "react";
<<<<<<< HEAD
import './App.css'
import Header from "./Header"
=======
import './App.css';
import Layout from "./components/Layout";
import MainPage from "./components/views/MainPage";
>>>>>>> main

function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='/' element={<MainPage/>}/>
      </Route>
    </Routes>
  )
}

export default App
