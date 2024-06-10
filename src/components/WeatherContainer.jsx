import React from "react";
import styled from "styled-components";
import { media } from "../styles/media";

const WeatherContainer = ({ weatherString, weatherIcon, children }) => {
  return (
    <Container weatherString={weatherString}>
      {/* 왼쪽 위 모서리 아이콘 */}
      <WeatherIconBox>
        <span>날씨 : </span>
        <WeatherIcon
          src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
          alt="weather_image"
        />
      </WeatherIconBox>
      {children}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &::after {
    content: "";
    width: 100%;
    height: 100vh;

    background-image: url(${(props) =>
      props.weatherString ? props.weatherString : "img/sunny.jpg"});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 0.4;

    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    z-index: -1;
  }

  ${media.xl`
    padding: 5rem 0;
    height: auto;

    &::after {
      height: auto;
    }
  `}
`;

const WeatherIconBox = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;

  display: flex;
  align-items: center;
  color: #656565;
`;

const WeatherIcon = styled.img`
  width: 40px;
  height: 40px;
`;

export default WeatherContainer;
