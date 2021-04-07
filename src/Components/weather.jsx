import React, { useEffect, useState } from "react";
import "./weather.css";

const Weather = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("New Delhi");

  useEffect(() => {
    const fetchApi = async () => {
      //   const key="f5b2b9b74cdd5bbc3e0af8f298428bae";
      // const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&APPID=f5b2b9b74cdd5bbc3e0af8f298428bae`

      const url = `https://api.weatherapi.com/v1/current.json?key= 0454e4265d9c45db93923934213003&q=${search}&aqi=no`;
      const response = await fetch(url);
      const resp = await response.json();
      setCity(resp);
    };

    fetchApi();
  }, [search]);

  return (
    <>
      <div className="box">
        <div className="inp">
          <input
            type="search"
            value={search}
            name="searchBox"
            id="searchBox"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>
        {!city || !city.current ? (
          <p>No Data Found</p>
        ) : (
          <div className="content">
            <div className="location">
              {/* <i className="fa fa-3x fa-street-view" aria-hidden="true"></i> */}
              <img
                className="icon"
                src={city.current.condition.icon}
                alt="imge"
              ></img>

              <div className="locationName">{search}</div>
            </div>
            <div className="tempe">
              {/* {city.current.condition.text} */}
              <h3>
                {city.current.temp_c}
                <small>° Celsius</small>
              </h3>
            </div>
            <h4>Humidity: {city.current.humidity}</h4>
            <h4> Wind Speed: {city.current.wind_kph} km/h</h4>
            <h4> Visibility: {city.current.vis_km} km</h4>
          </div>
        )}
      </div>

      <div className="me">
        <a
          href="https://www.linkedin.com/in/nidhi-gahlawat-01947818a/"
          
        >
          <i className="fa fa-linkedin"> </i>
        </a>
        <h2>Nidhi Gahlawat</h2>
      </div>
    </>
  );
};
export default Weather;
