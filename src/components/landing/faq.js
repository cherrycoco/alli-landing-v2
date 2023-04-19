import React from 'react';
import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import Button from '../button/button';

const faqs = [
  {
    question: 'How long are the sessions?',
    answer: [
      {
        type: 'p',
        value: `All sessions are 50-minutes.`,
      },
    ],
  },
  {
    question: 'How long can I use Alli?',
    answer: [
      {
        type: 'p',
        value: `You can see an Alli therapist for as long as you need support for. Once you’ve reached your therapy goals you can discuss how to move forward with your therapist. This may just be changing the frequency of your visits or exiting therapy until you are needing support again.`,
      },
    ],
  },
  {
    question: 'Where do the sessions take place?',
    answer: [
      {
        type: 'p',
        value: `Your sessions will take place over secure HIPPA (Health Insurance Portability and Accountability Act) compliant video - Zoom Health. Sessions are 100% confidential and privacy protected.`,
      },
    ],
  },
  {
    question: 'Are my sessions covered by my insurance?',
    answer: [
      {
        type: 'p',
        value: `Your sessions will be covered if you have extended coverage for Psychotherapy and Registered Social Workers!`,
      },
    ],
  },
  {
    question: 'How do I pay for my sessions?',
    answer: [
      {
        type: 'p',
        value: `At the time of booking, you will be sent our consent form through email. Here it will ask you for your credit card details! Your card will be charged after your appointment and you will be sent an insurance receipt through email.`,
      },
    ],
  },
  {
    question: 'If I choose a low price point will my therapy be "less-than"?',
    answer: [
      {
        type: 'p',
        value: `Not at all! All sessions are equal. We offer lower price points to ensure all folks can access therapy and that price won’t stand in the way. The price you choose will be anonymous and will not change the quality of service - it is a big thanks to our community that we can offer this. `
      },
    ]
  },
  {
    question: 'Will my therapist be disappointed if I pay a lower rate?',
    answer: [
      {
        type: 'p',
        value: `Your therapist is eager to support you and the cost will not change a thing! We operate as a community - our clients who are paying standard session rates supplement those who are paying slightly less.`
      },
    ]
  }, 
  {
    question: `How will my rate affect the community?`,
    answer: [
      {
        type: 'p',
        value: `If you are paying a therapist’s standard rate you are making a direct contribution to another person’s session price. Let's face it, we are all at different places in our lives and have different financial situations! We are all in this together.`
      },
    ]
  },
  {
    question: `My life changed overnight! Can I change my rate?`,
    answer: [
      {
        type: 'p',
        value: `Of course! Whether you received a promotion or lost your job – you have the flexibility to change your rate to suit your new budget. Life changes and we want to make sure it doesn't impact your sessions.`
      },
      {
        type: 'p',
        value: `If you feel you can contribute more- that’s great! This will help us maintain our model to make therapy accessible to all. If you need to pay less, let us know and we will adjust your rate.`
      }
    ]
  },
  {
    question: 'What is a resident therapist?',
    answer: [
      {
        type: 'p',
        value: `A resident therapist is a therapist who is trained with the foundational knowledge and expertise to provide high quality therapy sessions. Resident therapists have either recently gained their Master's Degree in Counselling Psychology or are working towards their Master's of Social Work from an accredited university`
      },
      {
        type: 'p',
        value: `They are currently completing their clinical residency to gain their full professional designation to practice independently. With Alli, they work under the supervision of a licensed therapist who has over 5 years experience in the field.  All sessions are covered under extended insurance.`
      },
    ],
  },
  {
    question: 'What is a licensed therapist?',
    answer: [
      {
        type: 'p',
        value: `A licensed therapist is a therapist who has completed their qualifications and gained the expertise to provide high quality therapy sessions. They hold a Master’s Degree in Counselling Psychology or Master’s of Social Work from an accredited University and have the professional designation to practice independently.`
      },
      {
        type: 'p',
        value: 'All sessions are covered under extended insurance.'
      }
    ],
  },
  {
    question: `What is the difference between a licensed and resident therapist?`,
    answer: [
      {
        type: 'p',
        value: `The main difference is that our licensed therapists have over 1-10+ years of face-to-face client experience! Resident therapists are still working on gaining the supervised hours required to complete their designation to work as independent therapists. They both have the same educational background and bring similar tools to support you in session!`
      },
    ]
  }, 
];

const FAQ = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-3xl font-bold leading-10 tracking-tight text-center text-gray-900 sm:text-4xl">Frequently asked questions</h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                    {open && faq.answer.map((item, idx) => {
                      if(item.type === 'p') {
                        return <p className="text-base leading-7 text-gray-600" key={idx}>{item.value}</p>
                      } else if (item.type === 'a') {
                        return <a className="text-base leading-7 text-gray-600" key={idx}>{item.value}</a>
                      } else if (item.type === 'li') {
                        return (
                          <ul>
                            {item.value.map((li, idx) => <li className="text-base leading-7 text-gray-600" key={idx}>{li}</li>)}
                          </ul>
                        )
                      }
                    })}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default FAQ;