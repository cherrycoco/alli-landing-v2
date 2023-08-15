import React from 'react';
import { XCircleIcon } from '@heroicons/react/20/solid'

const AlertError = () => {
  return (
    <div className="rounded-md bg-red-50 p-4 my-8">
      <div className="flex">
        <div className="flex-shrink-0">
          <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-red-800">Right now, we are only able to support Alli's who are 18 years old and up and living in Ontario or British Columbia.</h3>
          <div className="mt-2 text-sm text-red-700">
            If you'd like support in finding resources for other clinics, don't hesitate to drop us a line at hello@alli.io! We'd love to help you out.
          </div>
        </div>
      </div>
    </div>
  )
}


export default AlertError;