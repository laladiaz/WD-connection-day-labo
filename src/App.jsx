import {
  Routes,
  Route
} from "react-router-dom";
import React from "react";
import './App.css';
import Layout from "./components/Layout";
import MainPage from "./components/views/MainPage";

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
