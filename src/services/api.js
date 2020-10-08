import axios from "axios";

const path = "https://coronavirus-19-api.herokuapp.com/countries";

export async function getCountry(country) {
  const { data } = axios.get(`${path}/country`);
  return data;
}
