import React from "react"
import Header from "../header/header"
import QuizFooter from "../quiz/quizFooter"
import QuizProvider from "../../context/quizProvider"

const LayoutQuiz = ({ children, data, footer }) => {
  const { title, description, current, total, next, back } = data ? data : {};

  return (
    <div>
      <Header />
      <QuizProvider>
        <main 
          className={`flex flex-col w-11/12 mx-auto justify-between`}
          style={{ minHeight: `calc(100vh - 90px)` }}
        >
          <div className='mt-16 mx-auto max-w-4xl w-full'>
            <h1 className='text-2xl mb-2 font-semibold text-gray-700'>{title}</h1>
            {description && <p className='font-light text-gray-600'>{description}</p>}
            {children}
          </div>
          {footer && <QuizFooter next={next} back={back} current={current} total={total} />}
        </main>
      </QuizProvider>
    </div>
  )
}

export default LayoutQuiz
