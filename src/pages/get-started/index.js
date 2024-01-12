import React, { useState } from "react";
import LayoutQuiz from "../../components/layout/layoutQuiz";
import SimpleSelect from "../../components/select/simpleSelect";
import { trueOrFalse } from "../../data/quiz";
import { navigate } from "gatsby";
import AlertError from "../../components/error/alertError";

const Location = () => {
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
      navigate('/get-started/location');
    }
  }

  const data = {
    title: "Are you 18 or older, or seeking support for someone who is?",
    current: 1,
    total: 12,
    next,
    back,
  };

  const externalUrl = 'https://client.alli.io/get-started';
  return (

      <Redirect
        to={externalUrl}
        query={location.search}
      />
    // <LayoutQuiz data={data} footer>
    //   <div className='flex mt-8 flex-wrap'>
    //     {trueOrFalse.map(item => 
    //       <SimpleSelect 
    //         isActive={isAdult === item.key ? true : false}
    //         onSelect={() => handleSelect(item.key)}
    //         title={item.name}
    //         key={item.key}
    //       />
    //     )}
    //   </div>
    //   {isAdult === false && <AlertError />}
    // </LayoutQuiz>
  );
}

export default Location;