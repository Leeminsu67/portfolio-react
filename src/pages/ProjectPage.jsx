import React, { useEffect, useState } from 'react'
import { weatherDataFetch } from '../data/weatherData';
import Loading from '../components/Loading';
import WeatherContainer from '../components/WeatherContainer';

const ProjectPage = () => {
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

  
  if (loading) {
    // console.log(weatherData)
    return (
      <WeatherContainer
        weatherString={weatherData.image} 
        weatherIcon={weatherData.icon} 
        children={<>project page</>}
      />
    );
  } else {
    // 로딩 화면
    return <Loading />;
  }
}

export default ProjectPage