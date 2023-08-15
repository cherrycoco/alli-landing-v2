import React, { useEffect } from "react"
import Layout from "../../components/layout/layout";
import useQuiz from "../../context/useQuiz";
import { initialQuizContext } from "../../context/initialState";
import Schedule from "../../components/schedule/schedule";
import Button from "../../components/button/button";
import { navigate } from "gatsby";
import ScheduleGuidance from "../../components/schedule/scheduleGuidance";


const SchedulePage = ({ location }) => {
  const { quiz, setQuiz } = useQuiz() || initialQuizContext;
  const { proSelected, serviceId } = quiz;
  const { id } = proSelected ? proSelected : {};
  const query = (location && location.search) ? location.search.substring(1) : null;
  console.log(query);

  useEffect(() => {
    if (query) {
      setQuiz({
        ...quiz,
        serviceId: query
      });
    }
  }, [query]);

  return (
    <Layout>
      <div className='flex mt-8 flex-wrap gap-8 justify-center'>
        {(!id && !serviceId)? (<div className='mt-16 mx-auto max-w-5xl'>
          <h1 className='text-2xl font-semibold text-gray-700 text-center mb-10'>{`You have not selected a therapist to book with!`}</h1>
          <div>
            <Button className="mx-auto block" onClick={() => navigate('/get-started/age')} >Get Matched With A Therapist<span aria-hidden="true">&rarr;</span></Button>
          </div>
        </div>) :
        serviceId !== 'therapy_consult' ? 
        <Schedule quiz={quiz} setQuiz={setQuiz} /> :
        <ScheduleGuidance quiz={quiz} setQuiz={setQuiz} />
        }
      </div>
    </Layout>
  )
}

export default SchedulePage;
