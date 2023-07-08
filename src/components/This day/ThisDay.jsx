import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles/ThisDay.css";
import "./styles/ThisDayInfo.css";
import "./styles/Home.css";
import "./styles/Buttons.css"

import { WeekPredict } from "../../components/Week predict/Week";

import logo from "../../assets/img/Header logo.svg";
import sun from "../../assets/img/SunThD.svg";
import rain from "../../assets/img/rainIco.svg";
import smallRain from "../../assets/img/smallRainIco.svg";
import storm from "../../assets/img/StormIco.svg";
import cloudy from "../../assets/img/cloudyIco.svg";
import tempIco from "../../assets/img/tempThisDayInfo.svg";
import pressure from "../../assets/img/pressureThDI.svg";
import fallout from "../../assets/img/falloutThDI.svg";
import wind from "../../assets/img/windThDI.svg";

export const Weather = () => {
  const [info, setInfo] = useState([]);
  const [time, setTime] = useState(new Date());
  const [weatherState, setWeatherState] = useState("");
  const [sel, setSel] = useState();

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
  const src = `https://api.openweathermap.org/data/2.5/weather?q=${sel}&appid=66438398e5bd0e58da592a51b7a2dd7b`;

  useEffect(() => {
    axios.get(src).then((data) => {
      setInfo(data.data);
      setWeatherState(data.data.weather[0].main);
    });
  }, [src]);

  // weather state
  let ws;
  if (weatherState === "Rain") {
    ws = rain;
  } else if (weatherState === "Clouds") {
    ws = cloudy;
  } else if (weatherState === "Drizzle") {
    ws = smallRain;
  } else if (weatherState === "Thunderstorm") {
    ws = storm;
  } else if (weatherState === "Clear") {
    ws = sun;
  } else {
    ws = rain;
  }

  const ThisDayInfoData = [
    {
      img: tempIco,
      des: "Температура",
      inform:
        Math.round(info?.main?.temp - 273.15) +
        "° - ощущается как " +
        Math.round(info?.main?.feels_like - 273.15) +
        "°",
    },
    {
      img: pressure,
      des: "Давление ",
      inform: info?.main?.pressure + " мм ртутного столба",
    },
    {
      img: fallout,
      des: "Влажность",
      inform: info?.main?.humidity + "%",
    },
    {
      img: wind,
      des: "Ветер",
      inform: Math.round(info?.wind?.speed) + " м/с",
    },
  ];

  ///////////////////////////////////////

  return (
    <div className="main">
      <header>
        <div className="logoPart">
          <img src={logo} alt="logo" />
          <p>WEATHER</p>
        </div>
        <select
          // value={sel}
          onChange={(e) => setSel(e.target.value)}
          className="selectCity"
        >
          <option>Karakol</option>
          <option>Bishkek</option>
          <option>Osh</option>
        </select>
      </header>
      <section className="topPart">
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
        <div className="mainThDI">
          {ThisDayInfoData.map((el, id) => {
            return (
              <div el={el} key={id} className="items">
                <div className="iconRound">
                  <img src={el.img} alt="" className="iconThDI" />
                </div>
                <span className="iconDes">{el.des}</span>
                <p className="infoThDI">{el.inform}</p>
              </div>
            );
          })}
        </div>
      </section>
      <div className="buttons">
      <div className="popUopButtons">
        <button className="forWeek">На неделю</button>
        <button className="forMonth">На месяц</button>
      </div>
      <button className="canc">Отменить</button>
    </div>
      <WeekPredict />
    </div>
  );
};
