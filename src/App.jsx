import './css/App.css'
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Loading from './components/Loading';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  // 데이터 세팅
  const weatherUseStateObj = async (defaultWeatherData, insertData)=>{
    setWeatherData({...defaultWeatherData, ...insertData});
  }

  // 데이터 id 값으로 배경사진 string을 내려줌
  const weatherPropsFunc = async (weather_data) => {

    const weatherId = weather_data.id === 800 || weather_data.id === 801 
    ? weather_data.id : weather_data.id.toString()[0];
    
    switch(weatherId){
      case '2': await weatherUseStateObj(weather_data, {image: 'img/weather_thunderstorm.jpg'}); break;
      case '3': await weatherUseStateObj(weather_data, {image: 'img/drizzling.jpg'}); break;
      case '5': await weatherUseStateObj(weather_data, {image: 'img/rain.jpg'}); break;
      case '6': await weatherUseStateObj(weather_data, {image: 'img/snow.jpg'}); break;
      case '7': await weatherUseStateObj(weather_data, {image: 'img/drizzling.jpg'}); break;
      case '8': await weatherUseStateObj(weather_data, {image: 'img/cloudy.jpg'}); break;
      default: await weatherUseStateObj(weather_data, {image: 'img/sunny.jpg'}); break;
    }
  };
  // 날씨 API로 useState에 데이터 세팅
  const weatherDataFetch = async () => {
    const data = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=Busan&units=metric&appid=${process.env.REACT_APP_WEATHER_KEY}`
    );

    if (data.status === 200) {
      await weatherPropsFunc(data.data.weather[0]);
      setLoading(true);
    } else {
      setWeatherData(null);
      setLoading(true);
    }
  };

  // useEffect 실행
  useEffect(() => {
    // 날씨 데이터 조회
    weatherDataFetch();
  }, []);

  
  if (loading) {
    console.log(weatherData)
    return (
      <Container weatherString={weatherData.image}>
        {/* 왼쪽 위 모서리 아이콘 */}
        <WeatherIconBox>
          <span>날씨 : </span>
          <WeatherIcon src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`} alt="weather_image" />
        </WeatherIconBox>

        {/* {weatherData ? <div>들고옴</div> : <div>못 들고옴</div>} */}
      </Container>
    );
  } else {
    // 로딩 화면
    return <Loading />;
  }
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: flex;
  
  &::after{
    content: "";
    width: 100%;
    height: 100vh;
    background-image: url(${(props) => props.weatherString ? props.weatherString : "img/sunny.jpg"});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 0.3;

    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    z-index: -1;
  }
`;

const WeatherIconBox = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  color: #656565;

`

const WeatherIcon = styled.img`
  width: 40px;
  height: 40px;
`

export default App;
