/** @format */
import React from "react";
import { formatCoordinates } from "../utils/formatCoordinates";

const PointInput = React.memo(({ pointA, pointB }) => {

  return (
    <div style={styles.container}>
      {(pointA.loading || pointB.loading) && <div>Loading...</div>}

      <div style={styles.pointContainer}>
        <label style={styles.label}>Point A:</label>
        <input
          type="text"
          value={formatCoordinates(pointA.coordinates)}
          onChange={(e) => pointA.setAddress(e.target.value)}
          style={styles.input}
        />
      </div>
      <div style={styles.pointContainer}>
        <label style={styles.label}>Point B:</label>
        <input
          type="text"
          value={formatCoordinates(pointB.coordinates)}
          onChange={(e) => pointB.setAddress(e.target.value)}
          style={styles.input}
        />
      </div>
    </div>
  );
});

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  pointContainer: {
    marginBottom: "20px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
  },
  input: {
    width: "100%",
    padding: "8px",
    marginBottom: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px 15px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default PointInput;
