/** @format */

import "./AirDistance.css";

const Address = ({ a1, setA1, a2, setA2 }) => {
  return (
    <div className="insert-address">
      <label htmlFor="address1"> Address1 : </label>
      <input
        type="text"
        id="address1"
        className="address"
        placeholder="Enter your Street address including state, zipcode and country"
        value={a1}
        onChange={(e) => setA1(e.target.value)}
      />

      <label htmlFor="address2"> Address2 : </label>
      <input
        type="text"
        id="address2"
        placeholder="Enter your Street address including state, zipcode and country"
        value={a2}
        onChange={(e) => setA2(e.target.value)}
      />
    </div>
  );
};

export default Address;
