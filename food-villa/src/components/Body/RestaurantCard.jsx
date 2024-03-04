/* eslint-disable react/prop-types */
import { useContext } from "react";
import { IMG_CDN_URL } from "../../constants";
import UserContext from "../../utils/UserContext";

const RestaurantCard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
  const { user } = useContext(UserContext);
  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-pink-50 h-[350px]">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="burger" />
      <h2 className="font-bold text-2xl py-2">{name}</h2>
      <h3>{cuisines && cuisines.join(", ")}</h3>
      <h4>{avgRating} stars</h4>
      <h2 className="font-bold">
        {user.name}
      </h2>
      <h2 className="font-bold">
        {user.email}
      </h2>
    </div>
  );
};

export default RestaurantCard;
