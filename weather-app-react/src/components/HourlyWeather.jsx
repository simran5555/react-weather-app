import React from 'react';

const HourlyWeather = ({ values }) => {
  return (
    <div>
      <h3>Hourly Temperature:</h3>
      <div>
        {values && values.hourly ? (
          values.hourly.map((hour) => (
            <h4 key={hour.startTime}>{hour.values.temperature}</h4>
          ))
        ) : (
          <p>No hourly temperature data available</p>
        )}
      </div>
    </div>
  );
};

export default HourlyWeather;

