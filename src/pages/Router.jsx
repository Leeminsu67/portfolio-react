import React, { useEffect, useState } from 'react'
import { weatherDataFetch } from '../data/weatherData';
import Loading from '../components/Loading';
import WeatherContainer from '../components/WeatherContainer';
import MainPage from './MainPage';

const Router = ({path}) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  // 날씨 API 호출
  const FetchData = async () => {
    const data =  await weatherDataFetch();

    setWeatherData(data);
    setLoading(true);
  };

  // useEffect 실행
  useEffect(() => {
    // 날씨 데이터 조회
    FetchData();
  }, []);


  const pathString = ()=>{
    return path ? <>project page</> : <MainPage />
  }

  if (loading) {
    return (
      <WeatherContainer 
        weatherString={weatherData.image} 
        weatherIcon={weatherData.icon} 
        children={pathString()}
      />
    );
  } else {
    // 로딩 화면
    return <Loading />;
  }
}

export default Router