import { useState } from "react"
import { restaurantList } from "../../constants"
import RestaurantCard from "./RestaurantCard"

const Body = () => {
  const [restaurants, setRestaurants] = useState(restaurantList)
  const [searchText, setSearchText] = useState('')

  const handleChange = (e) => {
    setSearchText(e.target.value)
  }

  const filterData = () => {
    setRestaurants(restaurants.filter(restaurant => restaurant.data.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())))
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
          restaurants.map(restaurant => (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          ))
        }
      </div>
    </>
  )
}

export default Body
