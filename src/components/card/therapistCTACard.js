import React, { useState, useEffect } from 'react';
import { capitalize } from '../../util/helpers';
import Button from '../button/button';
import useQuiz from '../../context/useQuiz';
import { initialQuizContext } from '../../context/initialState';
import { setRates } from '../../data/quiz';
import { navigate } from 'gatsby';

const TherapistCTACard = ({ data }) => {
  const { quiz, setQuiz } = useQuiz() || initialQuizContext;
  const { requestId, pros, tier, rate } = quiz;
  const { id, fullName, img, isAccepting, role, firstName } = data ? data: {};
  const [ type, setType ] = useState(''); 

  useEffect(() => {
    let tempType = 'Resident Therapist';

    if (role === 'qualifying') {
      tempType = 'Intermediate Therapist';
    } else if (role === 'licensed' || role === 'supervisor') {
      tempType = 'Advanced Therapist';
    }
    setType(capitalize(tempType));
  }, [role]);

  const handleClick = () => {
    const newQuiz = {...quiz, proSelected: data};
    if (isAccepting) {
      newQuiz.tier = role === 'supervisor' ? 'licensed' : role;
      const rateChecked = rateCheck(newQuiz.tier, rate);
      setQuiz(newQuiz);
      if (rateChecked) {
        navigate('/get-started/schedule');
      } else {
        navigate('/book/location');
      }
    } else {
      navigate('https://notionforms.io/forms/alli-therapy-waitlist');
    }
  }

  const rateCheck = (proTier, rateSelected) => {
    if (rateSelected) {
      if (rateSelected >= setRates[proTier].min && rateSelected <= setRates[proTier].max) {
        return true;
      }
    }

    return false;
  }


  return (
    <div key={id} className="w-[220px] mx-auto text-left">
      <div className="h-72 w-full aspect-h-1 aspect-w-1 overflow-hidden rounded-md">
        <img
          src={img ? img : 'https://res.cloudinary.com/dhze7gimq/image/upload/v1681895062/alli_headshots/on3kuzkclhmwx4frnthn.png'}
          alt={fullName}
          className="h-full mb-0 w-full object-cover object-top"
        />
      </div>
      <div>
        <p className="text-sm m-0 mt-2 text-gray-700">
          {fullName}
        </p>
        <p className="mt-1 mb-0 text-xs text-gray-500">{type}</p>
      </div>
      {isAccepting ?
      <Button onClick={handleClick} className="w-full mt-4">{`Book with ${firstName}`}</Button>:
      <a href="https://notionforms.io/forms/alli-therapy-waitlist" target="_blank" rel="noopener noreferrer">
        <Button className="w-full mt-4">{`Waitlist for ${firstName}`}</Button>
      </a>
      }
    </div>
  )
}

export default TherapistCTACard;