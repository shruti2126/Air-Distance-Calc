/** @format */
import Point from "./Point";
const FetchCoords = ({
  address1,
  address2,
  pointA,
  setPointA,
  pointB,
  setPointB,
}) => {
  const handleFetchCoords = () => {
    fetch(`http://localhost:8080/getCoords?address=${address1}`)
      .then((response) => response.json())
      .then((data) => {
        const { lat, lng } = data;
        setPointA(`${lat}, ${lng}`);
      })
      .catch((error) => {
        console.error("Error fetching coordinates for Point A:", error);
      });

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
  return (
    <>
      <button onClick={handleFetchCoords}>Fetch Coordinates</button>
      <Point
        pointA={pointA}
        setPointA={setPointA}
        pointB={pointB}
        setPointB={setPointB}
      />
    </>
  );
};

export default FetchCoords;
