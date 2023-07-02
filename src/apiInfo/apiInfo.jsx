import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

export const WeatherData = () => {
  const [info, setInfo] = useState([]);

  const src =
    "https://api.openweathermap.org/data/2.5/weather?q=karakol&appid=66438398e5bd0e58da592a51b7a2dd7b";

  useEffect(() => {
    axios.get(src).then((data) => {
      setInfo(data.data.main);
    });
  }, []);
};
