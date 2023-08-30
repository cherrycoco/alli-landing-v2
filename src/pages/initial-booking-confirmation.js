import React from 'react';
import Layout from "../components/layout/layout";
import Payment from '../components/form/payment';
import { useQuery } from "@apollo/client";
import GET_BOOKING from "../graphql/query/booking";
import Loading from '../components/loading/loading';

const InitialBookingConfirmation = ({ location }) => {
  const id = location.search ? location.search.slice(1) : '';
  console.log(id);
  const { loading, error, data } = useQuery(GET_BOOKING, { variables: { id }});
  
  if (loading) return <Loading />;
  if (error) return <h3 className='my-16'>Sorry we cannot find the booking!</h3>;
  if (!data.booking) return <h3 className='my-16'>Sorry we cannot find the booking!</h3>;
  
  console.log('data', data.booking);
  return (
    <Layout location={location}>
      <main className='flex flex-wrap gap-8 justify-center'>
        {data.booking && 
          <div className='my-16 mx-auto max-w-xl'>
            <h1 className='text-3xl font-semibold text-gray-800 mb-6'>{`${data.booking.user.firstName}, confirm your upcoming session:`}</h1>
            <Payment booking={data.booking} />
          </div>
        }
      </main>
    </Layout>
  )
};

  
export default InitialBookingConfirmation;

