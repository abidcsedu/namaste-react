import { useEffect, useState } from "react";
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

  const filterData = () => {
    setFilteredRestaurants(
      allRestaurants.filter((restaurant) =>
        restaurant.info.name
          .toLocaleLowerCase()
          .includes(searchText.toLocaleLowerCase())
      )
    );
    setSearchText("");
  };

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  if(allRestaurants.length === 0) return <Shimmer />;
  
  if(filteredRestaurants.length === 0) return <h1>Not matched any restaurants...</h1>

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
            filterData();
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants.map((restaurant, index) => (
          <RestaurantCard
            {...restaurant.info}
            //  key={ restaurant.info.id }
            key={index}
          />
        ))}
      </div>
    </>
  );
};

export default Body;
