import React, { useState, useEffect } from "react";
import CurrentDay from "./CurrentDay";
import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState({
    city: "",
    region: "",
    localtime: "",
    temp_c: "",
    condition: "",
    wind_kph: "",
  });

  useEffect(() => {
    fetch(
      "https://api.weatherapi.com/v1/forecast.json?key=e5519f251e094d8d9c9184701211912&q=Prague&days=3&aqi=no&alerts=no"
    )
      .then((res) => res.json())
      .then((data) =>
        setWeatherData({
          city: data.location.name,
          region: data.location.region,
          localtime: data.location.localtime,
          c_wind_kph: data.current.condition.wind_kph,
          temp_c: data.current.temp_c,
          condition: data.current.condition.text,
          c_icon_condition: data.current.condition.icon,
          c_wind_kph: data.current.wind_kph,
          t_temp_c: data.forecast.forecastday[1].day.avgtemp_c,
          t_wind_kph: data.forecast.forecastday[1].day.maxwind_kph,
          t_condition: data.forecast.forecastday[1].day.condition.text,
          t_icon_condition: data.forecast.forecastday[1].day.condition.icon,
          tn_icon_condition: data.forecast.forecastday[2].day.condition.icon,
          tn_condition: data.forecast.forecastday[2].day.condition.text,
          tn_temp_c: data.forecast.forecastday[2].day.avgtemp_c,
          tn_wind_kph: data.forecast.forecastday[2].day.maxwind_kph,
        })
      );
  }, []);


  return (
    <div className="App">
      <CurrentDay weatherData={weatherData} />
    </div>
  );
}

export default App;
