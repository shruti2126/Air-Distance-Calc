/** @format */

import axios from "axios";

export const fetchDistance = async ({ loc1, loc2 }) => {
  try {
    const response = await axios.post("http://localhost:8080/getDistance", {
      loc1,
      loc2,
    });
    const data = response.data;
    console.log(data);
    return Number(data).toFixed(2);
  } catch (error) {
    console.log(error);
    return "Error fetching distance = " + error;
  }
};
