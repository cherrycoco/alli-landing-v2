import React, { Fragment, useState } from 'react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { Combobox } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const states = [
  { id: 'BC', name: 'British Colombia' },
  { id: 'ON', name: 'Ontario' },
];

const StateFilter = ({ selected, onChange }) => {
  console.log(selected)
  return (
    <Combobox as="div" value={selected} onChange={onChange}>
      <Combobox.Label className="block text-left text-sm font-medium leading-6 text-gray-900">Province</Combobox.Label>
      <div className="relative mt-1">
        <Combobox.Input
          className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6"
          onChange={onChange}
          displayValue={(item) => item?.name}
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </Combobox.Button>

        <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base text-left shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
          {states.map((item) => (
            <Combobox.Option
              key={item.id}
              value={item}
              className={({ active }) =>
                classNames(
                  'relative overflow-auto cursor-default select-none py-2 pl-3 pr-9',
                  active ? 'bg-cyan-800 text-white' : 'text-gray-900'
                )
              }
            >
              {({ active, selected }) => (
                <>
                  <span className={classNames('block', selected && 'font-semibold')}>{item.name}</span>

                  {selected && (
                    <span
                      className={classNames(
                        'absolute inset-y-0 right-0 flex items-center pr-4',
                        active ? 'text-white' : 'text-cyan-800'
                      )}
                    >
                      <CheckIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  )}
                </>
              )}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </div>
    </Combobox>
  );
}

export default StateFilter;