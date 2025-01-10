import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useUserStore } from '../../store/store';
import { useNavigate } from 'react-router-dom';
import '../../styles/login.css'
<link href='https://fonts.googleapis.com/css?family=Playfair Display' rel='stylesheet'></link>

interface myFormInput {
  logEmail: string;
  logPassword: string;
  logName: string;
}


const yupValidation = yup.object().shape({
  logEmail: yup.string().required('Email is required').email('Invalid email format'),
  logPassword: yup.string().required('Password is required').min(6, 'Password must be at least 6 characters').max(15, 'Password should not exceed 15 characters'),
  logName: yup.string().required('Username is required').min(2, 'Username must be atleast two characters').max(8, 'USername cannot contain  more than 8 characters')
});

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { setLoginData } = useUserStore(); //using setLoginData to for login data storage

  const { register, handleSubmit, formState: { errors } } = useForm<myFormInput>({
    resolver: yupResolver(yupValidation),
  });

  const onSubmit: SubmitHandler<myFormInput> = (data) => {
    // Store the user data in Zustand store - state management library
    setLoginData({
      logName: data.logName,
      logEmail: data.logEmail,
      logPassword: data.logPassword,
    }); //store login data in zustand

    // Redirect to the registration page
    navigate('/home');
  };
  

  return (
    <>
    <div className="background-container"></div>
    <form className = "loginForm" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h1>Welcome to the Login page !</h1>
        <h2>Enter Details for registration</h2>
        <div className = "formBody">
        <label>User Name</label>
        <input type= 'username' {...register('logName')}/>
        {errors.logName && <p id="logErrors">{errors.logName.message}</p>}
        <label>Email</label>
        <input type="email" {...register('logEmail')} />
        {errors.logEmail && <p id="logErrors">{errors.logEmail.message}</p>}
      </div>
      
      <div>
        <label>Password</label>
        <input type="password" {...register('logPassword')} />
        {errors.logPassword && <p id="logErrors">{errors.logPassword.message}</p>}
      </div>

      <button type="submit">Register</button>
      </div>
    </form>
    
    </>
  );
};

export default Login;