import React from 'react';
import TierCard from '../card/tierCard';

const resident = {
  title: 'Resident Therapists',
  subtitle: 'A resident therapist is completing their clinical residency with Alli.',
  range: '$35-$90',
  description: [
    'Completing a Master’s Degree in Counselling Psychology or Social Work',
    `Trained with the foundational knowledge and expertise to provide high quality therapy sessions`,
    `Supervised by an Advanced Therapist`,
    `Covered under extended health insurance`,
  ]
};

const advanced = {
  title: 'Intermediate Therapists',
  subtitle: 'An intermediate therapist has conducted between 400 - 1600 hours of therapy sessions.',
  range: '$100-$140',
  description: [
    'Completed a Master’s Degree in Counselling Psychology or Social Work',
    `Trained with the foundational knowledge and expertise to provide high quality therapy sessions`,
    `Completed clinical residency and obtaining or obtained full professional designation to practice independently`,
    `Covered under extended health insurance`,
  ]
}

const expert = {
  title: 'Advanced Therapists',
  subtitle: 'An advanced therapist is has conducted 1600+ hours of therapy sessions.',
  range: '$150-$200',
  description: [
    'Completed a Master’s Degree in Counselling Psychology or Social Work',
    `Trained with the foundational knowledge and expertise to provide high quality therapy sessions`,
    `Completed clinical residency and obtained full professional designation to practice independently`,
    `Covered under extended health insurance`,
  ]
}

const Tier = () => {
  return (
    <div className="mt-12 flow-root">
      <div className="isolate -mt-16 grid max-w-sm grid-cols-1 gap-y-16 divide-y divide-gray-100 mx-auto md:-mx-8 sm:mt-0 md:max-w-none md:grid-cols-3 md:divide-x md:divide-y-0 xl:-mx-4">
        <TierCard card={resident} />
        <TierCard card={advanced} />
        <TierCard card={expert} />
      </div>
    </div>
  )
}

export default Tier;