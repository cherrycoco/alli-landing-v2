import React, { useEffect, useState } from "react";
import useQuiz from "../../context/useQuiz";
import { initialQuizContext } from "../../context/initialState";
import Layout from "../../components/layout/layout";
import BookingForm from "../../components/form/bookingForm";
import { navigate } from "gatsby";
import Button from "../../components/button/button";
import { timeMap } from "../../util/timeMap";
import moment from 'moment';

const tz = {
  ON: 'EST',
  BC: 'PST',
};

const Booking = ({ location }) => {
  const { quiz, setQuiz } = useQuiz() || initialQuizContext;
  const { proSelected, rate, serviceId, stateId } = quiz;
  const date = moment(quiz.date).format('dddd, MMMM Do');
  const time = timeMap[quiz.time];

  const onClick = () => navigate('/get-started/age');

  return (
    <Layout>
      <div className='flex flex-wrap gap-8 justify-center'>
        {serviceId !== 'therapy_consult' ?
          proSelected ? 
          (<div className='my-16 mx-auto max-w-xl'>
            <h1 className='text-3xl font-semibold text-gray-800 mb-6'>{`Your therapy journey is about to begin!`}</h1>
            <p className='text-gray-600 mb-4 text-base'>Your initial assessment session will be on<b>{` ${date} @ ${time} ${tz[stateId]}`}</b> for 50 minutes with <b>{` ${proSelected.fullName} `}</b> at your selected rate of <b>{` $${rate}`}</b>.</p>
            <p className='text-gray-600 text-base italic'>Please fill out the details below to secure your spot:</p>
            <BookingForm quiz={quiz} setQuiz={setQuiz} />
          </div>) :
          (<div className='my-16 mx-auto'>
            <h1 className='text-3xl font-semibold text-gray-800 mb-6'>Oops, we are not sure who you are booking with...</h1>
            <Button className="mx-auto block" onClick={onClick} >Get Matched With A Therapist<span aria-hidden="true">&rarr;</span></Button>
          </div>) :
          <div className='my-16 mx-auto max-w-xl'>
            <h1 className='text-3xl font-semibold text-gray-800 mb-6'>Let's finalize your guidance session with an Alli Guidance Counsellor:</h1>
            <p className='text-gray-600 mb-4 text-base'>Your guidance session will be on<b>{` ${date} @ ${time} EST`}</b> for 30 minutes.</p>
            <p className='text-gray-600 text-base italic'>Please fill out the details below to secure your spot:</p>
            <BookingForm quiz={quiz} setQuiz={setQuiz} />
          </div>

        }
      </div>
    </Layout>
  );
}

export default Booking;