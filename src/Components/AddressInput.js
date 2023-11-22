
import React from "react";
import "../styles/AirDistance.css"
const AddressInput = React.memo(({ label, value, onChange, onFetch }) => {
  return (
    <div style={styles.container}>
      <label style={styles.label}>{label}</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        style={styles.input}
      />
      <button onClick={onFetch} className="button">
        Fetch Coordinates
      </button>
    </div>
  );
});

const styles = {
  container: {
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

export default AddressInput;

