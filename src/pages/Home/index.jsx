import React from "react";
import { ThisDayInfo } from "../../components/This day info/ThisDayInfo";
import { ThisDay } from "../../components/This day/ThisDay";
import { WeekPredict } from "../../components/Week predict/Week";
import logo from "../../assets/img/Header logo.svg";
import Select from "react-select";
import "./Home.css";
import { optionsCity } from "../../data";
import { Buttons } from "../../components/Buttons/Buttons";
import { useState } from "react";
import { useEffect } from "react";

export const Home = () => {
 
  return (
    <div className="main">
      <header>
        <div className="logoPart">
          <img src={logo} alt="logo" />
          <p>WEATHER</p>
        </div>
        <Select
          id="sel"
          options={optionsCity}
          placeholder="city"
          className="selectCity"
        />
      </header>
      <section className="topPart">
        <ThisDay />
        <ThisDayInfo />
      </section>
      <Buttons />
      <WeekPredict />
    </div>
  );
};
