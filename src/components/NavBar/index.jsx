import { Link } from "react-router-dom";

function NavBar () {
  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between">
      <h1 className="text-xl font-bold">My Website</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:text-yellow-400 font-bold">Home</Link>
        <Link to="/about" className="hover:text-yellow-400 font-bold">About</Link>
      </div>
    </nav>
  );
};

export default NavBar;