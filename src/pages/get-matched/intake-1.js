import React from "react"
import { useQuery } from "@apollo/client";
import GET_USER from '../../graphql/query/user.js';
import Loading from "../../components/loading/loading";
import Intake1 from "../../components/form/intake-1";
import LayoutQuiz from "../../components/layout/layoutQuiz.js";

const Intake = ({ location }) => {
  console.log(location.search);
  const userId = location.search && location.search.slice(1);
  const { data, loading, error } = useQuery(GET_USER, { variables: { id: userId }});
  console.log(data, error);

  if (error) return (
    <LayoutQuiz>
      <h1>Sorry, we can't seem to find your file.</h1>
    </LayoutQuiz>
  )

  if (loading) return <Loading />

  return (
      <div className='max-w-xl mx-auto my-20'>
        <div className='text-center'>
          <h1 className='text-3xl font-bold text-gray-800 mb-6'>{`Intake Assessment for ${data.user.fullName}`}</h1>
          <p className='text-gray-600 mb-4 text-base italic'>Part 1 of 2: Tell Us About Yourself</p>
          <p className='text-gray-600 mb-16 text-base'>Please complete the following information before your initial session. This step is crucial to kickstart your therapeutic journey with your therapist:</p>
        </div>
        <Intake1 user={data.user} />
      </div>
  )
}

export default Intake;


