import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-lg w-48">
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Live</li>
      </ul>
      <h1 className="font-bold text-xl pt-5">Subscriptions</h1>
      <ul>
        <li>World Politics</li>
        <li>Sports</li>
        <li>Science</li>
        <li>Gaming</li>
      </ul>
      <h1 className="font-bold text-xl pt-5">Watch Later</h1>
      <ul>
        <li>World Politics</li>
        <li>Sports</li>
        <li>Science</li>
        <li>Gaming</li>
      </ul>
      <h1 className="font-bold text-xl pt-5">Subscriptions</h1>
      <ul>
        <li>World Politics</li>
        <li>Sports</li>
        <li>Science</li>
        <li>Gaming</li>
      </ul>
    </div>
  );
};

export default Sidebar;
