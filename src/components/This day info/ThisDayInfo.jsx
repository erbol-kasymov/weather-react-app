import React from "react";
import "./ThisDayInfo.css";
// import { ThisDayInfoData } from "./ThisDayInfoData";
import tempIco from "../../assets/img/tempThisDayInfo.svg";
import pressure from "../../assets/img/pressureThDI.svg";
import fallout from "../../assets/img/falloutThDI.svg";
import wind from "../../assets/img/windThDI.svg";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

export const ThisDayInfo = (el) => {
  const [info, setInfo] = useState([]);

  const src =
    `https://api.openweathermap.org/data/2.5/weather?q=karakol&appid=66438398e5bd0e58da592a51b7a2dd7b`;

  useEffect(() => {
    axios.get(src).then((data) => {
      setInfo(data.data);
    });
  }, []);

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

  return (
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
  );
};
