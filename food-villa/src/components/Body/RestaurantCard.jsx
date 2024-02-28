/* eslint-disable react/prop-types */
import { IMG_CDN_URL } from "../../constants";

const RestaurantCard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-pink-50 h-[350px]">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="burger" />
      <h2 className="font-bold text-2xl py-2">{name}</h2>
      <h3>{cuisines && cuisines.join(", ")}</h3>
      <h4>{avgRating} stars</h4>
    </div>
  );
};

export default RestaurantCard;
