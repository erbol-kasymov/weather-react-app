// export const optionsCity = [
//   { value: "karakol", label: "Karakol" },
//   { value: "bishkek", label: "Bishkek" },
//   { value: "osh", label: "Osh" },
// ];
  // window.myWidgetParam ? window.myWidgetParam : (window.myWidgetParam = []);

  window.myWidgetParam.push({
    id: 21,
    cityid: "1528121",
    appid: "66438398e5bd0e58da592a51b7a2dd7b",
    units: "metric",
    containerid: "openweathermap-widget-21",
  });
  (function () {
    var script = document.createElement("script");
    script.async = true;
    script.charset = "utf-8";
    script.src =
      "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(script, s);
  })();
