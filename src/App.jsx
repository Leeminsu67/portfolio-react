import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

function App() {
  const [weather, setWeather] = useState(null);

  const weatherData = async () => {
    const data = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=Busan&units=metric&appid=${process.env.REACT_APP_WEATHER_KEY}`
    );
    setWeather(data);
  };

  useEffect(() => {
    // 날씨 데이터 조회
    weatherData();
  }, []);

  return (
    <Container>{weather ? <div>들고옴</div> : <div>못 들고옴</div>}</Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export default App;
