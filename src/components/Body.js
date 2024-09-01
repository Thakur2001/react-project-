import { useState, useEffect } from "react";
import ResCards from "./ResCards";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfresturant, setListOfResturant] = useState([]);
  const [filteredList, setfilterList] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.61450&lng=77.30630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const liveData =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setListOfResturant(liveData);
    setfilterList(liveData);
  };
  return listOfresturant.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="top-rated-btn">
        <div className="search">
          <input
            type="text"
            className="Search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filterData = listOfresturant.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setfilterList(filterData);
            }}
          >
            Search
          </button>
        </div>
        <button
          onClick={() => {
            const filteredList = listOfresturant.filter(
              (res) => res?.info?.avgRating > 4.4
            );
            setfilterList(filteredList);
          }}
        >
          Top Rated
        </button>
      </div>
      <div className="res-Container">
        {filteredList.map((item, index) => {
          return <ResCards key={index} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Body;
