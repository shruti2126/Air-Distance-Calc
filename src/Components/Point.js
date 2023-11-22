/** @format */
import { useState } from "react";
import { useCoordinates } from "./CoordinatesContext";
import { calculateDistance } from "../utils/calculateDistance";
import PointInput from "./PointInput";

const Point = () => {
  const [result, setResult] = useState("");
  const { pointA, pointB } = useCoordinates();

  const handleDistanceCalculation = async () => {
    try {
      console.log("point a and b = ", { pointA }, { pointB });
      const distance = await calculateDistance({
        coordsA: pointA.coordinates,
        coordsB: pointB.coordinates,
      });
      console.log("distance in handle calc distance = " + distance);
      setResult(distance);
    } catch (error) {
      console.error("Error calculating distance:", error);
      setResult("Error calculating distance");
    }
  };

  return (
    <div>
      <PointInput pointA={pointA} pointB={pointB} />
      <button onClick={handleDistanceCalculation} style={styles.button}>
        Calculate Distance
      </button>
      <h2 style={styles.result}>Distance: {result} Km</h2>
    </div>
  );
};
const styles = {
  container: {
    padding: "20px",
    backgroundColor: "#f5f5f5",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  coordinate: {
    marginBottom: "10px",
  },
  label: {
    fontWeight: "bold",
  },
  value: {
    marginLeft: "10px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginTop: "20px",
  },
  result: {
    marginTop: "20px",
    fontWeight: "bold",
    fontSize: "",
  },
};
export default Point;
