import React, { useState } from 'react';
import DateSelector from './dateSelector';
import TimeSelector from './timeSelector';
import { navigate } from 'gatsby';
import GET_AVAILABILITY from '../../graphql/query/availability';
import Loading from '../loading/loading';
import { useQuery } from '@apollo/client';
import Button from '../button/button';

const ScheduleGuidance = ({ quiz, setQuiz }) => {
  const [dateIdxSelected, setDateIdxSelected] = useState(0);
  const { data, loading, error } = useQuery(GET_AVAILABILITY, { variables: { proId: 'xuWDXJNvhuXOa0fcEgIQpaaiSuy1',  duration: 2 }});

  const handleTimeIdxSelect = (idx) => {
    const newQuiz = {
      ...quiz,
      time: idx,
      date: data.availability[dateIdxSelected].date,
    };

    setQuiz(newQuiz);
    navigate('/get-started/booking');
  }; 

  const handleDateIdxSelect = (idx) => {
    setDateIdxSelected(idx);
  };

  if (loading) return <Loading />;

  if (data.availability && data.availability.length > 0) {
    return (
      <div className='mt-16 mx-auto max-w-xl'>
        <h1 className='text-2xl font-semibold text-gray-700 text-center mb-10'>{`Schedule a guidance session with an Alli counsellor:`}</h1>
        <p className='text-gray-600 mb-4'>Schedule a free 30-minute meeting with one of our counsellors for guidance.</p>
        <p className='text-gray-600 mb-10'>During this meeting, you will learn more about how Alli works and have the chance to ask any questions you may have about choosing the right therapist for you.</p>
        <DateSelector 
          schedule={data.availability} 
          dateIdxSelected={dateIdxSelected} 
          handleDateIdxSelect={handleDateIdxSelect} 
          />
        <TimeSelector
          times={data.availability[dateIdxSelected].times} 
          handleTimeIdxSelect={handleTimeIdxSelect}
          />
      </div>
    )
  }

  return (
    <div className='mt-16 mx-auto max-w-5xl'>
      <h1 className='text-2xl font-semibold text-gray-700 text-center mb-10'>{`Looks like we are fully booked! Please email us at hello@alli.io and we can help you there!`}</h1>
      <div>
        <Button className="mx-auto block" onClick={() => navigate(-1)} ><span aria-hidden="true">←</span>{` Go Back To Your Previous Page`}</Button>
      </div>
    </div>
  )
}

export default ScheduleGuidance;