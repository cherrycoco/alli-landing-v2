import React from 'react';
import { ISOMap, timeMap } from '../../util/timeMap';
import moment from 'moment';
import { AddToCalendarButton } from 'add-to-calendar-button-react';
import { addMinutesToTime } from '../../util/helpers';
import useQuiz from '../../context/useQuiz';

const tz = {
  ON: 'EST',
  BC: 'PST',
};

const BookingConfirmation = () => {
  const { quiz, setQuiz } = useQuiz() || {};
  const { proSelected, user, serviceId, date, time, bookingId, stateId } = quiz ? quiz : {};
  const formattedDate = moment(date).format('ddd, MMMM Do YYYY');
  const timeDisplay = (serviceId === 'therapy_consult' && stateId === 'BC') ? timeMap[time-12] : timeMap[time];
  
  const event = {
    title: `Alli | ${serviceId === 'therapy_consult' ? 'Alli Therapy' : proSelected.fullName} <> ${user.firstName}`,
    description: serviceId === 'therapy_consult' ? `Guidance Counselling Session with Alli Therapy` : `Therapy Session with ${proSelected.fullName} at Alli`,
    startTime: ISOMap[time],
    endTime: addMinutesToTime(ISOMap[time], serviceId === 'therapy_consult' ? 30 : 50),
  };

  return (
    <div>
      <div className='flex flex-col items-center space-y-6'>
        <img src='https://res.cloudinary.com/dhze7gimq/image/upload/v1627938464/alli_landing/Thank-You-_1_uatste.png' /> 
        <h1 className='text-4xl font-bold text-gray-800'>{`${user.firstName}, YOU did it!`}</h1>
        <h5 className='text-gray-700 text-xl text-center'>{`Your session on ${formattedDate} at ${timeDisplay} ${tz[stateId]} with ${serviceId === 'therapy_consult' ? 'Alli Therapy' : proSelected.fullName} is booked and ready to go!`}</h5>
        {serviceId !== 'therapy_consult' && <AddToCalendarButton
          name={event.title}
          options={['Apple','Google', 'Microsoft365', 'MicrosoftTeams', 'Outlook.com', 'Yahoo']}
          description={event.description}
          location={proSelected.zoom}
          startDate={date}
          endDate={date}
          startTime={event.startTime}
          endTime={event.endTime}
          timeZone={stateId === 'ON' ? "America/Toronto" : 'BC'}
        />}
      </div>
      {serviceId !== 'therapy_consult' && 
      <div className='mt-20 space-y-4'>
        <h3 className='text-2xl font-bold text-gray-800'>Important next steps...</h3>
        <ol className='list-decimal list-inside space-y-2'>
          <li>Complete your <a className='text-cyan-800 underline font-bold' target="_blank" href={`https://alli.io/get-matched/intake-1?${user.id}`}>intake form.</a></li>
          <li>Complete your <a className='text-cyan-800 underline font-bold' target="_blank" href={`https://alli.io/initial-booking-confirmation?${bookingId}`}>payment authorization form.</a></li>
          <li>Check your inbox (including "junk mail" just in case) for all the details on how to prepare.</li>
        </ol>
      </div>}
    </div>
  )
}

export default BookingConfirmation;