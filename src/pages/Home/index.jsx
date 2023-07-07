import React from "react";
import { ThisDayInfo } from "../../components/This day info/ThisDayInfo";
import { ThisDay } from "../../components/This day/ThisDay";
import { WeekPredict } from "../../components/Week predict/Week";
import logo from "../../assets/img/Header logo.svg";
// import Select from "react-select";
import "./Home.css";
// import { optionsCity } from "../../data";
import { Buttons } from "../../components/Buttons/Buttons";
import { useState } from "react";

export const Home = () => {
  const [sel, setSel] = useState();
  return (
    <div className="main">
      <header>
        <div className="logoPart">
          <img src={logo} alt="logo" />
          <p>WEATHER</p>
        </div>
        <select
          value={sel}
          onChange={(e) => setSel(e.target.value)}
          // options={optionsCity}
          className="selectCity"
        >
          <option>Karakol</option>
          <option>Bishkek</option>
          <option>Osh</option>
        </select>
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
