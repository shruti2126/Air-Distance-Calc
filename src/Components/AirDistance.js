/** @format */

import React, { useState } from "react";
import "./AirDistance.css";
import Address from "./Address";
import FetchCoords from "./FetchCoords";


const AirDistance = () => {
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [pointA, setPointA] = useState("");
  const [pointB, setPointB] = useState("");

  return (
    <div className="container">
      <h1>Find Air Distance Between Two Points! </h1>
      <Address
        a1={address1}
        setA1={setAddress1}
        a2={address2}
        setA2={setAddress2}
      />
      <FetchCoords
        address1={address1}
        address2={address2}
        pointA={pointA}
        setPointA={setPointA}
        pointB={pointB}
        setPointB={setPointB}
      />
    </div>
  );
};

export default AirDistance;
