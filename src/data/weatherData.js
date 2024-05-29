import axios from "axios";

// 데이터 세팅
const weatherUseStateObj = async (defaultWeatherData, insertData)=>{
  return {...defaultWeatherData, ...insertData};
}

// 데이터 id 값으로 배경사진 string을 내려줌
const weatherDataHandler = async (weather_data) => {

  const weatherId = weather_data.id === 800 || weather_data.id === 801 
  ? weather_data.id : weather_data.id.toString()[0];
  
  switch(weatherId){
    case '2': return await weatherUseStateObj(weather_data, {image: 'img/weather_thunderstorm.jpg', status: 200});
    case '3': return await weatherUseStateObj(weather_data, {image: 'img/drizzling.jpg', status: 200});
    case '5': return await weatherUseStateObj(weather_data, {image: 'img/rain.jpg', status: 200});
    case '6': return await weatherUseStateObj(weather_data, {image: 'img/snow.jpg', status: 200});
    case '7': return await weatherUseStateObj(weather_data, {image: 'img/drizzling.jpg', status: 200});
    case '8': return await weatherUseStateObj(weather_data, {image: 'img/cloudy.jpg', status: 200});
    default: return await weatherUseStateObj(weather_data, {image: 'img/sunny.jpg', status: 200});
  }
};
// 날씨 API로 useState에 데이터 세팅
export const weatherDataFetch = async () => {
  const data = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=Busan&units=metric&appid=${process.env.REACT_APP_WEATHER_KEY}`
  );


  if (data.status === 200) {
    return await weatherDataHandler(data.data.weather[0]);
  } else {
    return {
      description: "clear sky",
      icon: "01n",
      id: 800,
      image: "img/sunny.jpg",
      main: "Clear",
      status: 500
    }
  }
};