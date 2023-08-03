/** @format */

import React, {useState } from "react";
import "./AirDistance.css";
import Address from "./Address";
import Point from "./Point";
// import fetchCoords from "../fetchCoords";
// import { useAddressInput } from "../Hooks/useAddressInput";
// import { usePointInput } from "../Hooks/usePointInput";

const AirDistance = () => {
  const [result, setResult] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [pointA, setPointA] = useState("");
  const [pointB, setPointB] = useState("");

  const handleFetchCoords = () => {
    // Fetch for Point A
    fetch(`http://localhost:8080/getCoords?address=${address1}`)
      .then((response) => response.json())
      .then((data) => {
        const { lat, lng } = data;
        setPointA(`${lat}, ${lng}`);
      })
      .catch((error) => {
        console.error("Error fetching coordinates for Point A:", error);
      });

    // Fetch for Point B
    fetch(`http://localhost:8080/getCoords?address=${address2}`)
      .then((response) => response.json())
      .then((data) => {
        const { lat, lng } = data;
        setPointB(`${lat}, ${lng}`);
      })
      .catch((error) => {
        console.error("Error fetching coordinates for Point B:", error);
      });
  };

  // const distanceCalculation = async (pointA, pointB) => {
  //   const loc1 = {
  //     lat: parseFloat(pointA.split(",")[0]),
  //     lng: parseFloat(pointA.split(",")[1]),
  //   };

  //   const loc2 = {
  //     lat: parseFloat(pointB.split(",")[0]),
  //     lng: parseFloat(pointB.split(",")[1]),
  //   };

  //   const requestBody = {
  //     loc1,
  //     loc2,
  //   };

  //   fetch("http://localhost:8080/getDistance", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(requestBody),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setResult(Number(data).toFixed(2));
  //     })
  //     .catch((error) => {
  //       console.error("Error calculating distance:", error);
  //     });
  // };

  const handleDistanceCalculation = async () => {
     const loc1 = {
       lat: parseFloat(pointA.split(",")[0]),
       lng: parseFloat(pointA.split(",")[1]),
     };

     const loc2 = {
       lat: parseFloat(pointB.split(",")[0]),
       lng: parseFloat(pointB.split(",")[1]),
     };

     const requestBody = {
       loc1,
       loc2,
     };

     fetch("http://localhost:8080/getDistance", {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify(requestBody),
     })
       .then((response) => response.json())
       .then((data) => {
         setResult(Number(data).toFixed(2));
       })
       .catch((error) => {
         console.error("Error calculating distance:", error);
       });
  };

  return (
    <div className="container">
      <h1>Find Air Distance Between Two Points! </h1>
      <Address
        a1={address1}
        setA1={setAddress1}
        a2={address2}
        setA2={setAddress2}
      />
      <button onClick={handleFetchCoords}>Fetch Coordinates</button>
      <Point
        pointA={pointA}
        setA={setPointA}
        pointB={pointB}
        setB={setPointB}
      />
      <button onClick={handleDistanceCalculation}>Find Distance</button>
      <div id="distance-result">Distance: {result} Km</div>
    </div>
  );
};

export default AirDistance;
