import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../../hooks/useOnline";
import { filterData } from "../../utils/helper";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  // const [loading, setLoading] = useState(false);

  // console.log(restaurants);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    // setLoading(true);
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.486463086305346&lng=78.3657343313098&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    // console.log(data);

    const json = await data.json();
    // console.log(json);

    // console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[0].info.id);
    // console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    setAllRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    // setLoading(false);
  }

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>Offline, please check your internet connection!!!</h1>;
  }

  if (allRestaurants.length === 0) return <Shimmer />;

  if (filteredRestaurants.length === 0)
    return <h1>Not matched any restaurants...</h1>;

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={handleChange}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);

            setFilteredRestaurants(data);
            setSearchText("");
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            <RestaurantCard
              {...restaurant.info}
              // key={index}
            />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Body;
