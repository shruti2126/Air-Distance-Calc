/** @format */

import { useState } from "react";
import axios from "axios";

export const useFetchCoordinates = (initialAddress = "") => {
  const [address, setAddress] = useState(initialAddress);
  const [coordinates, setCoordinates] = useState({ lat: null, lng: null });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCoords = async () => {
    if (!address) {
      setCoordinates({ lat: null, lng: null });
      return;
    }
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:8080/getCoords?address=${address}`
      );
      setCoordinates({ lat: response.data.lat, lng: response.data.lng });
    } catch (err) {
      setError(err);
      setCoordinates({ lat: null, lng: null });
    } finally {
      setLoading(false);
    }
  };

  return { address, setAddress, coordinates, loading, error, fetchCoords };
};
