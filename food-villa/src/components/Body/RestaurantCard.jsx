import { IMG_CDN_URL, restaurantList } from '../../contents';

const RestaurantCard = () => {
  return (
    <div className='restaurant-list'>
        {restaurantList.map(restaurant => (
        <div className='card' key={restaurant.data.id}>
            <img src={IMG_CDN_URL + restaurant.data.cloudinaryImageId} alt='burger' />
            <h2>{restaurant.data?.name}</h2>
            <h3>{restaurant.data?.cuisines.join(', ')}</h3>
            <h4>{restaurant.data.totalRatings} stars</h4>        
        </div>
        ))}
    </div>
  )
}

export default RestaurantCard
