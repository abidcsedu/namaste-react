import Title from "./Title";

const loggedInUser = () => {
  return true;
};

const Header = () => {
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
      {loggedInUser() ? <button>Log Out</button> : <button>Log In</button>}
    </div>
  );
};

export default Header;
