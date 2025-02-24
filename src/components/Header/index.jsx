import React from 'react';
import NavBar from '../NavBar';
import user from '../../assets/user.png'
import { Link } from "react-router-dom"

function Header(){
  return (
    <header className="bg-yellow-900 text-white p-6 ">
      <img src={user} alt="user"className="w-20 h-20"/>
      <input type="search" placeholder='Search...' />
      <NavBar />
    </header>
  );
};

export default Header;

