/** @format */

export const formatCoordinates = (coordinates) => {
  if (coordinates.lat == null || coordinates.lng == null) {
    return ""; // Return an empty string if coordinates are not available
  }
  return `Latitude: ${coordinates.lat}, Longitude: ${coordinates.lng}`;
};
