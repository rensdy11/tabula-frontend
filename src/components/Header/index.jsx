import React from 'react';
import NavBar from '../NavBar';
import user from '../../assets/user.png'
import { Link } from "react-router-dom"

function Header(){
  return (
    <header className="bg-gray-800 text-white p-4">
      <img src={user} alt="user" />
      <input type="search" placeholder='Search...'/>
      <NavBar />
    </header>
  );
};

export default Header;
