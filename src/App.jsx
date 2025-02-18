import React from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import './App.css'
import Home from './pages/Home'
import NavBar from './components/NavBar';
import Footer from "./components/Footer"
import About from "./pages/About";


function Layout() {
  return (
    <div className="layout">
     <NavBar />
      <main className="content">
        <Outlet /> 
      </main>
      <Footer />
    </div>
  );
}
function App() {
  return (
    <>
       <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Home />} />
        <Route path="about" element={<About />}>
      </Route>
    </Routes>
    </>
  )
}

export default App
