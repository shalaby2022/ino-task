import "./details.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, Outlet, useParams } from "react-router-dom";
import Rating from "@mui/material/Rating";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const ListDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(`https://forkify-api.herokuapp.com/api/search?q=pizza`)
        .then(({ data }) => setData(data.recipes))
        .catch((err) => console.log("error", err));
    };
    fetchData();
  }, []);

  let details = data.filter((item) => item.recipe_id === id);
  console.log(details);
  return (
    <div className="detailscontainer">
      <div className="explore">
        <div className="info-container">
          <div className="img-container">
            <h6 className="text">
              EXPLORE GYM <span className="text-secondary">/gym gmail1</span>{" "}
            </h6>
            <img src="" alt="" />
          </div>
          <div className="infos">
            <h3>gym gmail1</h3>
            <h5>
              <LocationOnIcon />
              قسم الداخليه
            </h5>
            <Rating name="size-large" defaultValue={3} size="large" />
          </div>
        </div>
        <div className="btn-container">
          <button>BECOME A MEMBER</button>
        </div>
      </div>
      <div className="links">
        <ul>
          <li>
            <Link
              to={`/list/${id}/info`}
              className="text-decoration-none active"
            >
              Info
            </Link>
          </li>
          <li>
            <Link to={`/list/${id}/photos`} className="text-decoration-none">
              Photos
            </Link>
          </li>
          <li>
            <Link to={`/list/${id}/classes`} className="text-decoration-none">
              Classes
            </Link>
          </li>
          <li>
            <Link to={`/list/${id}/packages`} className="text-decoration-none">
              Packages
            </Link>
          </li>
          <li>
            <Link to={`/list/${id}/reviews`} className="text-decoration-none">
              Reviews
            </Link>
          </li>
        </ul>
        <hr />
      </div>
      <div className="">
        <Outlet data={details} />
      </div>
    </div>
  );
};

export default ListDetails;
