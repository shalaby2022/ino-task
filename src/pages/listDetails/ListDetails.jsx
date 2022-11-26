import "./details.scss";
import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/footer/Footer";

const ListDetails = () => {
  const param = useParams();
  console.log(param.id);

  return <div className="container"></div>;
};

export default ListDetails;
