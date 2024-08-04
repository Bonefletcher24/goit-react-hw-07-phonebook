import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/filterSlice';
import './Filter.css'; // Импорт стилей

const Filter = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector(state => state.filter);
  const [filter, setFilterValue] = useState(currentFilter);

  const handleChange = (e) => {
    setFilterValue(e.target.value);
  };

  const handleSearch = () => {
    dispatch(setFilter(filter));
  };

  return (
    <div className="filter-container">
      <input
        type="text"
        value={filter}
        onChange={handleChange}
        placeholder="Search contacts"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Filter;