import React, { useEffect, useState } from 'react';
import WeatherCard from './components/WeatherCard';
import SearchBar from './components/SearchBar';

function App() {
  const [temp, setTemp] = useState('');
  const [location, setLocation] = useState('');

  const handleLocation = (data) => {
    setLocation(data);
  };

  useEffect(() => {
    const fetchTemp = async () => {
      try {
        if (location) {
          function formatLocationForApi(location) {
            // Convert "New York" to "new%20york"
            return location.toLowerCase().replace(/\s/g, '%20');
          }
          let apiloc = formatLocationForApi(location)
          const res = await fetch(
            `https://api.tomorrow.io/v4/weather/forecast?location=${apiloc}&apikey=T6W5JyDje3RSfu18fGmQyqfnvdny2tzl`
          );
          const data = await res.json();

          if (data && data.timelines && data.timelines.hourly) {
            const tempValue = data.timelines.hourly[1]?.values?.temperature;
            setTemp(tempValue);
          }
        }
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchTemp();
  }, [location]);

  return (
    <div className='w-1/2 mx-auto mt-48 px-32 bg-green-100'>
      <SearchBar handleValue={handleLocation} />
      <WeatherCard location={location} temperature={temp} />
    </div>
  );
}

export default App;

