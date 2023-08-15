import React, { useState, useEffect } from "react";
import BasicInput from "../../components/input/basicInput";
import LayoutQuiz from "../../components/layout/layoutQuiz";
import useQuiz from "../../context/useQuiz";
import { initialQuizContext } from "../../context/initialState";
import { navigate } from "gatsby";
import { formatAndValidateEmail } from "../../util/helpers";
import Error from "../../components/error/error";
import { useMutation } from "@apollo/client";
import Loading from "../../components/loading/loading";
import emailError from '../../util/emailError';
import ADD_QUIZ from "../../graphql/mutation/addQuiz";

const Email = () => {
  const { quiz, setQuiz } = useQuiz() || {};
  const [email, setEmail] = useState(quiz ? quiz.email : '');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { firstName, rate, requestId, tier, referrer, isPaidReferrer, stateId } = quiz;
  console.log(quiz);

  const [addQuiz, { data }] = useMutation(ADD_QUIZ);


  useEffect(() => {
    if (!stateId) {
      return navigate('/get-started/location');
    }

    if (rate === 0) {
      return navigate('/get-started/rate');
    }

    if (!firstName) {
      return navigate('/get-started/name');
    }

    if (data && data.addQuiz) { 
      const { success, message, request } = data.addQuiz;
      setLoading(false);

      if (success) {
        setQuiz({
          ...quiz,
          requestId: request.id,
          user: request.user,
        });

        navigate(`/get-started/type`);

        if (typeof window !== "undefined") {
          if (window.analytics) {
            window.analytics.identify(request.user.id, {
              email: request.user.email,
              firstName: request.user.firstName,
            });
            
            window.analytics.track("Quiz - Email", {
              userId: request.user.id,
              email: request.user.email,
              firstName: request.user.firstName,
            });
          }
        };
      } else {
        setError('Sorry, there seems to be a problem creating your request. Please refresh the page and re-start the quiz!');
        emailError(`Error - Email`, { quiz, err: message });
      }
    }
  }, [firstName, rate, data, stateId]);

  const back = () => {
    navigate('/get-started/name');
  }
  
  const next = () => {
    try {
      setError(false);

      const validEmail = formatAndValidateEmail(email);

      if (!validEmail) {
        return setError('Please enter a valid email address!');
      } else if (!stateId) {
        return setError('Please enter your location!');
      } else {
        setLoading(true);

        setQuiz({
          ...quiz,
          email: validEmail,
        });

        const variables = {
          quiz: {
            firstName,
            email: validEmail,
            referrer,
            isPaidReferrer,
            stage: tier,
            rate,
            status: 'QUIZ_STARTED',
            stateId,
          }
        };

        if (requestId) {
          variables.quiz.id = requestId;
        }

        console.log(variables);
        addQuiz({ variables });
      }
    } catch (err) {
      setLoading(false);
      setError('Sorry, there seems to be a problem creating your request. Please refresh the page and re-start the quiz!');
      emailError(`Error - Email`, { quiz, err });
      console.log(err);
    }
  }

  const onChange = (e) => {
    setEmail(e.target.value);
  }

  const inputData = {
    placeholder: 'Email',
    type: 'email',
    name: 'email',
    value: email,
    onChange,
  }

  const infoData = {
    title: `${firstName}, what's the best email to reach you?`,
    current: 7,
    total: 12,
    next,
    back,
  };

  return (
    <LayoutQuiz data={infoData} footer>
      {loading && <Loading />}
      <div className='mt-16 w-11/12 mx-auto'>
        <BasicInput data={inputData} />
        {error && <Error error={error} />}
      </div>
    </LayoutQuiz>
  );
}

export default Email;