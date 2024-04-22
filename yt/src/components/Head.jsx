import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 mb-3 shadow-lg">
      <div className="flex gap-3 col-span-1">
        <img
          className="h-8 cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png"
          alt="menu"
          onClick={() => toggleMenuHandler()}
        />
        <a href="/">
          <img
            className="h-8"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/768px-YouTube_Logo_2017.svg.png"
            alt="youtube logo"
          />
        </a>
      </div>
      <div className="col-span-9 flex justify-center">
        <input
          placeholder="Search"
          type="text"
          className="w-1/2 border border-gray-400 rounded-l-full px-4"
        />
        <button className="border border-gray-400 px-2 py-1 rounded-r-full bg-gray-100">
          <img
            className="h-8 opacity-70"
            src="https://png.pngtree.com/png-clipart/20190921/original/pngtree-search-icon-png-image_4699282.jpg"
            alt="search"
          />
        </button>
      </div>
      <div className="col-span-2 flex justify-end pe-4">
        <img
          className="h-8"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Head;
