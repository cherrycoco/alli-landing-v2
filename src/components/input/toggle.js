import React, { useState } from 'react'
import { Switch } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Toggle = ({ data }) => {
  const { value, onChange, label, helperText } = data;
  return (
    <div className='flex space-x-2'>
      <div>
        <label className='block text-sm font-medium leading-6 text-gray-900'>{label}</label>
        {helperText && <p className='text-gray-500 text-xs italic'>{helperText}</p>}
      </div>
      <Switch
        checked={value}
        onChange={(e) => onChange(e)}
        className={classNames(
          value ? 'bg-cyan-800' : 'bg-gray-200',
          'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-cyan-800 focus:ring-offset-2'
        )}
      >
        <span className="sr-only">{label}</span>
        <span
          aria-hidden="true"
          className={classNames(
            value ? 'translate-x-5' : 'translate-x-0',
            'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
          )}
        />
      </Switch>
    </div>
  )
}

export default Toggle;