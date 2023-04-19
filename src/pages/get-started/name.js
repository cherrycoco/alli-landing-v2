import React, { useState, useEffect } from "react";
import BasicInput from "../../components/input/basicInput";
import LayoutQuiz from "../../components/layout/layoutQuiz";
import useQuiz from "../../context/useQuiz";
import { initialQuizContext } from "../../context/initialState";
import { navigate } from "gatsby";
import { formatName } from "../../util/helpers";
import Error from "../../components/error/error";

const Name = () => {
  const { quiz, setQuiz } = useQuiz() || initialQuizContext;
  const [firstName, setFirstName] = useState(quiz ? quiz.firstName : '');
  const [error, setError] = useState(false);
  const { rate, isStandardRate } = quiz;

  console.log(firstName, quiz);
  useEffect(() => {
    if (rate === 0) {
      return navigate('/get-started/rate');
    }
  }, []);

  const back = () => {
    if (isStandardRate) {
      navigate('/get-started/rate');
    } else {
      navigate('/get-started/select-rate');
    }
  }
  
  const next = () => {
    if (!firstName) {
      return setError('Please enter your first name!');
    }

    setQuiz({
      ...quiz,
      firstName: formatName(firstName),
    });

    navigate('/get-started/email');
  }

  const onChange = (e) => {
    setFirstName(e.target.value, firstName);
  }

  const inputData = {
    placeholder: 'First Name',
    type: 'text',
    name: 'firstName',
    onChange,
    value: firstName,
  }

  const data = {
    title: `$${rate} per session it is - what's your first name?`,
    current: 5,
    total: 11,
    next,
    back,
  }

  return (
    <LayoutQuiz data={data} footer>
      <div className='mt-16 w-11/12 mx-auto'>
        <BasicInput data={inputData} />
        {error && <Error error={error} />}
      </div>
    </LayoutQuiz>
  );
}

export default Name;