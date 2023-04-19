import React, { useEffect, useState } from 'react';
import { capitalize } from '../../util/helpers';
import { Link } from 'gatsby';
import GET_PRO from '../../graphql/query/pro';
import { useQuery } from '@apollo/react-hooks';
import Loading from '../loading/loading';

const TherapistCardDrawer = ({ id }) => {
  const { data, loading, error } = useQuery(GET_PRO, { variables: { id } });
  const [ type, setType ] = useState(''); 

  useEffect(() => {
    if (data && data.pro) {
      let tempType = 'Resident Therapist';
  
      if (role === 'qualifying') {
        tempType = 'Advanced Therapist';
      } else if (role === 'licensed' || role === 'supervisor') {
        tempType = 'Expert Therapist';
      }
      setType(capitalize(tempType));
    }
  }, [data]);

  if (loading) return <Loading />;
  if (error) return <p>Error</p>;

  const { pro: { fullName, img, isAccepting, role } } = data;

  return (
    <Link to={`/therapists/${fullName.split(' ').join('_')}`}>
      <div key={id} className="group text-left cursor-pointer m-4">
        <div className="relative h-72 w-[220px] aspect-h-1 aspect-w-1 overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75">
          <img
            src={img}
            alt={fullName}
            className="h-full mb-0 w-full object-cover object-top lg:h-full lg:w-full"
          />
          {isAccepting && <span className="absolute bottom-1 right-1 inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
            Accepting New Clients
          </span>}
        </div>
        <div>
          <p className="text-sm m-0 mt-2 text-gray-700">
            {fullName}
          </p>
          <p className="mt-1 mb-0 text-xs text-gray-500">{type}</p>
        </div>
      </div>
    </Link>
  )
}

export default TherapistCardDrawer;