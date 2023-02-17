import * as React from 'react';
import { useState } from 'react';
import './App.css';
import { useMultistepForm } from "./hooks/useMultistepForm";
import { UserForm } from "./UserForm";
import { AccountForm } from "./AccountForm";
import { AddressForm } from "./AddressForm";
import { useTranslation} from "react-i18next";
import './i18n/config';

type FormData = {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  password: string;
  street: string;
  city: string;
  state: string;
  zip: string;
}

const INITIAL_DATA: FormData = {
  firstName: '',
  lastName: '',
  age: 0,
  email: '',
  password: '',
  street: '',
  city: '',
  state: '',
  zip: ''
}

function App() {
  const [data, setData] = useState(INITIAL_DATA);
  const { t } = useTranslation('userform');
  const updateFields = (fields: Partial<FormData>) => {
    setData(prev => {
      return {
        ...prev,
        ...fields
      }
    })
  }

  const { steps, currentStepIndex, step, isFirstStep, back, next, isLastStep } = useMultistepForm([
    // eslint-disable-next-line react/jsx-key
    <UserForm {...data} updateFields={updateFields} />,
    // eslint-disable-next-line react/jsx-key
    <AccountForm {...data} updateFields={updateFields} />,
    // eslint-disable-next-line react/jsx-key
    <AddressForm {...data} updateFields={updateFields} />
  ]);

  function onsubmit(e: React.FormEvent) {
    e.preventDefault();
    if(!isLastStep) return next();
    alert('Success !');
  }


  return (
    <div style={{
      position: 'relative',
      backgroundColor: 'white',
      border: '1px solid black',
      padding: '2rem',
      margin: '1rem',
      borderRadius: '.5rem',
      fontFamily: 'sans-serif'
    }}>
      <form onSubmit={onsubmit}>
        <div style={{
          display: 'absolute',
          top: '.5rem',
          right: '.5rem'
        }}>
          { currentStepIndex+1 }/ { steps.length }
        </div>
        { step }
        <div style={{
          marginTop: '1rem',
          display: 'flex',
          gap: '1rem',
          justifyContent: 'flex-end'
        }}>
          { !isFirstStep && (
            <button type="button" onClick={back}>
              {t('back')}
            </button>)}
          <button type="button" onClick={next}>
            {isLastStep ? 'finish' : t('next') }
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
