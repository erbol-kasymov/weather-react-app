import React from "react";
import { WeekData } from "./WeekData";
import "./Week.css";

export const WeekPredict = () => {
  return (
    <div className="weekCards">
      {WeekData.map((el, id) => {
        return (
          <div el={el} key={id} className="weekCard">
            <p className="dayW">{el.day}</p>
            <span className="dateW">{el.date}</span>
            <img src={el.img} alt="" className="imgW"/>
            <p className="tempDayW">{el.tempDay}</p>
            <span className="tempNightW">{el.tempNight}</span>
            <span className="weatherDesW">{el.weatherDes}</span>
          </div>
        );
      })}
    </div>
  );
};
