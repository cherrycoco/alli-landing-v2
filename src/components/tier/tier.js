import React from 'react';
import TierCard from '../card/tierCard';

const resident = {
  title: 'Resident Therapists',
  subtitle: 'A resident therapist is a Masters graduate working to complete their clinical residency.',
  range: '$35-$90',
  handleClick: () => console.log('clicked'),
  description: [
    'Completed a Master’s Degree in Counselling Psychology or Social Work',
    `Trained with the foundational knowledge and expertise to provide high quality therapy sessions`,
    `Covered under extended health insurance`,
  ]
};

const advanced = {
  title: 'Advanced Therapists',
  subtitle: 'A licensed therapist is fully licensed to practice independently with 1-10+ years of clinical experience.',
  range: '$100-$140',
  handleClick: () => console.log('clicked'),
  description: [
    'Completed a Master’s Degree in Counselling Psychology or Social Work',
    `Trained with the foundational knowledge and expertise to provide high quality therapy sessions`,
    `Covered under extended health insurance`,
    `Has completed clinical residency and obtained full professional designation to practice independently`,
    `Have extensive additional training`,
  ]
}

const expert = {
  title: 'Expert Therapists',
  subtitle: 'A licensed therapist is fully licensed to practice independently with 1-10+ years of clinical experience.',
  range: '$150-$190',
  handleClick: () => console.log('clicked'),
  description: [
    'Completed a Master’s Degree in Counselling Psychology or Social Work',
    `Trained with the foundational knowledge and expertise to provide high quality therapy sessions`,
    `Covered under extended health insurance`,
    `Has completed clinical residency and obtained full professional designation to practice independently`,
    `Have extensive additional training`,
  ]
}

const Tier = () => {
  return (
    <div className="mt-12 flow-root">
      <div className="isolate -mt-16 grid max-w-sm grid-cols-1 gap-y-16 divide-y divide-gray-100 mx-auto sm:-mx-8 sm:mt-0 sm:max-w-none sm:grid-cols-3 sm:divide-x sm:divide-y-0 xl:-mx-4">
        <TierCard card={resident} />
        <TierCard card={advanced} />
        <TierCard card={expert} />
      </div>
    </div>
  )
}

export default Tier;