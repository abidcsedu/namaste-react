import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../../hooks/useOnline";
import Title from "./Title";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isOnline = useOnline();

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to='/instamart'>Instamart</Link>
          </li>
        </ul>
      </div>
      {isOnline ? <h2>Online</h2> : <h2>Offline</h2>}
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Log Out</button>
      ) : (
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Log In</button>
      )}
    </div>
  );
};

export default Header;
