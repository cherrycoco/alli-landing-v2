import React, { useState } from "react";
import LayoutQuiz from "../../components/layout/layoutQuiz";
import Tier from "../../components/tier/tier";
import SimpleSelect from "../../components/select/simpleSelect";
import { navigate } from "gatsby";
import useQuiz from "../../context/useQuiz";
import { initialQuizContext } from "../../context/initialState";

const selectData = [
  {
    title: 'British Columbia',
    key: 'BC',
  },
  {
    title: 'Ontario',
    key: 'ON',
  },
]

const Location = () => {
  const { quiz, setQuiz } = useQuiz() || initialQuizContext;
  const { stateId } = quiz;

  const back = () => {
    navigate('/book/age');
  }

  const handleSelect = (select) => {
    setQuiz({
      ...quiz,
      stateId: select
    });
    
    console.log(select, quiz);
    next();
  }
  
  const next = () => {
    navigate('/book/rate');
  }

  const data = {
    title: 'Which province do you reside in?',
    description: "We're currently in BC and ON.",
    current: 2,
    total: 4,
    next,
    back,
  };

  return (
    <LayoutQuiz data={data} footer>
      <div className='flex mt-8 flex-col md:flex-row'>
        {selectData.map(item => 
          <SimpleSelect
            isActive={stateId === item.key}
            onSelect={() => handleSelect(item.key)}
            title={item.title}
            key={item.key}
          />
        )}
      </div>
    </LayoutQuiz>
  );
}

export default Location;