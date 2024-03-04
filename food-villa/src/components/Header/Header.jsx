import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../../hooks/useOnline";
import Title from "./Title";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { user } = useContext(UserContext);

  const isOnline = useOnline();

  const cartItems = useSelector((store) => store.cart.items);

  // console.log(cartItems);

  return (
    <div className="flex justify-between bg-pink-50 shadow-md">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10 gap-3">
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
            <Link to="/instamart">Instamart</Link>
          </li>
          <li>
            <Link to="/cart">Cart - {cartItems.length} items</Link>
          </li>
        </ul>
      </div>
      {isOnline ? (
        <h2 className="p-10">Internet is okay </h2>
      ) : (
        <h2 className="p-10">Offline</h2>
      )}
      {isOnline && <h2 className="p-10 font-bold text-red-400">{user.name}</h2>}
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Log Out</button>
      ) : (
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Log In</button>
      )}
    </div>
  );
};

export default Header;
