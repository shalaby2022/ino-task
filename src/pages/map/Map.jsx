import React from "react";
import "./map.scss";
import { Link } from "react-router-dom";

const Map = () => {
  return (
    <div className="mapcontainer">
      <div className="btns-container">
        <div className="search-container">
          <input type="text" placeholder="Search by name, facilities" />
          <span>Filter</span>
          <button>Find GYMS</button>
        </div>
        <button className="switch">
          <Link to="/list" className="link">
            SWITCH TO LIST VIEW
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Map;
