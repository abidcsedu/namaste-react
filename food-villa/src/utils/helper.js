export const filterData = (searchText, allRestaurants) => {
    // setFilteredRestaurants
    const filteredData = allRestaurants.filter((restaurant) =>
      restaurant.info.name
        .toLocaleLowerCase()
        .includes(searchText.toLocaleLowerCase())
    );
    return filteredData;
  };