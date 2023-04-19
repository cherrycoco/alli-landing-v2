import React, { useState } from 'react';
import DateSelector from './dateSelector';
import TimeSelector from './timeSelector';
import { navigate } from 'gatsby';
import GET_AVAILABILITY from '../../graphql/query/availability';
import Loading from '../loading/loading';
import { useQuery } from '@apollo/client';
import Button from '../button/button';

const Schedule = ({ quiz, setQuiz }) => {
  const [dateIdxSelected, setDateIdxSelected] = useState(0);
  const { proSelected } = quiz;
  const { id, fullName } = proSelected ? proSelected : {};
  const { data, loading, error } = useQuery(GET_AVAILABILITY, { variables: { proId: id,  duration: 4 }});


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
      <div className='mt-16 mx-auto max-w-5xl'>
        <h1 className='text-2xl font-semibold text-gray-700 text-center mb-10'>{`${fullName}'s upcoming availability:`}</h1>
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
      <h1 className='text-2xl font-semibold text-gray-700 text-center mb-10'>{`Looks like ${fullName} doesn't have any more availability left.`}</h1>
      <div>
        <Button className="mx-auto block" onClick={() => navigate(-1)} ><span aria-hidden="true">←</span>{` Go Back To Your Previous Page`}</Button>
      </div>
    </div>
  )
}

export default Schedule;