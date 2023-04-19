import React from 'react';
import { Disclosure } from '@headlessui/react'
import { CheckCircleIcon, MinusSmallIcon, PlusSmallIcon, ArrowDownCircleIcon } from '@heroicons/react/24/outline'

const ExpandList = ({ data }) => {
  const { title, description } = data ? data : {};

  return (
    <Disclosure as="div" className="border-b">
      {({ open }) => (
        <>
          <dt>
            <Disclosure.Button className="flex bg-primary-100 p-4 w-full items-start justify-between text-left text-gray-700">
              <span className="text-xl font-semibold leading-7">{title}</span>
              <span className="ml-6 flex h-7 items-center">
                {open ? (
                  <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                )}
              </span>
            </Disclosure.Button>
          </dt>
          <Disclosure.Panel as="dd" className="bg-primary-100 m-0 p-2 text-gray-500">
            {title === 'Insurance' ?
            <div className='pl-6 pb-4' >
              <p className='italic pb-4'>
                Coverage depends on the insurance plan. Check with your provider to see if your plan covers one of the designations listed below: 
              </p>
              <div className="flex gap-x-3">
                <CheckCircleIcon className="h-7 w-5 flex-none" aria-hidden="true" />
                {description}
              </div>
            </div> :
            (typeof description === 'string') ? 
              <p className='pl-6 pb-4'>{description}</p> :
              <ul className='pl-6 pb-4 space-y-2'>
                {
                  description && description.map((item, i) => {
                    return (
                      <li key={item.key} className="flex gap-x-3">
                        <CheckCircleIcon className="h-7 w-5 flex-none" aria-hidden="true" />
                        {item.name}
                      </li>
                    )
                  })
                }
              </ul>
            }
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default ExpandList;