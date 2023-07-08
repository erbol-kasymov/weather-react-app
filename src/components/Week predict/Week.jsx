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
  // const [weekInfo, setWeekInfo] = useState([]);
  const [one, setOne] = useState(new Date());
  const [two, setTwo] = useState(new Date());
  const [three, setThree] = useState(new Date());
  const [four, setFour] = useState(new Date());
  const [five, setFive] = useState(new Date());
  const [six, setSix] = useState(new Date());
  const [seven, setSeven] = useState(new Date());

  // api
  const src =
    "http://api.openweathermap.org/data/2.5/forecast/daily?q=karakol&cnt=7&APPID=a0038ec1ae332d55df197d3ae1cdc523";

  useEffect(() => {
    axios.get(src).then((data) => {
      // console.log(data.data)
    });
  }, []);

  // Week date
  useEffect(() => {
    setOne(new Date());
  }, []);

  let month = one.getMonth() + 1;

  //1
  let date1 = one.getDate();

  //2
  useEffect(() => {
    setTwo(new Date(new Date(new Date().getTime() + 24 * 60 * 60 * 1000)));
  }, []);

  let date2 = two.getDate();

  //3
  useEffect(() => {
    setThree(new Date(new Date(new Date().getTime() + 48 * 60 * 60 * 1000)));
  }, []);

  let date3 = three.getDate();

  //4
  useEffect(() => {
    setFour(new Date(new Date(new Date().getTime() + 72 * 60 * 60 * 1000)));
  }, []);

  let date4 = four.getDate();

  //5
  useEffect(() => {
    setFive(new Date(new Date(new Date().getTime() + 96 * 60 * 60 * 1000)));
  }, []);

  let date5 = five.getDate();

  //6
  useEffect(() => {
    setSix(new Date(new Date(new Date().getTime() + 120 * 60 * 60 * 1000)));
  }, []);

  let date6 = six.getDate();

  //7
  useEffect(() => {
    setSeven(new Date(new Date(new Date().getTime() + 144 * 60 * 60 * 1000)));
  }, []);

  let date7 = seven.getDate();

  if (month <= 9) month = "0" + month;
  if (date1 <= 9) date1 = "0" + date1;
  if (date2 <= 9) date2 = "0" + date2;
  if (date3 <= 9) date3 = "0" + date3;
  if (date4 <= 9) date4 = "0" + date4;
  if (date5 <= 9) date5 = "0" + date5;
  if (date6 <= 9) date6 = "0" + date6;
  if (date7 <= 9) date7 = "0" + date7;

  const monthDate1 = `${date1}:${month}`;
  const monthDate2 = `${date2}:${month}`;
  const monthDate3 = `${date3}:${month}`;
  const monthDate4 = `${date4}:${month}`;
  const monthDate5 = `${date5}:${month}`;
  const monthDate6 = `${date6}:${month}`;
  const monthDate7 = `${date7}:${month}`;

  // week name
  let options = { weekday: "short" };

  //3
  let weekName3 = new Date(
    new Date(new Date().getTime() + 48 * 60 * 60 * 1000)
  );
  let dayOfWeek3 = weekName3.toLocaleString("RU", options);

  //4 
  let weekName4 = new Date(
    new Date(new Date().getTime() + 72 * 60 * 60 * 1000)
  );
  let dayOfWeek4 = weekName4.toLocaleString("RU", options);

  //5 
  let weekName5 = new Date(
    new Date(new Date().getTime() + 96 * 60 * 60 * 1000)
  );
  let dayOfWeek5 = weekName5.toLocaleString("RU", options);

  //6 
  let weekName6 = new Date(
    new Date(new Date().getTime() + 120 * 60 * 60 * 1000)
  );
  let dayOfWeek6 = weekName6.toLocaleString("RU", options);

  //7
  let weekName7 = new Date(
    new Date(new Date().getTime() + 144 * 60 * 60 * 1000)
  );
  let dayOfWeek7 = weekName7.toLocaleString("RU", options);

  // data
  const WeekData = [
    {
      id: 1,
      day: "Сегодня",
      date: monthDate1,
      img: cloudy,
      tempDay: "+" + 19 + "°",
      tempNight: "+" + 19 + "°",
      weatherDes: "Облачно",
    },
    {
      id: 2,
      day: "Завтра",
      date: monthDate2,
      img: sun,
      tempDay: "+" + 19 + "°",
      tempNight: "+" + 18 + "°",
      weatherDes: "Облачно",
    },
    {
      id: 3,
      day: dayOfWeek3,
      date: monthDate3,
      img: rain,
      tempDay: "+" + 18 + "°",
      tempNight: "+" + 18 + "°",
      weatherDes: "Облачно",
    },
    {
      id: 4,
      day: dayOfWeek4,
      date: monthDate4,
      img: smallRain,
      tempDay: "+" + 18 + "°",
      tempNight: "+" + 18 + "°",
      weatherDes: "Облачно",
    },
    {
      id: 5,
      day: dayOfWeek5,
      date: monthDate5,
      img: storm,
      tempDay: "+" + 18 + "°",
      tempNight: "+" + 18 + "°",
      weatherDes: "Облачно",
    },
    {
      id: 6,
      day: dayOfWeek6,
      date: monthDate6,
      img: cloudy,
      tempDay: "+" + 18 + "°",
      tempNight: "+" + 18 + "°",
      weatherDes: "Облачно",
    },
    {
      id: 7,
      day: dayOfWeek7,
      date: monthDate7,
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
