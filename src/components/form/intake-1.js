import React, { useEffect, useState } from 'react';
import Loading from '../loading/loading';
import Error from '../error/error';

import { useMutation } from '@apollo/client';
// import UPDATE_USER from '../../graphql/mutation/updateUser'
import UPDATE_INTAKE from '../../graphql/mutation/updateIntake';

import { navigate } from 'gatsby';
import Button from '../button/button';
import { capitalize, formatAndValidateEmail, formatAddress } from '../../util/helpers';
import AddressAutocomplete from '../input/addressAutocomplete';
import InputLabel from '../input/inputLabel';

const REFERRAL_SOURCE = ['Physician/Specialist', 'Friend', 'Facebook', 'Instagram', 'Google Search', 'Google Ads', 'Facebook/Instagram Ads', 'Mommy Connection', 'Mama Mobile', 'Other'];
const GENDER = ['female', 'male', 'other'];
const PHYSICIAN_TYPE = ['Family Physician', 'Gynecologist', 'Midwife', 'Other'];
const MARITAL_STATUS = ['Single', 'Married', 'Widowed', 'Separated', 'Divorced'];
const EDUCATION = ['Less than high school', 'High school', 'Associate degree', 'Bachelor degree', "Master's degree", 'Professional degree', 'Doctorial degree'];

