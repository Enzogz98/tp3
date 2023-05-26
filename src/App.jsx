// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import "./App.css";
import Error404 from "./components/Error404.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<Error404/>}/>
        </Routes>
      </BrowserRouter>
      
      
    </>
  );
}

export default App;
