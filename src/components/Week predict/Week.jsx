import React, { useEffect, useState } from "react";
// import { WeekData } from "./WeekData";
import cloudy from "../../assets/img/cloudyIco.svg";
import sun from "../../assets/img/SunThD.svg";
import rain from "../../assets/img/rainIco.svg";
import smallRain from "../../assets/img/smallRainIco.svg";
import storm from "../../assets/img/StormIco.svg";
import "./Week.css";
import axios from "axios";

export const WeekPredict = () => {
  const [weekInfo, setWeekInfo] = useState([]);

  const src =
    "http://api.openweathermap.org/data/2.5/weather?q=karakol&cnt=7&APPID=a0038ec1ae332d55df197d3ae1cdc523";

  useEffect(() => {
    axios.get(src).then((data) => {
      let then = new Date()
      let now = new Date(data.data.dt)
      // setWeekInfo(new Date(Math.floor(then - now)));
      // setWeekInfo(new Date(then-now))
      console.log(new Date(Math.floor(then - now)))
    });
    // console.log(weekInfo)  Math.floor((now - date) / 1000)
  }, []);

  const WeekData = [
    {
      day: "Сегодня",
      date: weekInfo,
      img: cloudy,
      tempDay: "+" + 19 + "°",
      tempNight: "+" + 19 + "°",
      weatherDes: "Облачно",
    },
    {
      day: "Завтра",
      date: "22.06",
      img: sun,
      tempDay: "+" + 19 + "°",
      tempNight: "+" + 18 + "°",
      weatherDes: "Облачно",
    },
    {
      day: "Сегодня",
      date: "23.06",
      img: rain,
      tempDay: "+" + 18 + "°",
      tempNight: "+" + 18 + "°",
      weatherDes: "Облачно",
    },
    {
      day: "Сегодня",
      date: "21.06",
      img: smallRain,
      tempDay: "+" + 18 + "°",
      tempNight: "+" + 18 + "°",
      weatherDes: "Облачно",
    },
    {
      day: "Сегодня",
      date: "21.06",
      img: storm,
      tempDay: "+" + 18 + "°",
      tempNight: "+" + 18 + "°",
      weatherDes: "Облачно",
    },
    {
      day: "Сегодня",
      date: "21.06",
      img: cloudy,
      tempDay: "+" + 18 + "°",
      tempNight: "+" + 18 + "°",
      weatherDes: "Облачно",
    },
    {
      day: "Сегодня",
      date: "21.06",
      img: cloudy,
      tempDay: "+" + 18 + "°",
      tempNight: "+" + 18 + "°",
      weatherDes: "Облачно",
    },
  ];
  return (
    <div className="weekCards">
      {WeekData.map((el, id) => {
        return (
          <div el={el} key={id} className="weekCard">
            <p className="dayW">{el.day}</p>
            <span className="dateW">{el.date}</span>
            <img src={el.img} alt="" className="imgW" />
            <p className="tempDayW">{el.tempDay}</p>
            <span className="tempNightW">{el.tempNight}</span>
            <span className="weatherDesW">{el.weatherDes}</span>
          </div>
        );
      })}
    </div>
  );
};
