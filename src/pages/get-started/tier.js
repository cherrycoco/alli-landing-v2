import React, { useState } from "react";
import LayoutQuiz from "../../components/layout/layoutQuiz";
import Tier from "../../components/tier/tier";
import SimpleSelect from "../../components/select/simpleSelect";
import { navigate } from "gatsby";
import useQuiz from "../../context/useQuiz";
import { initialQuizContext } from "../../context/initialState";

const selectData = [
  {
    subTitle: 'Resident Therapist',
    title: 'Session rate: $35-$90',
    key: 'resident',
  },
  {
    subTitle: 'Advanced Therapist',
    title: 'Session rate: $100-$140',
    key: 'qualifying',
  },
  {
    subTitle: 'Expert Therapist',
    title: 'Session rate: $150-$180',
    key: 'licensed',
  },
]

const Experience = () => {
  const [open, setOpen] = useState(false);
  const { quiz, setQuiz } = useQuiz() || initialQuizContext;
  const { tier } = quiz;

  const back = () => {
    navigate('/get-started/location');
  }

  const handleSelect = (select) => {
    setQuiz({
      ...quiz,
      tier: select
    });

    next();
  }
  
  const next = () => {
    navigate('/get-started/rate');
  }

  const data = {
    title: 'Which tier of therapist would you like to work with?',
    description: 'All of our therapists are fully trained to support you and some come with a little more experience.',
    current: 2,
    total: 11,
    next,
    back,
  };

  return (
    <LayoutQuiz data={data} footer>
      <div className='flex mt-8 flex-col md:flex-row'>
        {selectData.map(item => 
          <SimpleSelect
            isActive={tier === item.key}
            onSelect={() => handleSelect(item.key)}
            title={item.title}
            subTitle={item.subTitle}
            key={item.key}
          />
        )}
      </div>
      <p 
        onClick={() => setOpen(!open)} 
        className='underline text-cyan-800 cursor-pointer mt-12 font-light hover:text-cyan-700'>Unsure about the difference - click here to learn.</p>
      {open && <Tier />}
    </LayoutQuiz>
  );
}

export default Experience;