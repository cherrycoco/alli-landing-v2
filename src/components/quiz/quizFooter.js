import React from 'react';
import Button from '../button/button';
import ButtonOutline from '../button/buttonOutline';
import Progress from '../progress/progress';

const QuizFooter = ({ next, back, current, total }) => {
  return (
    <div className="py-12">
      <hr className="my-8 h-px border-t-0 bg-gray-300" />
      <div className='flex flex-col justify-center items-center sm:justify-between sm:flex-row '>
        <Progress current={current} total={total}/>
        <div className='mt-4 md:mt-0'>
          <ButtonOutline onClick={back} className='mr-2 w-24'>Back</ButtonOutline>
          <Button onClick={next} className='w-24'>Next</Button>
        </div>
      </div>
    </div>
  )
}

export default QuizFooter;