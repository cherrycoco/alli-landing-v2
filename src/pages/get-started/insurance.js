import React, { useEffect } from "react";
import LayoutQuiz from "../../components/layout/layoutQuiz";
import SimpleSelect from "../../components/select/simpleSelect";
import useQuiz from "../../context/useQuiz";
import { initialQuizContext } from "../../context/initialState";
import { navigate } from "gatsby";
import { therapistGoals, trueOrFalse, goals } from "../../data/quiz";
import ADD_QUIZ from "../../graphql/mutation/addQuiz";
import { useMutation } from "@apollo/client";

const Insurance = () => {
  const { quiz, setQuiz } = useQuiz() || {};
  const { isInsurance, requestId, type, rate, user, tier } = quiz;
  const [addQuiz, { data, called, loading } ] = useMutation(ADD_QUIZ);

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
        console.log('success', quiz);

        // navigate(`/get-started/matched?${requestId}`);
      }
    }
  }, [data]);

  const back = () => {
    navigate('/get-started/therapist-goals');
  }

  const handleSelect = (select) => {
    setQuiz({
      ...quiz,
      isInsurance: select
    });

    next(select);
  }

  const next = (select) => {
    if (select || isInsurance) {
      navigate('/get-started/coverage');
    } else {
      const goalsArr = [];
      const therapistGoalsArr = [];

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
          insurance: false,
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
    }
  };

  const infoData = {
    title: 'Do you have extended health insurance?',
    current: 9,
    total: 11,
    next,
    back,
  };

  return (
    <LayoutQuiz data={infoData} footer>
      <div className='flex mt-8 flex-wrap'>
        {trueOrFalse.map(item => 
          <SimpleSelect 
            isActive={isInsurance === item.key ? true : false}
            onSelect={() => handleSelect(item.key)}
            title={item.name}
            key={item.key}
          />
        )}
      </div>
    </LayoutQuiz>
  );
}

export default Insurance;