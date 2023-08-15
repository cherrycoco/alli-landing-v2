import React, { useEffect } from "react";
import LayoutQuiz from "../../components/layout/layoutQuiz";
import RateSelect from "../../components/select/rateSelect";
import { navigate } from "gatsby";
import useQuiz from "../../context/useQuiz";
import { initialQuizContext } from "../../context/initialState";
import { setRates } from "../../data/quiz";


const SelectRate = () => {
  const { quiz, setQuiz } = useQuiz() || initialQuizContext;
  const { rate, tier } = quiz;

  useEffect(() => {
    if (tier === '' || rate === 0) {
      return navigate('/get-started/tier');
    }
  }, []);

  const back = () => {
    navigate('/book/rate');
  }
  
  const next = () => {
    navigate('/get-started/schedule');
  }

  const handleSelect = (select) => {
    setQuiz({
      ...quiz,
      rate: select,
    });
  }

  const data = {
    title: `Select a session rate that works for you`,
    description: 'We never want price to stand in the way of you accessing high quality therapy. There is no catch here, simply slide to a price that fits your current budget.',
    current: 4,
    total: 4,
    next,
    back,
  };

  return (
    <LayoutQuiz data={data} footer>
      <div className='flex mt-32'>
        {tier && <RateSelect min={setRates[tier].min} max={setRates[tier].max} rate={[rate]} onChange={handleSelect}/>}
      </div>
    </LayoutQuiz>
  );
}

export default SelectRate;