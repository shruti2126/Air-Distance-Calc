/** @format */

import { fetchDistance } from "./fetchDistance";

export const calculateDistance = async ({ coordsA, coordsB }) => {
  console.log("point A and point B = ", { coordsA }, { coordsB });
  const loc1 = {
    lat: coordsA.lat,
    lng: coordsA.lat,
  };

  const loc2 = {
    lat: coordsB.lat,
    lng: coordsB.lng,
  };
  let distance = await fetchDistance({ loc1, loc2 });
  console.log("distance in calc distance = ", distance);
  return distance;
};
