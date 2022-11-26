import React, { useEffect, useState } from "react";
import "./list.scss";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import axios from "axios";

const List = () => {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    const fetchData = () => {
      axios
        .get(`https://forkify-api.herokuapp.com/api/search?q=pizza`)
        .then(({ data }) => setData(data.recipes))
        .catch((err) => console.log("error", err));
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="btns-container">
        <div className="search-container">
          <input type="text" placeholder="Search by name, facilities" />
          <span>Filter</span>
          <button>Find GYMS</button>
        </div>
        <button className="switch">
          <Link to="/map" className="link">
            SWITCH TO MAP VIEW
          </Link>
        </button>
      </div>

      <div className="data">
        <h2>All</h2>
        {data ? (
          data.map((item, ind) => (
            <Link
              to={`/list/${item.recipe_id}`}
              key={ind}
              className="item-container"
            >
              <div className="img-ciontainer">
                <img src={item.image_url} alt="" />
              </div>
            </Link>
          ))
        ) : (
          <h1>Loading</h1>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default List;
