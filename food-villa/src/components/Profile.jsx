import { useState } from "react";

/* eslint-disable react/prop-types */
const Profile = (props) => {
  const [count1, setCount1] = useState(0);
  const [count2] = useState(5);
  return (
    <div>
      <h1>Profile functional component</h1>
      <h2>Name : {props.name}</h2>
      <h2>count1: {count1}</h2>
      <button onClick={() => setCount1(1)}>set count 1</button>
      <h2>count2: {count2}</h2>
    </div>
  );
};

export default Profile;
