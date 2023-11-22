/** @format */

import React from "react";
import "../styles/AirDistance.css";
import Address from "./Address";
import Point from "./Point";

const AirDistance = () => {
  return (
    <div className="container">
      <h1>Find Air Distance Between Two Points! </h1>
      <Address />
      <Point />
    </div>
  );
};

export default AirDistance;
