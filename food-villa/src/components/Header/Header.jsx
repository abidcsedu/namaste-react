import { useState } from "react";
import Title from "./Title";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
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
