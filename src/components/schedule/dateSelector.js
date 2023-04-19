import React, { useState } from 'react';
import DateCard from './dateCard';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'


const DateSelector = ({ dateIdxSelected, handleDateIdxSelect, schedule }) => {
  const [display, setDisplay] = useState(0);

  const handleLeft = () => {
    if (display >= 3) {
      handleDateIdxSelect(display - 3);
      setDisplay(display - 3);
    }
  }

  const handleRight = () => {
    if (display + 3 <= schedule.length) {
      handleDateIdxSelect(display + 3);
      setDisplay(display + 3);
    }
  }

  const buttonActive = "rounded-full drop-shadow bg-white p-2 text-cyan-800 hover:bg-primary-100";
  const buttonInactive = "rounded-full drop-shadow bg-white p-2 text-gray-300 cursor-not-allowed";
  return (
    <div className='flex mx-auto space-x-2 justify-center items-center'>
      <button
        type="button"
        className={display === 0 ? buttonInactive : buttonActive}
        onClick={handleLeft}
      >
        <ChevronLeftIcon className="h-10 w-10 font-bold" aria-hidden="true" />
      </button>
      {schedule.slice(display, display + 3).map((item, idx) => <DateCard key={item.date} currentDateIdx={(idx + display)} date={item.date} selected={dateIdxSelected} onClick={() => handleDateIdxSelect(idx + display)} />)}
      <button
        type="button"
        className={display + 3 >= schedule.length ? buttonInactive : buttonActive}
        onClick={handleRight}
      >
        <ChevronRightIcon className="h-10 w-10 font-bold" aria-hidden="true" />
      </button>
    </div>
  )
}

export default DateSelector;