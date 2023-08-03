/** @format */
import { useState } from "react";

const Point = ({ pointA, setPointA, pointB, setPointB }) => {
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

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
    <div className="insert-coordinates">
      <form onSubmit={handleSubmit}>
        <h2>Point A </h2>
        <input
          type="text"
          id="points"
          value={pointA}
          placeholder="latitude, longitude"
          onChange={(e) => setPointA(e.target.value)}
        />
        <h2>Point B</h2>
        <input
          type="text"
          value={pointB}
          placeholder="latitude, longitude"
          onChange={(e) => setPointB(e.target.value)}
        />
      </form>
      <button onClick={handleDistanceCalculation}>Find Distance</button>
      <div id="distance-result">Distance: {result} Km</div>
    </div>
  );
};
export default Point;
