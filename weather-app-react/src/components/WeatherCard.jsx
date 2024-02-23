import React from "react";

const WeatherCard = ({ temperature, location }) => {
  
  return (
    <div className="flex justify-between">
      <h3 className="text-xl font-bold"> {location?location:'Delhi'} </h3>
      <h4 className="text-xl font-bold">{temperature? temperature + 'C': '23C'}</h4>
    </div>
  );
};

export default WeatherCard;
