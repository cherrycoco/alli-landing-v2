import React, { useState } from 'react'
import Layout from '../../components/layout/layout'
import Filters from '../../components/filter/filters'
import TherapistList from '../../components/therapist/therapistList';
import { Link } from 'gatsby';

const Therapists = ({ pageContext }) => {
  const { pros, specializations, modalities } = pageContext;
  console.log(pros);
  const [specialization, setSpecialization] = useState(null);
  const [tier, setTier] = useState(null);
  const [modality, setModality] = useState(null);
  const [available, setAvailable] = useState(false);
  const [type, setType] = useState(null);
  const [state, setState] = useState(null);
  const [insurance, setInsurance] = useState(null);

  console.log(state);

  const handleClear = () => {
    setSpecialization(null);
    setTier(null);
    setModality(null);
    setState(null);
    setType(null);
    setInsurance(null);
  }

  const handleCheck = (e) => {
    setAvailable(e.target.checked);
  }

  return (
    <Layout footer>
      <div className="bg-white pb-24">
        <div className="px-4 text-center sm:px-6 lg:px-8">
          <div className="pt-24 pb-3 border-b border-gray-200">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">Find the right therapist for you</h1>
            <p className="mx-auto mt-4 max-w-3xl text-base text-gray-500">
              Not sure where to start? Let us help you match with a therapist best suited for your needs.
            </p>
            <p className="mt-6">
              <Link to='/get-started/age' className="no-underline text-sm font-semibold leading-6 text-cyan-700">Get Matched <span aria-hidden="true">→</span></Link>
            </p>
            <Filters 
              specialization={specialization}
              setSpecialization={setSpecialization}
              tier={tier}
              setTier={setTier}
              modality={modality}
              setModality={setModality}
              clear={handleClear}
              specializations={specializations}
              modalities={modalities}
              type={type}
              setType={setType}
              state={state}
              setState={setState}
              insurance={insurance}
              setInsurance={setInsurance}
            />
          </div>
          <div className="relative flex justify-end	mt-6 items-start">
            <div className="flex h-6 items-center">
              <input
                aria-describedby="comments-description"
                name="comments"
                type="checkbox"
                value={available}
                className="h-4 w-4 rounded border-gray-300 text-cyan-800 checked:bg-cyan-800 focus:ring-cyan-800 focus:outline-none"
                onChange={e => handleCheck(e)}
              />
            </div>
            <div className="ml-3 text-sm text-gray-400 leading-6">
              <label htmlFor="comments" className="font-medium">
                Only show therapists accepting new clients
              </label>
            </div>
          </div>
          <TherapistList pros={pros} specialization={specialization} modality={modality} tier={tier} available={available} type={type} state={state} insurance={insurance} />
        </div>
      </div>
    </Layout>
  )
}

export default Therapists;