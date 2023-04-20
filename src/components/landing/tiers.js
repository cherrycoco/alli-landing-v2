import React from 'react';
import Tier from '../tier/tier';

const Tiers = () => {
  return (
    <div id='tiers' className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mx-auto max-w-4xl sm:text-center">
          <h2 className="text-base font-semibold leading-7 text-cyan-800">Therapist Tiers</h2>
          <p className="mt-2 mx-auto text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">We're doing things a little differently here at Alli</p>
        </div>
        {/* <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 sm:text-center">Tired of asking about sliding scales or negotiating hourly rates? We hear ya friend.</p> */}
        <Tier />
      </div>
    </div>
  )
}

export default Tiers;

