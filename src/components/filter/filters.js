import React, { Fragment, useState } from 'react';
import { FunnelIcon } from '@heroicons/react/20/solid'
import SpecializationFilter from './specializationFilter';
import TierFilter from './tierFilter';
import ModalityFilter from './modalityFilter';
import ButtonOutline from '../button/buttonOutline';

const Filters = ({ specialization, setSpecialization, modality, setModality, tier, setTier, clear, specializations, modalities }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-end mt-12">
      <ButtonOutline className={open ? 'hidden' : 'border-gray-300 text-gray-500 rounded-md'} onClick={() => setOpen(!open)}>
        <div className='flex flex-row space-x-2'>
          <FunnelIcon className="h-5 w-5" aria-hidden="true" />
          <p>Filter Therapists</p>
        </div>
      </ButtonOutline>
      {open && <div className="flex w-11/12 m-auto flex-col space-y-2 sm:space-y-0 sm:space-x-4 sm:flex-row">
        <TierFilter onChange={val => setTier(val)} selected={tier}/>
        <SpecializationFilter onChange={val => setSpecialization(val)} selected={specialization} specializations={specializations}/>
        <ModalityFilter onChange={val => setModality(val)} selected={modality} modalities={modalities} />
        <p onClick={clear} className="self-end underline-offset-2 underline text-gray-500 cursor-pointer hover:text-cyan-800">Clear All</p>
      </div>}
    </div>
  );
}

export default Filters;