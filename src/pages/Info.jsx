import React from "react";
import "./info.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import WatchLaterIcon from "@mui/icons-material/WatchLater";

const Info = (props) => {
  console.log(props);
  return (
    <div className="infoContainer">
      <div className="generalInfo">
        <h4 className="mb-5">General info.</h4>
        <div className="itemsContainer">
          <div className="w-50">
            <h3>
              <LocationOnIcon />
              Location
            </h3>
            <p>22 st AlexRoad, Egypt</p>
          </div>
          <div className="w-50">
            <h3>
              <LoyaltyIcon />
              Members should be
            </h3>
            <p>Men</p>
          </div>
          <div className="w-75">
            <h3>
              <WatchLaterIcon />
              Opening hours
            </h3>
            <div className="data">
              <p style={{ width: "40%" }}>Sat, Sun, Mon, Tue, Wed, Thu, Fri</p>
              <div style={{ width: "60%" }}>
                <p>11:00 AM - 02:00 PM</p>
                <p>02:00 AM - 01:00 AM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="about">
        <h4>About Gym Test AA</h4>
        <p>description</p>
      </div>
      <hr />
      <div className="tags">
        <h3>Tags</h3>
        <p>fitness</p>
        <p>weights</p>
      </div>
      <hr />
      <div className="facilities">
        <ul>
          <li>Free-Wifi</li>
          <li>Towels</li>
          <li>Pool</li>
          <li>Steam room</li>
          <li>Sauna</li>
          <li>Nutritional Counseling</li>
          <li>Showers</li>
        </ul>
      </div>
      <hr />
      <div className="contacts">
        <h3>Contact us</h3>
        <FacebookIcon />
        <TwitterIcon />
      </div>
    </div>
  );
};

export default Info;
