import axios from 'axios';

export const getWeather = async (lat, lon) => {
  const result = await axios
    .get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=alerts,minutely&units=imperial&appid=06f7a18ca30f253be33848f84ebdae06`,
    )
    .then(response => {
      return response.data;
    })
    .catch(err => {
      console.log(err);
      return false;
    });
  return result;
};

export default getWeather;
