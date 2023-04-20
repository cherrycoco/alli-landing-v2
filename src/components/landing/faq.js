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
    question: 'Who are resident therapists?',
    answer: [
      {
        type: 'p',
        value: `Our resident therapists are currently completing their clinical residency to earn their full professional designation to practice independently. Our resident therapists are nearing completion of their their Master's Degree in Counselling Psychology or Master's of Social Work from an accredited university.`
      },
      {
        type: 'p',
        value: `They are trained with the foundational knowledge and expertise to provide exceptional therapy sessions, and work under the supervision of an Advanced Therapist with over 5 years of experience in the field. Plus, all of our resident therapists are covered under extended health insurance, so you can rest assured that you're receiving quality care at an affordable cost.`
      },
    ],
  },
  {
    question: 'Who are intermediate therapists?',
    answer: [
      {
        type: 'p',
        value: `Our Intermediate Therapists have completed their Master's Degree in Counselling Psychology or Social Work, conducted 400-1600 hours of therapy, and are in the process of obtaining or have already obtained their full professional designation. They have been mentored to become the highest level of therapists by our advanced therapists, the best therapists in the industry. And most have taken extensive additional training.`
      },
      {
        type: 'p',
        value: `They bring a wealth of knowledge and specialized expertise to provide high quality therapy sessions. Plus, they're covered under extended health insurance.`
      },
    ],
  },
  {
    question: 'Who are advanced therapist?',
    answer: [
      {
        type: 'p',
        value: `Our Advanced Therapists are industry experts. They have completed a Master's Degree in Counselling Psychology or Social Work and conducted 1600+ hours of therapy. They bring specialized knowledge and extensive training to provide exceptional therapy sessions, and have obtained their full professional designation to practice independently.`
      },
      {
        type: 'p',
        value: 'In addition to their extensive training, our Advanced Therapists have undergone specialized additional training in their respective fields, making them uniquely equipped to handle complex issues. Plus, all of our Advanced Therapists are covered under extended health insurance..'
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
                    <Disclosure.Panel as="dd" className="mt-2 pr-12 space-y-6">
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