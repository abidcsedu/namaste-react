import { useState } from "react";
import { Link } from "react-router-dom";
import Title from "./Title";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li >
            <Link to="/about">About</Link>
          </li>
          <li><Link to='/contact'>Contact</Link></li>
          <li><Link to='/cart'>Cart</Link></li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Log Out</button>
      ) : (
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Log In</button>
      )}
    </div>
  );
};

export default Header;
