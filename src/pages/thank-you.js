import React from 'react';
import Layout from '../components/layout/layout';
import BookingConfirmation from '../components/thankYou/bookingConfirmation';
import Share from '../components/share/share';

const ThankYouPage = ({ location }) => {
  const id = location.search ? location.search.slice(1) : '';

  return (
    <Layout footer>
      <div className='w-11/12 mx-auto my-16 max-w-2xl flex flex-col items-center space-y-8'>
        <img src='https://res.cloudinary.com/dhze7gimq/image/upload/v1627938464/alli_landing/Thank-You-_1_uatste.png' /> 
        {id === 'cancel' && 
        <div className="text-center">
          <h1 className='text-2xl font-semibold text-gray-800 mb-6'>Session Successfully Cancelled</h1>
          <p className='text-gray-600 mb-4 text-lg'>Remember, we're here for you anytime. Don't hesitate to reach out when you need an Alli!</p>
        </div>}
        {id === 'booking-confirmation' && <BookingConfirmation />}
        {id === 'payment' && 
        <div className="text-center">
          <h1 className='text-2xl font-semibold text-gray-800 mb-6'>Your card details have been securely saved!</h1>
          <p className='text-gray-600 mb-4 text-lg'>Thank you for taking this step. We're excited for your upcoming therapy sessions!</p>
        </div>}
        <Share 
          url='https://alli.io/'
          title='Be an Alli: Spread the words'
          description="Help your friends and community get the therapy they deserve! At Alli, we're dedicated to making sure anyone and everyone who is ready for therapy can get it, no matter their budget. Share the love and be an Alli too."
        />
      </div>
    </Layout>
  )
}

export default ThankYouPage;