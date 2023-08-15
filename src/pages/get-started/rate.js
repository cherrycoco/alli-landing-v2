import React, { useEffect } from "react";
import LayoutQuiz from "../../components/layout/layoutQuiz";
import SimpleSelect from "../../components/select/simpleSelect";
import useQuiz from "../../context/useQuiz";
import { initialQuizContext } from "../../context/initialState";
import { navigate } from "gatsby";
import { setRates } from "../../data/quiz";

const Rate = () => {
  const { quiz, setQuiz } = useQuiz() || initialQuizContext;
  const { isStandardRate, tier } = quiz;

  useEffect(() => {
    if (tier === '') {
      return navigate('/get-started/tier');
    }
  }, [tier]);

  const RATE = [
    {
      name: `Standard rate works for me ($${tier && setRates[tier].max})`,
      key: true,
    },
    {
      name: `I need a lower pricing option ($${tier && setRates[tier].min} - $${tier && (setRates[tier].max - 1)})`,
      key: false,
    },
  ]

  const back = () => {
    navigate('/get-started/tier');
  }

  const handleSelect = (select) => {
    const newQuiz = {
      ...quiz,
      isStandardRate: select,
    };

    newQuiz.rate = setRates[tier].max;

    setQuiz(newQuiz);
    next(select);
  }
  
  const next = (select) => {
    if (select || isStandardRate) {
      navigate('/get-started/name');
    } else {
      navigate('/get-started/select-rate');
    }
  }

  const data = {
    title: `Our resident therapist's standard rate is $90. Does that fit within your budget?`,
    description: 'This rate is for a 50-minute session.',
    current: 4,
    total: 12,
    next,
    back,
  };

  return (
    <LayoutQuiz data={data} footer>
      <div className='flex mt-8 flex-wrap'>
        {RATE.map(item => (<SimpleSelect 
          isActive={isStandardRate === item.key ? true : false}
          onSelect={() => handleSelect(item.key)}
          title={item.name}
          key={item.key}
        />))}
      </div>
    </LayoutQuiz>
  );
}

export default Rate;