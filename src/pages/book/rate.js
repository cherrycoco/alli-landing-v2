import React, { useEffect } from "react";
import LayoutQuiz from "../../components/layout/layoutQuiz";
import SimpleSelect from "../../components/select/simpleSelect";
import useQuiz from "../../context/useQuiz";
import { initialQuizContext } from "../../context/initialState";
import { navigate } from "gatsby";
import { setRates } from "../../data/quiz";

const Rate = () => {
  const { quiz, setQuiz } = useQuiz() || initialQuizContext;
  const { isStandardRate, tier, proSelected } = quiz;

  useEffect(() => {
    if (!tier || !proSelected.id) {
      return navigate('/therapists');
    }

  }, [tier, proSelected]);

  if (!proSelected.id) {
    return null;
  }

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
    navigate('/book/location');
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
      navigate('/get-started/schedule');
    } else {
      navigate('/book/select-rate');
    }
  }

  const data = {
    title: `${proSelected.fullName}'s standard rate is $${setRates[tier].max} / session. Does that fit within your budget?`,
    current: 3,
    total: 4,
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