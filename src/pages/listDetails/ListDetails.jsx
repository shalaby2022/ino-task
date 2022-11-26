import "./details.scss";
import React from "react";
import { useParams } from "react-router-dom";

const ListDetails = () => {
  const param = useParams();
  console.log(param.id);

  return <div>ListDetails</div>;
};

export default ListDetails;
