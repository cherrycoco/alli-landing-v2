import React from 'react';
import HeaderTags from '../../components/therapist/headerTags';
import TherapistCTACard from '../../components/card/therapistCTACard';
import ExpandList from '../../components/therapist/expandList';
import Bio from '../../components/therapist/bio';
import Layout from '../../components/layout/layout';
import { initialProState } from '../../context/initialState';
import Redirect from '../../components/redirect/redirect';


const Therapist = ({ pageContext, location }) => {
  const { data } = pageContext;
  const { role, type, firstName, bio, specializations, modalities, education, fullName } = data ? data : initialProState;
  const externalUrl = `https://client.alli.io/therapists/${fullName.split(' ').join('_')}`;

  return (
    <Redirect
      to={externalUrl}
      query={location.search}
    />
  );

  // const specData = {
  //   title: 'Specialties & common subjects',
  //   description: specializations,
  // };

  // const modData = {
  //   title: 'Therapeutic Modalities',
  //   description: modalities,
  // };

  // const eduData = {
  //   title: 'Education',
  //   description: education ? `${education.degree} - ${education.school} ${role === 'resident' ? '(Currently Enrolled)' : ''}` : '',
  // };

  // const inData = {
  //   title: 'Insurance',
  //   description: type === 'rsw' ? 'Registered Social Worker' : 'Registered Psychotherapist',
  // };

  // return (
  //   <Layout footer={true}>
  //     <div className='max-w-6xl mx-auto p-12 flex flex-col-reverse sm:flex-row'>
  //       <div className="mt-8 flex-1 sm:mt-0 sm:mr-12">
  //         <HeaderTags data={data} />
  //         <div className="py-12">
  //           <h2 className="text-3xl text-gray-600 mb-8 font-bold">{`About ${firstName}`}</h2>
  //           <Bio bio={bio ? bio : ''} />
  //           <div className='grid grid-cols-1 divide-y mt-16'>
  //             <ExpandList data={specData} />
  //             <ExpandList data={modData} />
  //             <ExpandList data={eduData} />
  //             <ExpandList data={inData} />
  //           </div>
  //         </div>
  //       </div>
  //       <TherapistCTACard data={data} />
  //     </div>
  //   </Layout>
  // )
}

export default Therapist;