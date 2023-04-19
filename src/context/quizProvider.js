import React, { useState } from 'react';
import QuizContext from './quizContext';
import { initialQuizState } from './initialState';

const QuizProvider = ({ children }) => {
  const [quiz, setQuiz] = useState(initialQuizState);

  const value = {
    quiz,
    setQuiz,
  };

  return (
    <QuizContext.Provider value={value}>
      {children}
    </QuizContext.Provider>
  );
};

export default QuizProvider;