import React, { useState } from "react";
import "./App.css";


function CurrentDay(props) {
  // Set data from the props - by default it will be showing current daty
  const [wetData, setWetData] = useState({
    city: "",
    region: "",
    localtime: "",
    temp_c: "",
    condition: "",
    wind_kph: "",
  });

  const [isOn, setIsOn] = useState(true);
  

  // Setting up current date
  const d = new Date()

  const [DateSetup, setDateSetup] = useState({
    day: d.getDate(),
    month: d.getMonth() + 1,
    year: d.getFullYear()
  })

  function handleClick(e) {
    

    if (e.target.id == "1") {
      console.log("First Button clicked");
      setWetData(() => {
        return {
          city: props.weatherData.city,
          region: props.weatherData.region,
          localtime: props.weatherData.localtime,
          temp_c: props.weatherData.temp_c,
          condition: props.weatherData.condition,
          wind_kph: props.weatherData.c_wind_kph,
          icon: props.weatherData.c_icon_condition,
        };
      });
      setIsOn(false);
      setDateSetup({
        day: d.getDate(),
        month: d.getMonth() + 1,
        year: d.getFullYear()
      })

    } else if (e.target.id == "2") {
      console.log("Second button clicked");
      setWetData(() => {
        return {
          city: props.weatherData.city,
          region: props.weatherData.region,
          localtime: props.weatherData.localtime,
          temp_c: props.weatherData.t_temp_c,
          condition: props.weatherData.t_condition,
          wind_kph: props.weatherData.t_wind_kph,
          icon: props.weatherData.t_icon_condition,
        };
      });
      setIsOn(false);
      setDateSetup(prevData => {
        return {
          ...prevData,
          day: d.getDate() + 1
        }
      })
    } else if (e.target.id == "3") {
      console.log("Third button clicked");
      setWetData(() => {
        return {
          city: props.weatherData.city,
          region: props.weatherData.region,
          localtime: props.weatherData.localtime,
          temp_c: props.weatherData.tn_temp_c,
          condition: props.weatherData.tn_condition,
          wind_kph: props.weatherData.tn_wind_kph,
          icon: props.weatherData.tn_icon_condition,
        };
      });
      setIsOn(false);
      setDateSetup(prevData => {
        return {
          ...prevData,
          day: d.getDate() + 2
        }
      })
    }
  }

  return (
    <div className="currentDay">
      <div className="middle--container">
        <h2 className="curDate">
          Datum: <span className="numberDatum"> {`${DateSetup.day}. ${DateSetup.month}. ${DateSetup.year}`}</span>
        </h2>
        <h1>
          Weather forecast for:{" "}
          <span className="town">
            {isOn ? props.weatherData.city : wetData.city}
          </span>{" "}
        </h1>
        <h1 className="predpoved">
          {isOn ? props.weatherData.condition : wetData.condition}{" "}
        </h1>
        <h1>
          Temperature🌡️: <span className="temperatureStyling">{isOn ? props.weatherData.temp_c : wetData.temp_c}°C</span>
        </h1>
        <img
          className="myimages"
          src={isOn ? props.weatherData.c_icon_condition : wetData.icon}
        alt="weather icon" />
        <div>
          <button className="button-54" id="1" onClick={handleClick}>
            Today
          </button>
          <button className="button-54" id="2" onClick={handleClick}>
            Tomorrow
          </button>
          <button className="button-54" id="3" onClick={handleClick}>
            After tomorrow
          </button>
        </div>
      </div>
    </div>
  );
}

export default CurrentDay;