const Intake1 = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [preferredName, setPreferredName] = useState(user.preferredName);
  const [email, setEmail] = useState(user.email);
  const [tel, setTel] = useState(user.tel);
  const [birthday, setBirthday] = useState(user.birthday);
  const [address, setAddress] = useState('');
  const [emergencyContactName, setEmergencyContactName] = useState(user.emergencyContactName);
  const [emergencyContactTel, setEmergencyContactTel] = useState(user.emergencyContactTel);
  const [physicianName, setPhysicianName] = useState(user.physicianName);
  const [physicianTel, setPhysicianTel] = useState(user.physicianTel);
  const [referralSource, setReferralSource] = useState(user.referralSource);
  const [physicianType, setPhysicianType] = useState(user.physicianType);
  const [referralNotes, setReferralNotes] = useState(user.referralNotes);
  const [gender, setGender] = useState(user.gender);
  const [maritalStatus, setMaritalStatus] = useState(user.maritalStatus);
  const [pronoun, setPronoun] = useState(user.pronoun);
  const [education, setEducation] = useState(user.education);
  const [occupation, setOccupation] = useState(user.occupation);
  const [culture, setCulture] = useState('');
  const [religion, setReligion] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [updateIntake, { data }] = useMutation(UPDATE_INTAKE);

  useEffect(() => {
    if (data && data.updateIntake) { 
      const { success, message } = data.updateIntake;
      setLoading(false);
      if (success) {
        navigate(`/get-matched/intake-2/?${user.id}`);
      } else {
        setError(message);
      }
    }
  }, [data])

  const handleError = message => {
    setLoading(false);
    setError(message);
  }

  const handleSubmit = async e => {
    e.preventDefault();
    setError(false);

    if (firstName === lastName) {
      return handleError('Looks like your first name and last name is the same!');
    };
    
    if (!tel) {
      return handleError('Looks like your phone number is missing!');
    };

    if (!email) {
      return handleError('Looks like your email is missing!');
    };

    if (!birthday) {
      return handleError('Looks like your date of birth is missing!');
    };
    
    if (!address) {
      return handleError('Please select an address from the address dropdown!');
    };
    
    if (!emergencyContactName) {
      return handleError('Looks like your emergency contact name is missing!');
    };
    
    if (!emergencyContactTel) {
      return handleError('Looks like your emergency contact phone number is missing!');
    };
    
    setLoading(true);

    const { street, city, province, postalCode, country } = formatAddress(address);
    const formattedEmail = formatAndValidateEmail(email);

    const variables = {
      user: {
        id: user.id,
        firstName: capitalize(firstName),
        lastName: capitalize(lastName),
        preferredName: capitalize(preferredName),
        email: formattedEmail,
        tel,
        birthday,
        street,
        city,
        province,
        country,
        postalCode,
        emergencyContactName,
        emergencyContactTel,
        referralSource,
        physicianType,
        physicianName,
        physicianTel,
        referralNotes,
        gender,
        pronoun,
        education,
        occupation,
        maritalStatus,
        stateId: province,
      }
    };

    if (culture || religion) {
      variables.intake = {
        userId: user.id,
        culture,
        religion,
      }
    };

    console.log(variables);
    updateIntake({ variables });
  };
  
  return (
    <form className='mt-8 space-y-6'>
      {loading && <Loading />}
      <div>
        <label>What's your first name?</label>
        <p className='text-sm text-gray-500 mt-1'>(This will be the name on your insurance receipt)</p>
        <input required type='text' name='fname' value={firstName} onChange={e => setFirstName(e.target.value)} />
      </div>
      <div>
        <label>What's your last name?</label>
        <input required type='text' name='lname' value={lastName} onChange={e => setLastName(e.target.value)} />
      </div>
      <div>
        <label>What's your preferred name? [OPTIONAL]</label>
        <input type='text' name='preferredName' value={preferredName} onChange={e => setPreferredName(e.target.value)} />
      </div>
      <div>
        <label>What's your email?</label>
        <input required type='email' name='email' value={email} onChange={e => setEmail(e.target.value)} />
      </div>
      <div>
        <label>What's your phone number?</label>
        <input required type='tel' name='tel' value={tel} onChange={e => setTel(e.target.value)} />
      </div>
      <div>
        <label>What's your address?</label>
        <AddressAutocomplete handleSelect={setAddress}/>
      </div>
      <div>
        <label>What's your date of birth?</label>
        <input placeholder='Date of Birth' required type='date' name='birthday' value={birthday} onChange={e => setBirthday(e.target.value)} />
      </div>
      <div>
        <label>What's the name of your emergency contact?</label>
        <input required type='text' value={emergencyContactName} onChange={e => setEmergencyContactName(e.target.value)} />
      </div>
      <div>
        <label>What's the phone number of your emergenct contact?</label>
        <input required type='tel' value={emergencyContactTel} onChange={e => setEmergencyContactTel(e.target.value)} />
      </div>
      <div>
        <label>What's the full name of your primary care physician?</label>
        <input required type='text' value={physicianName} onChange={e => setPhysicianName(e.target.value)} />
      </div>
      <div>
        <label>What's the phone number of your primary care physician?</label>
        <input required type='tel' value={physicianTel} onChange={e => setPhysicianTel(e.target.value)} />
      </div>
      <h5 className='pt-14 pb-4 text-lg text-gray-500'>Below are optional questions - Please tell us more about yourself:</h5>
      <div>
        <label>What is your gender?</label>
        <select
          value={gender}
          onChange={e => setGender(e.target.value)}
        >
          <option value="">-Select-</option>
          {
            GENDER.map(item => <option value={item}>{item}</option>)
          }
        </select>
      </div>
      <div>
        <label>What are your preferred pronouns?</label>
        <input type='text' value={pronoun} onChange={e => setPronoun(e.target.value)} />
      </div>
      <div>
        <label>What's your marital/partnership status?</label>
        <select
          value={maritalStatus}
          onChange={e => setMaritalStatus(e.target.value)}
        >
          <option value="">-Select-</option>
          {
            MARITAL_STATUS.map(item => <option value={item}>{item}</option>)
          }
        </select>
      </div>
      <div>
        <label>What is your educational background?</label>
        <select
          value={education}
          onChange={e => setEducation(e.target.value)}
        >
          <option value="">-Select-</option>
          {
            EDUCATION.map(item => <option value={item}>{item}</option>)
          }
        </select>
      </div>
      <div>
        <label>What is your current occupation/school status?</label>
        <input type='text' value={occupation} onChange={e => setOccupation(e.target.value)} />
      </div>
      <div>
        <label>Is there a specific culture(s) that you identify with? If so, which one(s)?</label>
        <input type='text' value={culture} onChange={e => setCulture(e.target.value)} />
      </div>
      <div>
        <label>Are there any spiritual considerations that are important to you? If so, which one(s)?</label>
        <input type='text' value={religion} onChange={e => setReligion(e.target.value)} />
      </div>
      <div>
        <label>How did you hear about us?</label>
        <select
          value={referralSource}
          onChange={e => setReferralSource(e.target.value)}
        >
          <option value="">-Select-</option>
          {
            REFERRAL_SOURCE.map(item => <option value={item}>{item}</option>)
          }
        </select>
        {referralSource === 'Other' && <div>
          <label>Please let us know how you found us!</label>
          <input type='text' value={referralNotes} onChange={e => setReferralNotes(e.target.value)} />
        </div>}
        {referralSource === 'Physician/Specialist' && 
        <div>
          <label>Physician/Specialist Type</label>
          <select
            value={physicianType}
            onChange={e => setPhysicianType(e.target.value)}
          >
            <option value="">-Select-</option>
            {
              PHYSICIAN_TYPE.map(item => <option value={item}>{item}</option>)
            }
          </select>
          <label>Please let us know the name of your physician/specialist!</label>
          <input type='text' value={referralNotes} onChange={e => setReferralNotes(e.target.value)} />
        </div>}
        {referralSource === 'Friend' && <div>
          <label>Please let us know the name of your friend!</label>
          <input type='text' value={referralNotes} onChange={e => setReferralNotes(e.target.value)} />
        </div>}
      </div>
      {error && <Error error={error} />}
      <Button type='submit' onClick={handleSubmit} className='w-full'>Save and Continue</Button>
    </form>
  );
}

export default Intake1;