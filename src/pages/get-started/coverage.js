import React, { useEffect, useState } from "react";
import LayoutQuiz from "../../components/layout/layoutQuiz";
import SimpleSelect from "../../components/select/simpleSelect";
import useQuiz from "../../context/useQuiz";
import { navigate } from "gatsby";
import { coverage, goals, therapistGoals } from "../../data/quiz";
import ADD_QUIZ from "../../graphql/mutation/addQuiz";
import { useMutation } from "@apollo/client";
import Loading from "../../components/loading/loading";
import Error from "../../components/error/error";

const Coverage = () => {
  const { quiz, setQuiz } = useQuiz() || {};
  const { isInsurance, requestId, type, rate, user, tier } = quiz;
  const [addQuiz, { data, called, loading } ] = useMutation(ADD_QUIZ);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!requestId) {
      return navigate(`/get-started/email`);
    }

    if (data && data.addQuiz) { 
      if (data.addQuiz.success) {
        if (typeof window !== "undefined") {
          if (window.analytics) {
            window.analytics.track("Submit Quiz", {
              userId: user.id,
              email: user.email,
              firstName: user.firstName,
            });
          }
        };

        navigate(`/get-started/matched?${requestId}`);
      } else {
        console.log('error', data.addQuiz.message);
        setError('Sorry, there seems to be a problem creating your request. Please refresh the page and re-start the quiz!');
      }
    }
  }, [data]);

  const back = () => {
    navigate('/get-started/insurance');
  }

  console.log(quiz)

  const handleSelect = (idx) => {
    const newGoals = [...quiz.coverage];
    newGoals[idx] = !newGoals[idx];

    setQuiz({
      ...quiz,
      coverage: newGoals
    });
  }

  const next = () => {
    if (!requestId) {
      return navigate(`/get-started/email`);
    }

    const coverageArr = [];
    const goalsArr = [];
    const therapistGoalsArr = [];
    
    quiz.coverage.map((item, idx) => {
      if (item) {
        coverageArr.push(coverage[idx].key);
      }
    });

    quiz.goals.map((item, idx) => {
      if (item) {
        goalsArr.push(goals[type][idx].key);
      }
    });

    quiz.therapistGoals.map((item, idx) => {
      if (item) {
        therapistGoalsArr.push(therapistGoals[idx].key);
      }
    });
    
    const variables = {
      quiz: {
        id: requestId,
        insurance: isInsurance,
        insuranceCoverage: coverageArr.join('|'),
        supportType: type,
        therapyGoals: goalsArr.join('|'),
        therapistGoals: therapistGoalsArr.join('|'),
        status: 'QUIZ_COMPLETED',
        stage: tier,
        rate,
      }
    };

    console.log(variables);
    addQuiz({ variables });
  };

  const infoData = {
    title: 'What does your insurance plan provide coverage for?',
    description: 'Our therapists are Psychotherapists and Social Workers. (Select all that apply)',
    current: 11,
    total: 11,
    next,
    back,
  };

  return (
    <LayoutQuiz data={infoData} footer>
      {loading && <Loading />}
      <div className='grid sm:grid-cols-2 mt-8'>
        {coverage.map((item, idx) => (
          <SimpleSelect
          isActive={quiz.coverage[idx] ? true : false}
          onSelect={() => handleSelect(idx)}
          title={item.name}
          key={item.key}
        />
        ))} 
      </div>
      {error && <Error error={error} />}
    </LayoutQuiz>
  );
}

export default Coverage;