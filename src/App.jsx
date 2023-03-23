import {
  Routes,
  Route
} from "react-router-dom";
import React from "react";
import './App.css'
import Header from "./Header"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        {/* <Route path="/" element={} /> */}
        {/* catch all */}
        {/* <Route path="*" element={<Missing />} /> */}
      </Route>
    </Routes>
  )
}

export default App
