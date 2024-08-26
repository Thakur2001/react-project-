import { CDN_URL } from "../utils/constant";

const ResCards = ({ item }) => {
  return (
    <div className="res-Cards">
      <img
        className="res-logo"
        src={CDN_URL + item.info.cloudinaryImageId}
        alt="res-img"
      />
      <h3>{item.info.name}</h3>
      <h4>{item.info.cuisines.join(", ")}</h4>
      <h4>{item.info.avgRating} star</h4>
      <h4>{item.info.sla.slaString}</h4>
    </div>
  );
};

export default ResCards;
