import React, { useState, useEffect } from 'react';
import InputLabel from '../input/inputLabel';
import CheckboxSimple from '../input/checkboxSimple';
import Consent from '../consent/consent';
import BasicModal from "../modal/basicModal";
import CheckboxConsent from '../input/checkboxConsent';
import Button from '../button/button';
import THERAPY_CONSENT from '../../data/therapyConsent';
import TERMS from '../../data/termsOfService';
import Error from '../error/error';
import { formatAndValidateEmail, formatName, formatTel } from '../../util/helpers';
import Loading from '../loading/loading';
import { useMutation } from '@apollo/client';
import ADD_BOOKING_USER from '../../graphql/mutation/addBookingUser';
import emailError from '../../util/emailError';
import { navigate } from 'gatsby';

const BookingForm = ({ quiz, setQuiz }) => {
  const [showConsent, setShowConsent] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const { requestId, date, time, proSelected, user, rate, serviceId, referrer, isPaidReferrer } = quiz;
  const [state, setState] = useState({
    firstName: user ? user.firstName : '',
    lastName: user ? user.lastName : '',
    tel: user ? user.tel : '',
    email: user ? user.email : '',
    crisis: false,
    consent: false,
    terms: false,
  });
  const { firstName, lastName, tel, email, crisis, consent, terms } = state;
  const [addBookingUser, { data }] = useMutation(ADD_BOOKING_USER);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  console.log(quiz);

  useEffect(() => {
    if (data && data.addBookingUser) { 
      const { success, message, booking, user } = data.addBookingUser;
      console.log(data);
      setLoading(false);
      if (success) {
        setQuiz({
          ...quiz,
          bookingId: booking.id,
          user,
        });
        
        if (typeof window !== "undefined") {
          if (window.analytics) {
            window.analytics.identify(user.id, {
              email,
              firstName,
            });
  
            if (serviceId === 'therapy_consult') {
              window.analytics.track("Guidance", {
                userId: user.id,
                email,
                firstName,
              });
            } else {
              window.analytics.track("Booking", {
                userId: user.id,
                proId: proSelected.id,
                email,
                firstName,
              });
            }
          }
        };
        navigate(`/thank-you?booking-confirmation`);
      } else {
        emailError(`Error - Add Booking`, { quiz, state, err: message });
        setError(message);
      }
    }
  }, [data]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const onCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setState({ ...state, [name]: checked });
  };

  const base = {
    type: 'text',
    onChange,
  }

  const firstNameInput = {
    ...base,
    name: 'firstName',
    label: 'First Name',
    value: firstName,
  };

  const lastNameInput = {
    ...base,
    name: 'lastName',
    label: 'Last Name',
    value: lastName,
  };

  const telInput = {
    ...base,
    type: 'tel',
    name: 'tel',
    label: `Phone Number`,
    helperText: `Only input the 10 digits, no spaces or dashes e.g. 1234567890`,
    value: tel,
  };

  const emailInput = {
    ...base,
    name: 'email',
    type: 'email',
    label: `Email`,
    value: email,
  };

  const therapyConsentInput = {
    label: `I have read and accept the `,
    consent: `consent to counselling and psychotherapy services`,
    name: 'consent',
    checked: consent,
    onChange: onCheckboxChange,
    onClick: () => setShowConsent(true),
  }

  const termsInput = {
    label: `I have read and accept `,
    consent: `Alli's Terms of Services`,
    name: 'terms',
    checked: terms,
    onChange: onCheckboxChange,
    onClick: () => setShowTerms(true),
  }

  const crisisInput = {
    label: 'I understand that Alli is not a crisis service (If you are having thoughts of self-harm or thoughts of harming others please contact 1-833-456-4566)',
    checked: crisis,
    name: 'crisis',
    onChange: onCheckboxChange,
  }

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      
      if(!consent) {
        return setError('Please read and accept the consent to therapy.');
      };
      
      if(!terms) {
        return setError(`Please read and accept Alli's terms and services.`);
      };
      
      if(!crisis) {
        return setError(`Please read and accept the crisis consent.`);
      };

      if (tel.length !== 10 || tel.charAt(0) === "1") {
        throw new Error("Make sure your phone number is ONLY 10 digits long and does not start with 1.");
      }
      
      const formattedTel = formatTel(tel);
      const formattedEmail = formatAndValidateEmail(email);
      const firstNameF = formatName(firstName);
      const lastNameF = formatName(lastName);
      
      if (!firstNameF || !lastNameF) {
        return setError('Make sure you fill out your first name and last name.');
      }
      
      if (formattedTel.length !== 10 || tel.charAt(0) === "1") {
        return setError('Make sure your phone number is 10 digits long and does not start with 1.');
      }
      
      if (!formattedEmail) {
        return setError('Make sure your email is valid.');
      }
      
      if (firstNameF === lastNameF) {
        return setError(`Please make sure your first and last name are different`);
      };
      
      setLoading(true);
      
      const variables = {
        request: {
          id: requestId,
          rate,
          firstName: firstNameF,
          lastName: lastNameF,
          email: formattedEmail,
          tel: formattedTel,
          userId: user ? user.id : '',
          referrer,
          isPaidReferrer,
        },
        booking: {
          userId: user ? user.id : '',
          date,
          startTime: time,
          proId: serviceId === 'therapy_consult' ? 'xuWDXJNvhuXOa0fcEgIQpaaiSuy1' : proSelected.id,
          serviceId: serviceId === 'therapy_consult' ? 'therapy_consult' : `${proSelected.type}_initial_60`,
          bookingStatus: 'BOOKED',
          bookingSource: 'user',
          paymentStatus: serviceId === 'therapy_consult' ? 'PAID' : 'UNPAID',
        },
      };

      console.log('got here', variables);
      addBookingUser({ variables });
    } catch (err) {
      setLoading(false);
      emailError(`problem with booking for ${firstName} ${lastName}`, { state, quiz, err });
      setError(`There's an error from booking- ${err.message}`);
    }
  }

  return (
    <form className='max-w-lg mx-auto mt-8 space-y-6'>
      {loading && <Loading />}
      <InputLabel data={firstNameInput} />
      <InputLabel data={lastNameInput} />
      <InputLabel data={telInput} />
      <InputLabel data={emailInput} />
      <BasicModal show={showConsent} onClose={() => setShowConsent(false)}>
        <Consent data={THERAPY_CONSENT} />
      </BasicModal>
      <BasicModal show={showTerms} onClose={() => setShowTerms(false)}>
        <Consent data={TERMS} />
      </BasicModal>
      <CheckboxConsent data={therapyConsentInput} />
      <CheckboxConsent data={termsInput} />
      <CheckboxSimple data={crisisInput}/>
      {error && <Error error={error} />}
      <Button onClick={handleSubmit} className='w-full'>Submit</Button>
    </form>
  )
}

export default BookingForm;