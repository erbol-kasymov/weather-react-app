import React from "react";
import "./ThisDay.css";
import sun from "../../assets/img/SunThD.svg";
import rain from "../../assets/img/rainIco.svg";
import smallRain from "../../assets/img/smallRainIco.svg";
import storm from "../../assets/img/StormIco.svg";
// import smallRainSun from "../../assets/img/smallRainSunIco.svg";
import cloudy from "../../assets/img/cloudyIco.svg";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

export const ThisDay = () => {
  const [info, setInfo] = useState([]);
  const [time, setTime] = useState(new Date());
  let [weatherState, setWeatherState] = useState("");

  //WeatherState

  // Time
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  let hours = time.getHours();
  let minutes = time.getMinutes();

  if (hours <= 9) hours = "0" + hours;
  if (minutes <= 9) minutes = "0" + minutes;

  const timeString = `${hours}:${minutes}`;

  // Temperature
  const src =
    "https://api.openweathermap.org/data/2.5/weather?q=karakol&appid=66438398e5bd0e58da592a51b7a2dd7b";

  useEffect(() => {
    axios.get(src).then((data) => {
      setInfo(data.data);
      setWeatherState(data.data.weather.map((weather) => <>{weather.main}</>));

    });
  }, []);


  let ws;
  if ((weatherState == "Rain")) {
    ws = rain;
  } else if ((weatherState == "Clouds")) {
    ws = cloudy;
  } else if ((weatherState == "Drizzle")) {
    ws = smallRain;
  } else if ((weatherState == "Thunderstorm")) {
    ws = storm;
  } else if ((weatherState == "Clear")) {
    ws = sun;
  } else {
    ws = rain;
  }

  // console.log(weatherState)

  ///////////////////////////////////////
  return (
    <div className="mainThD">
      <div className="topPart">
        <div className="topLeftPart">
          <p className="dayTemp">
            {Math.round(info?.main?.temp - 273.15)}
            <span>°</span>
          </p>
          <span className="today">Сегодня</span>
        </div>
        <img src={ws} alt="" className="weatherStateIco" />
      </div>
      <div className="bottomPart">
        <p className="time">
          Время: <span>{timeString}</span>
        </p>
        <p className="city">
          Город: <span>{info?.name}</span>
        </p>
      </div>
    </div>
  );
};
