import React, { useEffect, useState } from 'react';
import Layout from '../components/layout/layout';
import Loading from '../components/loading/loading';
import GET_BOOKING from '../graphql/query/booking';
import { useMutation, useQuery } from '@apollo/client';
import { timeMap } from '../util/timeMap';
import { isWithin24Hours } from '../util/helpers';
import Button from '../components/button/button';
import CANCEL_BOOKING from '../graphql/mutation/cancelBooking';
import Error from '../components/error/error';
import { navigate } from 'gatsby';
import emailError from '../util/emailError';

const CancelBooking = ({ location }) => {
  const id = location.search ? location.search.slice(1) : '';
  const [note, setNote] = useState('');
  console.log(location, id);
  const { loading, error, data } = useQuery(GET_BOOKING, { variables: { id }});
  const [cancelBooking, { loading: cancelLoading, error: cancelError, data: cancelData }] = useMutation(CANCEL_BOOKING);
  const [errorMsg, setErrorMsg] = useState('');
  console.log(data, error);

  useEffect(() => {
    if (cancelData && cancelData.cancelBooking) { 
      const { success, message, booking, user } = cancelData.cancelBooking;
      if (success) {
        navigate(`/thank-you?cancel`);
      } else {
        emailError(`Error - Cancel Booking`, { id, note, err: message });
        setErrorMsg('Sorry we had trouble cancelling your booking - could you please reach out to your therapist to cancel your session?');
      }
    }
  }, [cancelData]);

  if (loading || cancelLoading) return <Loading />;
  if (error) return <h3 style={{marginTop: '100px'}}>Sorry we cannot find the booking!</h3>;
  if (!data.booking) return <h3 style={{marginTop: '100px'}}>Sorry we cannot find the booking!</h3>;

  const { date, startTime, pro, rate, service } = data.booking;
  const is24Hours = isWithin24Hours(date, startTime);
  console.log(is24Hours);

  const handleCancel = () => {
    const variables = {
      id,
      status: is24Hours ? 'CANCELLED_LATE' : 'CANCELLED',
      note,
    };

    console.log(variables);
    cancelBooking({
      variables,
    });
  };

  return (
    <Layout>
      <div className='my-16 mx-auto max-w-xl'>
        <h1 className='text-3xl font-semibold text-gray-800 mb-6'>Time for a schedule shuffle?</h1>
        <p className='text-gray-600 mb-4 text-base'>We've got your session penciled in for <b>{` ${date} @ ${timeMap[startTime]} `}</b> with <b>{` ${pro.fullName}`}</b>.</p>
        {service.id.includes('followup') ? 
        (is24Hours ? <p className='text-gray-600 mb-4 text-base'>{`Heads up! With less than 24 hours to your session, cancelling now means you'll be charged your selected session rate of $${rate.rate}.`}</p> :
        <p className='text-gray-600 mb-4 text-base'>No stress! With more than 24 hours to go, you can still cancel your session free of charge.</p>) : <p className='text-gray-600 mb-4 text-base'>Don't worry, we know things can come up unexpectedly. Feel free to cancel your session at no cost.</p>
        }
        <p className='text-gray-600 mb-2 text-base'>{`Before you cancel, could you drop a line for your therapist? Let ${pro.firstName} know if you're looking to reschedule, take a short break, or if there's anything else they should be aware of.`}</p>
        <textarea value={note} onChange={e => setNote(e.target.value)} rows={6} className='my-4 w-full p-2 border-gray-300 rounded-md' placeholder={`Write your note to ${pro.firstName} here...`}></textarea>
        {errorMsg && <Error message={errorMsg} />}
        <Button onClick={handleCancel}>Proceed with Cancellation</Button>
      </div>
    </Layout>
  )
}

export default CancelBooking;