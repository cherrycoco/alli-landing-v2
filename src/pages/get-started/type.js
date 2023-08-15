import React, { useEffect } from "react";
import LayoutQuiz from "../../components/layout/layoutQuiz";
import SimpleSelect from "../../components/select/simpleSelect";
import useQuiz from "../../context/useQuiz";
import { initialQuizContext } from "../../context/initialState";
import { navigate } from "gatsby";

const TYPE = [
  {
    key: 'individual',
    name: 'Individual',
  },
  {
    key: 'couple',
    name: 'Couple',
  },
];

const Type = () => {
  const { quiz, setQuiz } = useQuiz() || initialQuizContext;
  const { email, type } = quiz;

  useEffect(() => {
    if (!email) {
      return navigate('/get-started/email');
    }
  }, []);

  console.log(quiz);


  const back = () => {
    navigate('/get-started/email');
  }

  const handleSelect = (select) => {
    setQuiz({
      ...quiz,
      type: select
    });

    next();
  }
  
  const next = () => {
    navigate('/get-started/goals');
  }

  const data = {
    title: 'What type of therapy are you looking for?',
    current: 8,
    total: 12,
    next,
    back,
  };

  return (
    <LayoutQuiz data={data} footer>
      <div className='flex flex-wrap mt-8'>
        {TYPE.map(item => 
          <SimpleSelect
            isActive={type === item.key}
            onSelect={() => handleSelect(item.key)}
            title={item.name}
            key={item.key}
          />
        )}
      </div>
    </LayoutQuiz>
  );
}

export default Type;