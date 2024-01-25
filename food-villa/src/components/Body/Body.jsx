import { useEffect, useState } from "react"
import { restaurantList } from "../../constants"
import RestaurantCard from "./RestaurantCard"

const Body = () => {
  const [restaurants, setRestaurants] = useState(restaurantList)
  const [searchText, setSearchText] = useState('')

  // console.log(restaurants);
  useEffect(() => {
    getRestaurants()
  }, [])

  async function getRestaurants () {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.486463086305346&lng=78.3657343313098&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    
    const json = await data.json()
    // console.log(json);

    // console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[0].info.id);
    // console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    setRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  const filterData = () => {
    setRestaurants(restaurants.filter(restaurant => restaurant.info.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())))
    setSearchText("")
  }
  
  const handleChange = (e) => {
    setSearchText(e.target.value)
  }

  return (
    <>
      <div className="search-container">
        <input type="text" className="search-input" placeholder="Search" value={searchText} onChange={handleChange} />
        <button className="search-btn" onClick={() => {
          filterData()
        }}>Search</button>
      </div>
      <div className='restaurant-list'>
        {
          restaurants.map((restaurant, index) => (
            <RestaurantCard {...restaurant.info}
            //  key={ restaurant.info.id } 
            key={index}
            />
          ))
        }
      </div>
    </>
  )
}

export default Body
