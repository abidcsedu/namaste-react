import { useEffect } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  // const params = useParams()
  // console.log(params);
  // const {id} = params;

  const { id } = useParams();

  useEffect(() => {
    getRestaurantInfo();
  }, []);
  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId=229"

    // "https://www.swiggy.com/dapi/menu/v4/"
    );

    const json = await data.json()
    console.log(json);
    console.log('hello');
  }

  return <div>restaurant {id}</div>;
};

export default RestaurantMenu;
