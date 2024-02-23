import React, { useState } from 'react';

const SearchBar = ({ handleValue }) => {
  const [location, setLocation] = useState('');

  function fetchLocation(e) {
    let data = e.target.value;
    setLocation(data);
  }

  function sendLocation() {
    handleValue(location);
    setLocation('')
  }

  return (
    <div className='flex mb-12'>
      <input
      className='w-full border-green-900 placeholder-green-800 bg-green-100 rounded-md'
        type="text"
        placeholder="Enter Location"
        value={location}
        onChange={(e) => fetchLocation(e)}
      />
      <button className='border-green-900 border-2 bg-green-300 px-2 py-1 rounded-md' onClick={sendLocation}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
