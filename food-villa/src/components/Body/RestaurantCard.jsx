import { IMG_CDN_URL } from '../../constants';

const RestaurantCard = ({ cloudinaryImageId, name, cuisines, totalRatings}) => {
  return (
      <div className='card'>
          <img src={IMG_CDN_URL + cloudinaryImageId} alt='burger' />
          <h2>{name}</h2>
          <h3>{cuisines.join(', ')}</h3>
          <h4>{totalRatings} stars</h4>        
      </div>
  )
}

export default RestaurantCard
