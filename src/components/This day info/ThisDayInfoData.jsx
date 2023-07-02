import temp from "../../assets/img/tempThisDayInfo.svg";
import pressure from "../../assets/img/pressureThDI.svg";
import fallout from "../../assets/img/falloutThDI.svg";
import wind from "../../assets/img/windThDI.svg";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";




// const [inf, setInf] = useState([]);

// const src =
//   "https://api.openweathermap.org/data/2.5/weather?q=karakol&appid=66438398e5bd0e58da592a51b7a2dd7b";

// useEffect(() => {
//   axios.get(src).then((data) => {
//     setInf(data.data.main);
//   });
// }, []);

const ThisDayInfoData = [
  {
    img: temp,
    des: "Температура",
    inform: " - ощущается как",
  },
  {
    img: pressure,
    des: "Давление ",
    inform: "765 мм ртутного столба - нормальное",
  },
  {
    img: fallout,
    des: "Осадки",
    inform: "Без осадков",
  },
  {
    img: wind,
    des: "Ветер",
    inform: "3 м/с юго-запад - легкий ветер",
  },
];

export default ThisDayInfoData
