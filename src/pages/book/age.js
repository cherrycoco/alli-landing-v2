import React, { useState } from "react";
import LayoutQuiz from "../../components/layout/layoutQuiz";
import SimpleSelect from "../../components/select/simpleSelect";
import { trueOrFalse } from "../../data/quiz";
import { navigate } from "gatsby";
import AlertError from "../../components/error/alertError";

const Age = () => {
  const [isAdult, setIsAdult] = useState(null);

  const back = () => {
    navigate('/');
  }

  const handleSelect = (select) => {
    setIsAdult(select);

    next(select);
  }
  
  const next = (select) => {
    if (select || isAdult) {
      navigate('/book/location');
    }
  }

  const data = {
    title: "Are you 18 or older, or seeking support for someone who is?",
    current: 1,
    total: 4,
    next,
    back,
  };

  return (
    <LayoutQuiz data={data} footer>
      <div className='flex mt-8 flex-wrap'>
        {trueOrFalse.map(item => 
          <SimpleSelect 
            isActive={isAdult === item.key ? true : false}
            onSelect={() => handleSelect(item.key)}
            title={item.name}
            key={item.key}
          />
        )}
      </div>
      {isAdult === false && <AlertError />}
    </LayoutQuiz>
  );
}

export default Age;