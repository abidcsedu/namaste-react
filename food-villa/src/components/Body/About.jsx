import ProfileFunctionalComponent from "../Profile";
import ProfileClassComponent from "../ProfileClass";

const About = () => {
  return (
    <div>
      About
      {/* <Outlet /> */}
      <ProfileFunctionalComponent name="abid" />
      <ProfileClassComponent name="abid" />
    </div>
  );
};

export default About;
