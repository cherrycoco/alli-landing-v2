import React from 'react';
import moment from 'moment/moment';

const DateCard = ({ selected, date, onClick, currentDateIdx }) => {
  const dateMoment = moment(date);
  const rootStyle = 'h-20 w-20 bg-white border border-gray-500 rounded-md flex flex-col justify-center items-center text-gray-600 cursor-pointer hover:bg-primary-100 hover:border-primary-100 hover:bg-primary-100 hover:text-cyan-800';
  const activeStyle = 'h-20 w-20 bg-primary-100 text-cyan-800 rounded-md flex flex-col justify-center items-center';

  return (
    <div 
      className={selected === currentDateIdx ? activeStyle : rootStyle } 
      onClick={onClick}
    >
      <h5 className='text-lg font-semibold'>{dateMoment.format('ddd')}</h5>
      <p>{dateMoment.format('MMM D')}</p>
    </div>
  )
}

export default DateCard;