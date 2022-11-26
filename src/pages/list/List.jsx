import React, { useEffect, useState } from "react";
import "./list.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import PaginationElement from "../../components/pagination/Pagination";

const List = () => {
  const [data, setData] = useState([]);
  console.log(data);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(3);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(`https://forkify-api.herokuapp.com/api/search?q=pizza`)
        .then(({ data }) => setData(data.recipes))
        .catch((err) => console.log("error", err));
    };
    fetchData();
  }, []);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = data.slice(firstPostIndex, lastPostIndex);

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
        <h2 className="text-start fw-bold">All</h2>
        <div className="list-container">
          {currentPost &&
            currentPost.map((item, ind) => (
              <div className="item-container" key={item.recipe_id}>
                <Link
                  to={`/list/${item.recipe_id}`}
                  style={{ width: "100%", height: "100%" }}
                >
                  <div className="img-ciontainer">
                    <img src={item.image_url} alt="" />
                  </div>
                </Link>
                <h5 className="text-center mt-4 text-primary text-decoration-none">
                  {item.publisher}
                </h5>
              </div>
            ))}
        </div>
      </div>
      <PaginationElement
        totalData={data.length}
        dataPerPage={postPerPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default List;
