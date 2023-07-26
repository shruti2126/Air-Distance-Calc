/** @format */

const Point = ({ pointA, setA, pointB, setB }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
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
          onChange={(e) => setA(e.target.value)}
        />
        <h2>Point B</h2>
        <input
          type="text"
          value={pointB}
          placeholder="latitude, longitude"
          onChange={(e) => setB(e.target.value)}
        />
      </form>
    </div>
  );
};
export default Point;
