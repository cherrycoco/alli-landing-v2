import React, { useEffect, useState } from 'react';

import Loading from '../loading/loading';
import Error from '../error/error';

import { useMutation } from '@apollo/client';
import { navigate } from 'gatsby';
import Button from '../button/button';
import UPDATE_INTAKE from '../../graphql/mutation/updateIntake';
import CheckboxSimple from '../input/checkboxSimple';
import BooleanRadio from '../input/booleanRadio';
import BasicSelect from '../input/basicSelect';
import ScaleSelector from '../input/scaleSelector';

const SYMPTOMS = [
  "Lack of motivation",
  "Talking too fast",
  "Fatigue/no energy",
  "Feeling hopeless/helpless",
  "Sleeping too much",
  "Lack of interest",
  "Poor/no appetite",
  "Thoughts of dying",
  "Overeating",
  "Isolating/prefer to be alone",
  "Poor memory",
  "Feeling irritable/angry",
  "Sadness",
  "Restlessness/can't sit still",
  "Feeling worthless",
  "Impulsiveness",
  "Guilt/shame",
  "Paranoia",
  "Avoidance",
  "Excessive energy",
  "Inability to shut brain off",
  "Seeing things",
  "Panic/anxiety attacks",
  "Recurring nightmares",
  "Fearfulness",
  "Inability to concentrate",
  "Nervousness/on edge",
  "Avoidance of crowds",
  "Restrictive eating",
  "Binging/purging",
  "Visual hallucinations (seeing things that are not there)",
  "Auditory hallucinations (hearing things that are not there)",
  "Overstimulation",
  "Physical pain"
];

const TRAUMAS = [
  `physical abuse`, 
  `psychological abuse`, 
  `emotional abuse`, 
  `sexual abuse/assault`, 
  `miscarriage`, 
  `grief`, 
  `financial abuse`, 
  `traumatic event/accident`, 
  `attachment/developmental trauma`, 
  `medical trauma`, 
  `other`,
];

const SUICIDE = [
  "I have never had thoughts of suicide.",
  "I previously had thoughts of suicide but never formulated a plan.",
  "I am currently having thoughts of suicide but do not have a plan.",
  "I have thought about a plan but never acted on it.",
  "I currently have a plan and wish to act on it.",
  "I have attempted suicide but did not want to die.",
  "I have attempted suicide and truly hoped to die.",
  "I have had thoughts of self-harm but never acted on them.",
  "I previously engaged in self-harm but do not currently.",
  "I currently engage in self-harm."
];

const CURRENTSUICIDE = [
  "I have had no thoughts of suicide",
  "I have had some fleeting thoughts of suicide",
  "I have regularly thought about suicide",
  "I think about suicide on a daily basis",
  "I think about suicide multiple times a day",
  "I have thoughts of harming myself daily",
  "I sometimes have thoughts of harming myself",
  "I infrequently have thoughts of harming myself"
];

const FAMILY = [
  "Substance abuse",
  "Domestic violence and/or abuse (emotional, physical, neglect)",
  "Mood disorders (anxiety, depression)",
  "Eating disorders and/or obesity",
  "Suicide attempts",
  "Obsessive Compulsive Behaviours",
  "Psychiatric conditions (schizophrenia, personality disorders)",
  "Others",
];


