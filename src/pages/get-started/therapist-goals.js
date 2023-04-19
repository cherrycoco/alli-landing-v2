import React from "react";
import LayoutQuiz from "../../components/layout/layoutQuiz";
import SimpleSelect from "../../components/select/simpleSelect";
import { navigate } from "gatsby";
import useQuiz from "../../context/useQuiz";
import { therapistGoals } from "../../data/quiz";

const TherapistGoals = () => {
  const { quiz, setQuiz } = useQuiz() || {};

  const back = () => {
    navigate('/get-started/goals');
  }

  const handleSelect = (idx) => {
    const newGoals = [...quiz.therapistGoals];
    newGoals[idx] = !newGoals[idx];

    setQuiz({
      ...quiz,
      therapistGoals: newGoals
    });
  }
  
  const next = () => {
    navigate('/get-started/insurance');
  }

  const data = {
    title: 'I want a therapist that will...',
    description: '(Select all that apply)',
    current: 8,
    total: 11,
    next,
    back,
  };

  return (
    <LayoutQuiz data={data} footer>
      <div className='grid sm:grid-cols-2 mt-8'>
        {therapistGoals.map((item, idx) => (
          <SimpleSelect
            isActive={quiz.therapistGoals[idx] ? true : false}
            onSelect={() => handleSelect(idx)}
            title={item.name}
            key={item.key}
          />
        ))} 
      </div>
    </LayoutQuiz>
  );
}

export default TherapistGoals;