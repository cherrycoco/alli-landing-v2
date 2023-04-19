import React, { useState } from "react";
import LayoutQuiz from "../../components/layout/layoutQuiz";
import SimpleSelect from "../../components/select/simpleSelect";
import { trueOrFalse } from "../../data/quiz";
import { navigate } from "gatsby";
import useQuiz from "../../context/useQuiz";
import { initialQuizContext } from "../../context/initialState";
import AlertError from "../../components/error/alertError";

const Location = () => {
  const [isOntario, setIsOntario] = useState(null);

  const back = () => {
    navigate('/');
  }

  const handleSelect = (select) => {
    setIsOntario(select);

    next(select);
  }
  
  const next = (select) => {
    if (select || isOntario) {
      navigate('/get-started/tier');
    }
  }

  const data = {
    title: 'Are you over 18, and living in Ontario? ',
    current: 1,
    total: 11,
    next,
    back,
  };

  return (
    <LayoutQuiz data={data} footer>
      <div className='flex mt-8 flex-wrap'>
        {trueOrFalse.map(item => 
          <SimpleSelect 
            isActive={isOntario === item.key ? true : false}
            onSelect={() => handleSelect(item.key)}
            title={item.name}
            key={item.key}
          />
        )}
      </div>
      {isOntario === false && <AlertError />}
    </LayoutQuiz>
  );
}

export default Location;