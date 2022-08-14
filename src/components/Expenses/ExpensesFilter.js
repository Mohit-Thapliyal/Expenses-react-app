import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

    const onSelectFilterHandler = e => {
        props.onSelectDate(e.target.value);
    }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>साल के हिसाब से छाँटें</label>
        <select value={props.filterYear} onChange={onSelectFilterHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;