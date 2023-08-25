import React, { useEffect, useState } from 'react';
import { timeMap } from '../../util/timeMap';
import moment from 'moment';
import Loading from '../loading/loading';
import Error from '../error/error';
import { loadStripe } from '@stripe/stripe-js';
import Button from '../button/button';

const testKey = 'pk_test_51IBPxRIxwTbDWuonGnlZh1ow5Xgg707C28fiP8XqxKloNtW3yb1IRyhIUZp4jFFVLAHOEOWZU2XEkGwBhA6rdBDm009jiReUOJ';
const liveKey = 'pk_live_51IBPxRIxwTbDWuon6GtMj8et3GxPaMtR64RWY4vrlIDkokFFl4dhDJZAsCCLjbQo9CKOFjAtIf6mEBG4diiBgGw300sIvtsQwj';
const stripePromise = loadStripe(liveKey);

const round = (num) => {
  return Math.floor((num + Number.EPSILON) * 100) / 100
}

const tz = {
  ON: 'EST',
  BC: 'PST',
};

const taxes = {
  ON: 0.12,
  BC: 0.05,
};

const Payment = ({ booking }) => {
  const [servicePrice, setServicePrice] = useState(booking.rate ? booking.rate.rate : 0);
  const [loading, setLoading] = useState(false);
  const date = moment(booking.date).format('dddd, MMMM Do');
  const time = timeMap[booking.startTime];
  const subTotal = servicePrice;
  const tax = round(taxes[booking.stateId] * subTotal);
  const total = subTotal + tax;

  const handleClick = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      bookingId: booking.id,
      userId: booking.user.id,
    };

    console.log(data);
    // Call your backend to create the Checkout session
    const url = 'https://api.alli.io/stripe/createCheckout';
    // const url = 'http://localhost:4000/stripe/createCheckout';

    const response = await fetch(url, { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const session = await response.json();

    // When the customer clicks on the button, redirect them to Checkout.
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (error) {
      console.warn('Error:', error);
    }
  };

  return (
    <form className='max-w-lg mx-auto mt-8 space-y-6'>
      {loading && <Loading />}
      <h6 className='text-xl text-neutral-600'><b>{`${date} @ ${time} ${tz[booking.stateId]}`}</b></h6>
      <div className='space-y-2'>
        <div className='flex justify-between'>
          <p>{`${booking.service.name} with ${booking.pro.fullName}`}</p>
          <p>{`$${servicePrice}`}</p>
        </div>
        {booking.service.type === 'rp' &&
          <div className='flex justify-between'>
            <p>{`Tax (${booking.stateId === 'ON' ? `13% HST` : '5% GST'})`}</p>
            <p>{`$${tax}`}</p>
          </div>
        }
        <div className='flex justify-between'>
          <p><b>Total</b></p>
          <p><b>{`$${total}`}</b></p>
        </div>
      </div>
      <p>Before your session starts, please click below to save your card details. We'll only charge your card after the session, and you'll get an insurance receipt upon charge.</p>
      <Button role='link' onClick={handleClick} color="primary" variant="contained" size='full'>Save Your Card</Button>
      <p className='pt-6 text-neutral-600'><i>A quick reminder: For your first session, there's no charge for cancellations or rescheduling. We kindly ask that you notify your therapist in advance, ensuring that others in need have the opportunity to book.</i></p>
    </form>
  )
}

export default Payment;