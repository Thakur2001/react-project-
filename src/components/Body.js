import { useState } from "react";
import resList from "../utils/mockData";
import ResCards from "./ResCards";

const Body = () => {
  const [listOfresturant, setListOfResturant] = useState(resList);
  return (
    <div className="body">
      <div className="top-rated-btn">
        <button
          onClick={() => {
            const filteredList = resList.filter(
              (res) => res.info.avgRating > 4.4
            );
            setListOfResturant(filteredList);
          }}
        >
          Top Rated
        </button>
      </div>
      <div className="res-Container">
        {listOfresturant.map((item, index) => {
          return <ResCards key={index} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Body;