const Intake2 = ({ user, userId }) => {
  const [healthyPast, setHealthyPast] = useState('');
  const [symptoms, setSymptoms] = useState({});
  const [stressors, setStressors] = useState('');
  const [isDiagnoses, setIsDiagnoses] = useState(false);
  const [diagnoses, setDiagnoses] = useState('');
  const [isMedication, setIsMedication] = useState(false);
  const [medication, setMedication] = useState('');
  const [isPhysical, setIsPhysical] = useState(false);
  const [physical, setPhysical] = useState('');
  const [isSuicide, setIsSuicide] = useState(false);
  const [suicideHabit, setSuicideHabit] = useState({});
  const [suicideCurrent, setSuicideCurrent] = useState({});
  const [isFamilyHistory, setIsFamilyHistory] = useState(false);
  const [familyHistory, setFamilyHistory] = useState({});
  const [isSubstanceAbuse, setIsSubstanceAbuse] = useState(false);
  const [substanceAbuse, setSubstanceAbuse] = useState('');
  const [isTherapyPast, setIsTherapyPast] = useState(false);
  const [therapyPast, setTherapyPast] = useState('');
  const [issues, setIssues] = useState('');
  const [issuesImpact, setIssuesImpact] = useState('');
  const [trauma, setTrauma] = useState('');
  const [emotionalIntensity, setEmotionalIntensity] = useState(null);
  const [recordConsent, setRecordConsent] = useState(false);
  const [isLegal, setIsLegal] = useState(false);
  const [notes, setNotes] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [updateIntake, { data }] = useMutation(UPDATE_INTAKE);


  useEffect(() => {
    if (data && data.updateIntake) { 
      const { success, message } = data.updateIntake;
      if (success) {
        navigate(`/thank-you?intake`);
      } else {
        setError(message);
      }
      setLoading(false);
    }
  }, [data])

  const handleError = message => {
    setLoading(false);
    setError(message);
  }

  const stringifyChecklist = (checklist) => {
    const res = [];
    
    for (let key in checklist) {
      const value = checklist[key];

      if (value) {
        res.push(key);
      };
    };

    return res.join('|');
  }

  const handleSubmit = async e => {
    e.preventDefault();
    setError(false);
    setLoading(true);

    const variables = {
      intake: {
        userId: user.id,
        issues,
        issuesImpact,
        symptoms: stringifyChecklist(symptoms),
        stressors,
        isTherapyPast: isTherapyPast === 'yes' ? true : false,
        therapyPast,
        healthyPast,
        trauma,

        isFamilyHistory: isFamilyHistory === 'yes' ? true : false,
        familyHistory: stringifyChecklist(familyHistory),
        isDiagnoses: isDiagnoses === 'yes' ? true : false,
        diagnoses,
        isMedication: isMedication === 'yes' ? true : false,
        medication,
        isPhysical: isPhysical === 'yes' ? true : false,
        physical,
        isSuicide: isSuicide === 'yes' ? true : false,
        suicideHabit: stringifyChecklist(suicideHabit),
        suicideCurrent: stringifyChecklist(suicideCurrent),
        isSubstanceAbuse: isSubstanceAbuse === 'yes' ? true : false,
        substanceAbuse,
        isLegal: isLegal === 'yes' ? true : false,
        notes,
        emotionalIntensity: emotionalIntensity ? Number(emotionalIntensity) : null,
      }
    };

    if (recordConsent) {
      variables.user = {
        id: user.id,
        recordConsent,
      };
    }

    console.log(variables);
    updateIntake({ variables });
  };

  const handleChangeSymptoms = (e) => {
    setSymptoms({
      ...symptoms,
      [e.target.name]: e.target.checked,
    });
  };

  const handleChangeFamily = (e) => {
    setFamilyHistory({
      ...familyHistory,
      [e.target.name]: e.target.checked,
    });
  };

  const handleChangeSuicide = (e, type) => {
    if (type === 'habit') {
      setSuicideHabit({
        ...suicideHabit,
        [e.target.name]: e.target.checked,
      });
    } else {
      setSuicideCurrent({
        ...suicideCurrent,
        [e.target.name]: e.target.checked,
      });
    }
  };
  
  return (
    <form className='mt-8 space-y-6'>
      {loading && <Loading />}
      <div>
        <label>Please describe what has brought you to seek therapy at this time?</label>
        <textarea value={issues} onChange={e => setIssues(e.target.value)} rows={5} cols={4} />
      </div>
      <div>
        <label>How are your current issues affecting your daily life, and for how long have you been experiencing them?</label>
        <textarea value={issuesImpact} onChange={e => setIssuesImpact(e.target.value)} rows={5} cols={4}/>
      </div>
      <div>
        <label>On a daily basis, how do you typically feel?</label>
        <textarea value={healthyPast} onChange={e => setHealthyPast(e.target.value)} rows={5} cols={4}/>
      </div>
      <div>
        <label>Rate your current emotional intensity on a scale of 1 (Low) to 10 (High):</label>
        <ScaleSelector 
          data={{
            labelLow: 'Low Intensity',
            labelHigh: 'High Intensity',
            value: emotionalIntensity,
            onChange: e => {console.log(e.target.value); setEmotionalIntensity(e.target.value); console.log(emotionalIntensity)},
          }}
        />
      </div>
      <div>
        <label>What current stressors are affecting your mental health?</label>
        <textarea placeholder='e.g. family, finances, work, parenting, communication, etc.' value={stressors} onChange={e => setStressors(e.target.value)} rows={5} cols={4}/>
      </div>
      <div>
        <label>In the past 30 days, have you experienced any of the following symptoms? (Please check all that apply):</label>
        <div className='grid grid-cols-2 pt-4 mb-12'>
          <div className='col-span-1 space-y-2'> 
            {SYMPTOMS.slice(0, Math.ceil((SYMPTOMS.length + 2) / 2)).map(item => 
              <CheckboxSimple 
                data={{
                  onChange: handleChangeSymptoms,
                  checked: symptoms[item],
                  label: item,
                  name: item,
                }} 
              />
            )}
          </div>
          <div className='col-span-1 space-y-2'>
            {SYMPTOMS.slice(-Math.ceil((SYMPTOMS.length - 2) / 2)).map(item => 
                <CheckboxSimple 
                data={{
                  onChange: handleChangeSymptoms,
                  checked: symptoms[item],
                  label: item,
                  name: item,
                }} 
              />
            )}
          </div>
        </div>
      </div>
      <div>
        <label>
          Have you experienced trauma at any time in your life? This could include physical, psychological, emotional, sexual, or financial abuse. Please provide as much or as little detail as you're comfortable with.
          <a className='ml-2 text-gray-700 underline' target='_blank' href='https://firebasestorage.googleapis.com/v0/b/alli-app.appspot.com/o/trauma.jpg?alt=media&token=b10bf767-312d-41f1-8c04-14f338b530cf'>(Click here for a description of trauma)</a>
        </label>
        <textarea value={trauma} onChange={e => setTrauma(e.target.value)} rows={5} cols={4}/>
      </div>
      <div>
        <label>Have you ever attended mental health therapy before?</label>
        <BooleanRadio data={{
          value: isTherapyPast,
          onChange: e => setIsTherapyPast(e.target.value),
        }} />
        {
          isTherapyPast === 'yes' && (
            <textarea placeholder='What aspects did you find helpful or unhelpful?' value={therapyPast} onChange={e => setTherapyPast(e.target.value)} rows={5} cols={4}/>
          )
        }
      </div>
      <div>
        <label>Do you have any mental health diagnoses relevant to therapy at this time?</label>
        <BooleanRadio 
        data={{
          value: isDiagnoses,
          onChange: e => setIsDiagnoses(e.target.value),
          }} 
        />
        {
          isDiagnoses === 'yes' && (
            <textarea placeholder='Please share more about your diagnoses...' value={diagnoses} onChange={e => setDiagnoses(e.target.value)} rows={5} cols={4}/>
          )
        }
      </div>
      <div>
        <label>Are you taking any medications for these mental health diagnoses?</label>
        <BooleanRadio 
        data={{
          value: isMedication,
          onChange: e => setIsMedication(e.target.value),
          }} 
        />
        {
          isMedication === 'yes' && (
            <textarea placeholder='Please list the medications...' value={medication} onChange={e => setMedication(e.target.value)} rows={5} cols={4}/>
          )
        }
      </div>
      <div>
        <label>Are you dealing with any physical health conditions at the moment?</label>
        <BooleanRadio 
        data={{
          value: isPhysical,
          onChange: e => setIsPhysical(e.target.value),
          }} 
        />
        {
          isPhysical === 'yes' && (
            <textarea placeholder='Please list the conditions and describe the associated symptoms (e.g., chronic pain)' value={physical} onChange={e => setPhysical(e.target.value)} rows={5} cols={4}/>
          )
        }
      </div>
      <div>
        <label>Do you have a history of self-harm and/or suicidal ideation?</label>
        <BooleanRadio 
        data={{
          value: isSuicide,
          onChange: e => setIsSuicide(e.target.value),
          }} 
        />
        {
          isSuicide === 'yes' && (
            <div>
              <label>Please provide more detail about the nature and frequency of this history:</label>
              <p className='text-sm text-gray-500'>(select all that apply)</p>
              <div className='pt-4 gap-y-2 flex flex-col mb-12'>
                {SUICIDE.map(item => 
                  <CheckboxSimple 
                    data={{
                      onChange: e => handleChangeSuicide(e, 'current'),
                      checked: suicideCurrent[item],
                      label: item,
                      name: item,
                    }} 
                  />
                )}
              </div>
              <label>In the last three months…</label>
              <p className='text-sm text-gray-500'>(select all that apply)</p>
              <div className='pt-4 gap-y-2 flex flex-col mb-12'>
                {CURRENTSUICIDE.map(item => 
                  <CheckboxSimple 
                    data={{
                      onChange: e => handleChangeSuicide(e, 'habit'),
                      checked: suicideHabit[item],
                      label: item,
                      name: item,
                    }} 
                  />
                )}
              </div>
            </div>
            )
        }
      </div>
      <div>
        <label>Are there any members in your immediate or extended family that have/had a history of mental health challenges (diagnosed or otherwise)?</label>
        <BooleanRadio 
          data={{
            value: isFamilyHistory,
            onChange: e => setIsFamilyHistory(e.target.value),
          }} 
        />
        {
          isFamilyHistory === 'yes' && (
            <div>
              <label>Select all options that affect your mental health:</label>
              <div className='pt-4 gap-y-2 flex flex-col mb-12'>
                {FAMILY.map(item => 
                  <CheckboxSimple 
                    data={{
                      onChange: handleChangeFamily,
                      checked: familyHistory[item],
                      label: item,
                      name: item,
                    }} 
                  />
                )}
              </div>
            </div>
          )
        }
      </div>
      <div>
        <label>Do you use substances?</label>
        <p className='text-sm text-gray-500 mt-1'>Types of substances: alcohol, amphetamines, barbiturates, benzodiazepines, cannabis, cocaine, hallucinogens and opioids</p>
        <BooleanRadio 
          data={{
            value: isSubstanceAbuse,
            onChange: e => setIsSubstanceAbuse(e.target.value),
            }} 
          />
        {
          isSubstanceAbuse === 'yes' && (
            <textarea placeholder='Include details about previous and current substance use. Has using substances ever been problematic in your life?' value={substanceAbuse} onChange={e => setSubstanceAbuse(e.target.value)} rows={5} cols={4}/>
          )
        }
      </div>
      <div>
        <label>Are you currently involved in/ or is there the potential for you to be involved in any legal or court proceedings while you are receiving therapy where your therapist’s notes may be requested?</label>
        <BooleanRadio 
          data={{
            value: isLegal,
            onChange: e => setIsLegal(e.target.value),
          }} 
        />
      </div>
      <div>
        <label>Is there anything that you think I should know about you to help me understand you better?</label>
        <p className='text-sm text-gray-500 mt-1'>Including culture, spirituality, childhood, strengths, and coping mechanisms for stress that do work/don’t work</p>
        <textarea value={notes} onChange={e => setNotes(e.target.value)} rows={5} cols={4}/>
      </div>
      <CheckboxSimple
        data={{
          checked: recordConsent,
          onChange: () => setRecordConsent(!recordConsent),
          label: "[OPTIONAL] I agree to allow my therapist to record my sessions for educational purposes. My recorded sessions will be kept private on Alli's PHIPA compliant platform and only viewed by therapists and their supervisor for educational purposes and ensure quality care. Consenting to recording is voluntary and revocable, and will not impact my ability to access services at Alli.",
        }}
      />
      {error && <Error error={error} />}
      <Button type='submit' onClick={handleSubmit} className='w-full'>
        Submit
      </Button>
    </form>
  );
}

export default Intake2;