import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "../components/Body/Shimmer";
import { IMG_CDN_URL } from "../constants";
// useParams - routing parameters

const RestaurantMenu = () => {
  const [restaurant, setRestaurant] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  // const params = useParams()
  // console.log(params);
  // const {id} = params;

  const { resId } = useParams();

  useEffect(() => {
    getRestaurantInfo(resId);
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      `https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=${resId}`
    );
    const json = await data.json();
    // console.log(json);
    // console.log('hello');
    setRestaurant(json?.data?.cards[2].card.card.info);
    // console.log(json?.data?.cards[2].card.card.info);
    // console.log(json?.data?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards);
    setMenuItems(
      json?.data?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
        .itemCards
    );
  }

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h1>Restaurant {resId}</h1>
        <h2>{restaurant.name}</h2>
        <img
          src={IMG_CDN_URL + restaurant.cloudinaryImageId}
          alt="restaurant menu image"
          width={300}
        />
        <h3>{restaurant.areaName}</h3>
        <h3>{restaurant.city}</h3>
        {restaurant.avgRating ? (
          <h3>{restaurant.avgRating} stars</h3>
        ) : (
          <h3>Not rated</h3>
        )}
        <h3>{restaurant.costForTwoMessage}</h3>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {menuItems.map((menuItem) => (
            <li key={menuItem?.card?.info?.id}>
              {menuItem?.card?.info?.name} - {menuItem?.card?.info?.price}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
