import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);  
    onSearch(e.target.value);  
  };

  return (
    <div className="searchbar-container">
      <input
       className="searchbar-input"
        type="text"
        placeholder="Buscar película..."
        value={query}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
