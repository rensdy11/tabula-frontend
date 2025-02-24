import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Home from './pages/Home'
import Header from "./components/Header";
import Footer from "./components/Footer"
import About from "./pages/About";
import SignUp from "./components/SignUp";
import LocationDetails from "./pages/LocationDetails";


function Layout() {
  return (
    <div className="layout">
      <Header />
      <main className="content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="signUp" element={<SignUp/>}/> 
        <Route path="/location/:id" element={<LocationDetails />} />  
      </Route>
    </Routes>
  );
}

export default App;