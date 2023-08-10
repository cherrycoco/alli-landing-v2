import React, { Fragment, useState } from 'react';
import { FunnelIcon } from '@heroicons/react/20/solid'
import SpecializationFilter from './specializationFilter';
import TierFilter from './tierFilter';
import ModalityFilter from './modalityFilter';
import ButtonOutline from '../button/buttonOutline';
import StateFilter from './stateFilter';
import TypeFilter from './typeFilter';
import InsuranceFilter from './insuranceFilter';

const Filters = ({ specialization, setSpecialization, modality, setModality, tier, setTier, clear, specializations, modalities, state, setState, type, setType, insurance, setInsurance }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-end mt-12">
      <ButtonOutline className={open ? 'hidden' : 'border-gray-300 text-gray-500 rounded-md'} onClick={() => setOpen(!open)}>
        <div className='flex flex-row space-x-2'>
          <FunnelIcon className="h-5 w-5" aria-hidden="true" />
          <p>Filter Therapists</p>
        </div>
      </ButtonOutline>
      {open && <div className="grid grid-cols-2 grid-rows-3 w-full gap-4 mx-auto sm:grid-cols-3 sm:grid-rows-2">
        <TierFilter onChange={val => setTier(val)} selected={tier}/>
        <SpecializationFilter onChange={val => setSpecialization(val)} selected={specialization} specializations={specializations}/>
        <ModalityFilter onChange={val => setModality(val)} selected={modality} modalities={modalities} />
        <StateFilter onChange={val => setState(val)} selected={state} />
        <TypeFilter onChange={val => setType(val)} selected={type} />
        <InsuranceFilter onChange={val => setInsurance(val)} selected={insurance} />
        <p onClick={clear} className="col-span-2 sm:col-span-3 self-end underline-offset-2 underline text-gray-500 cursor-pointer hover:text-cyan-800">Clear All</p>
      </div>}
    </div>
  );
}

export default Filters;