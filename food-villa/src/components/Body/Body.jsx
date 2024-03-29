import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../../hooks/useOnline";
import { filterData } from "../../utils/helper";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import UserContext from "../../utils/UserContext";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  // const [loading, setLoading] = useState(false);

  // console.log(restaurants);

  const { user, setUser } = useContext(UserContext);
  // console.log(userData);

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
      <div className="search-container p-5 bg-blue-50 my-4">
        <input
          type="text"
          className="py-2 px-2"
          placeholder="Search"
          value={searchText}
          onChange={handleChange}
        />
        <button
          className="px-5 py-2 m-2 bg-purple-500 rounded-md text-white hover:bg-neutral-600"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);

            setFilteredRestaurants(data);
            setSearchText("");
          }}
        >
          Search
        </button>
        <br />
        <div className="mt-2">
          <label htmlFor="name" className="text-white p-2 me-2 bg-slate-500 rounded">
            Name
          </label>
          <input
            className="p-2 rounded-lg"
            id="name"
            type="text"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
        </div>
        <br />
        <label htmlFor="email" className="text-white p-2 me-2 bg-slate-500 rounded">
          Email
        </label>
        <input
          className="p-2 rounded-lg"
          id="email"
          type="text"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
      </div>
      <div className="flex flex-wrap">
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
