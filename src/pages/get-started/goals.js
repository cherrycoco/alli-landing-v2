import React, { useEffect } from "react";
import LayoutQuiz from "../../components/layout/layoutQuiz";
import SimpleSelect from "../../components/select/simpleSelect";
import { goals } from "../../data/quiz";
import useQuiz from "../../context/useQuiz";
import { initialQuizContext } from "../../context/initialState";
import { navigate } from "gatsby";

const Goals = () => {
  const { quiz, setQuiz } = useQuiz() || initialQuizContext;
  const { type } = quiz;

  useEffect(() => {
    if (!type) {
      return navigate('/get-started/type');
    }
  }, []);


  const back = () => {
    navigate('/get-started/type');
  }

  const handleSelect = (idx) => {
    const newGoals = [...quiz.goals];
    newGoals[idx] = !newGoals[idx];

    setQuiz({
      ...quiz,
      goals: newGoals
    });
  }
  
  const next = () => {
    navigate('/get-started/therapist-goals');
  }

  const data = {
    title: 'What type of therapy are you looking for?',
    description: 'Select all that apply',
    current: 7,
    total: 11,
    next,
    back,
  };

  return (
    <LayoutQuiz data={data} footer>
      <div className='grid sm:grid-cols-2 mt-8'>
        {type && goals[type].map((item, idx) => (
          <SimpleSelect
          isActive={quiz.goals[idx] ? true : false}
          onSelect={() => handleSelect(idx)}
          title={item.name}
          key={item.key}
        />
        ))} 
      </div>
    </LayoutQuiz>
  );
}

export default Goals;