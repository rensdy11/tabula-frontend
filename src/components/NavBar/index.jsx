import { Link } from "react-router-dom";


function NavBar() {
  return (
    <nav className="space-x-4 bg-gray-800 text-white p-5 rounded-sm">
      <ul className="flex space-x-4 rounded-xs">
        <li><Link to="/" className="hover:text-yellow-400 font-bold">Home</Link></li>
        <li><Link to="/about" className="hover:text-yellow-400 font-bold">About</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;