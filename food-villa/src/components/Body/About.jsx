import { useContext } from "react";
import ProfileFunctionalComponent from "../Profile";
import ProfileClassComponent from "../ProfileClass";
import UserContext from "../../utils/UserContext";

const About = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <div className="m-3">
      <div className="p-2 bg-red-300 my-3 w-1/6 text-center rounded-full">
        About
      </div>
      <label
        htmlFor="name"
        className="text-white p-2 me-2 bg-yellow-500 rounded"
      >
        Name
      </label>
      <input
        id="name"
        type="text"
        className="bg-slate-700 mt-3 p-2 rounded text-white"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
      {/* <Outlet /> */}
      <div className="p-3 border border-green-600 my-3">
        <ProfileFunctionalComponent name="abid" />
      </div>
      <div className="p-3 border border-blue-500">
        <ProfileClassComponent name="abid" />
      </div>
    </div>
  );
};

export default About;
