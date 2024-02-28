import { useParams } from "react-router-dom";
import Shimmer from "../components/Body/Shimmer";
import { IMG_CDN_URL } from "../constants";
import useRestaurant from "../hooks/useRestaurant";

// useParams - routing parameters

const RestaurantMenu = () => {
  // const [restaurant, setRestaurant] = useState(null);
  // const params = useParams()
  // console.log(params);
  // const {id} = params;

  const { resId } = useParams();

  const restaurant = useRestaurant(resId);

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h1>Restaurant {resId}</h1>
        <h2>{restaurant?.cards[0]?.card?.card?.info?.name}</h2>
        <img
          src={
            IMG_CDN_URL + restaurant.cards[0].card?.card?.info.cloudinaryImageId
          }
          alt="restaurant menu image"
          width={300}
        />
        <h3>{restaurant.cards[0].card?.card?.info.areaName}</h3>
        <h3>{restaurant.cards[0].card?.card?.info.city}</h3>
        {restaurant.cards[0].card?.card?.info.avgRating ? (
          <h3>{restaurant.cards[0].card?.card?.info.avgRating} stars</h3>
        ) : (
          <h3>Not rated</h3>
        )}
        <h3>{restaurant.cards[0].card?.card?.info.costForTwoMessage}</h3>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {restaurant.cards[4]?.groupedCard?.cardGroupMap.REGULAR.cards[1].card?.card?.itemCards.map(
            (menuItem) => (
              <li key={menuItem?.card?.info?.id}>
                {menuItem?.card?.info?.name} - {menuItem?.card?.info?.price}
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
