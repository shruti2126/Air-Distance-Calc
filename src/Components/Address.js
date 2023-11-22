/** @format */

import React, { useCallback } from "react";
import AddressInput from "./AddressInput";
import { useCoordinates } from "./CoordinatesContext";

const Address = () => {
  const { pointA, pointB } = useCoordinates();

  const handleAddressChangeA = useCallback(
    (e) => {
      pointA.setAddress(e.target.value);
    },
    [pointA]
  );

  const handleAddressChangeB = useCallback(
    (e) => {
      pointB.setAddress(e.target.value);
    },
    [pointB]
  );

  return (
    <>
      <AddressInput
        label="Address for Point 1"
        value={pointA.address}
        onChange={handleAddressChangeA}
        onFetch={pointA.fetchCoords}
      />
      <AddressInput
        label="Address for Point 2"
        value={pointB.address}
        onChange={handleAddressChangeB}
        onFetch={pointB.fetchCoords}
      />
    </>
  );
};

export default Address;
