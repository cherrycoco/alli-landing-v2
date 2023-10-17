import React from 'react'
import { CheckCircleIcon } from '@heroicons/react/20/solid'
import { navigate } from 'gatsby'
import Button from '../button/button'

const benefits = [
  'How the whole process works',
  'If therapy is best for your current needs (we will recommend other resources if not)',
  'Answer any questions you may have',
]

const Consult = ({ quiz, setQuiz }) => {
  const onClick = () => {
    setQuiz({
      ...quiz, 
      serviceId: 'therapy_consult'
    });
    navigate('/get-started/schedule');
  }

  return (
    <div className="mt-16 mx-auto max-w-7xl bg-primary-100 rounded-lg px-6">
      <div className="mx-auto flex flex-col max-w-2xl bg-white/5 px-6 py-12">
        <h2 className="text-3xl font-bold tracking-tight text-gray-600 sm:text-4xl">Looking for some guidance?</h2>
        <p className="mt-4 text-lg leading-8 text-gray-600">
        Schedule a time to speak with one of our guidance therapists about your needs in more detail during a free 30-minute guidance call!
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-500">We can talk about things like...</p>
        <ul
          role="list"
          className="mt-2 gap-x-8 gap-y-3 text-base leading-7 text-gray-500"
        >
          {benefits.map((benefit) => (
            <li key={benefit} className="flex gap-x-3">
              <CheckCircleIcon className="h-7 w-5 flex-none" aria-hidden="true" />
              {benefit}
            </li>
          ))}
        </ul>

        <div className="mt-10 flex">
          <Button onClick={onClick}>Book a free consult call <span aria-hidden="true">&rarr;</span></Button>
        </div>
      </div>
    </div>
  )
}

export default Consult;

