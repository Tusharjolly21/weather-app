import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "9be5f8140a6cb0c8e51b6d417d632bb0";
export const getData = async(city,country) => {
  return await axios.get(`${URL}?q=${city},${country}&appid=${API_KEY}&units=metric`);
};
