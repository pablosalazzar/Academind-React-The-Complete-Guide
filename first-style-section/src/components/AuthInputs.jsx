import { useState } from 'react';
import Button from './Button'
import CustomInput from './Input';


export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs" className='w-full max-w-28rem p-4 m-auto border-radius-0.5rem box-shadow-0-1-3-0-0-0-0-1-2-0-0-0-6'>
      <div className='flex flex-col gap-0.5 mb-1.5'>
        <CustomInput name="Email" $invalid= {emailNotValid} onChange={(event) => handleInputChange('email', event.target.value)}/>
        <CustomInput name="Password" $invalid= {passwordNotValid} onChange={(event) => handleInputChange('password', event.target.value)}/>
      </div>
      <div className="actions">
        <button type="button" className="text-button">
          Create a new account
        </button>
        <Button onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  );
}
