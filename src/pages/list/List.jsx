import React from "react";
import "./list.scss";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import SplitButton from "react-bootstrap/SplitButton";

const List = () => {
  return (
    <div className="btns-container">
      <div className="search-container">
        <input type="text" placeholder="Search by name, facilities" />
        <p>Filter</p>
        <button>Find GYMS</button>
      </div>

      <button>SWITCH TO LIST VIEW</button>
    </div>
  );
};

export default List;
