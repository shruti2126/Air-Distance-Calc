/** @format */

import React, { createContext, useContext } from "react";
import { useFetchCoordinates } from "../hooks/useFetchCoordinates";
import AirDistance from "./AirDistance";

const CoordinatesContext = createContext(null);

export const CoordinatesProvider = () => {
  const pointA = useFetchCoordinates();
  const pointB = useFetchCoordinates();

  return (
    <CoordinatesContext.Provider value={{ pointA, pointB }}>
      <AirDistance />
    </CoordinatesContext.Provider>
  );
};

export const useCoordinates = () => useContext(CoordinatesContext);
