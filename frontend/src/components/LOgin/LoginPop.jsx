import { useContext, useEffect, useState } from 'react';
import './LoginPop.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../context/context';
import axios from 'axios';

const LoginPop = ({ setShowLogin }) => {
  const { url, setToken } = useContext(StoreContext);
  const [currState, setCurrState] = useState("Login");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const onLogin = async (event) => {
    event.preventDefault();
    let endpoint = currState === 'Login' ? '/api/user/login' : '/api/user/register';
    let newurl = `${url}${endpoint}`;

    try {
      const response = await axios.post(newurl, data);
      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token); // Fixed token key
        setShowLogin(false); // Close the popup on successful login/signup
      } else {
        alert(response.data.message); // Display error message
      }
    } catch (error) {
      console.error('Login error:', error); // Log error for debugging
      alert('An error occurred during login. Please try again.');
    }
  };

  useEffect(() => {
    console.log(data); // For debugging purposes
  }, [data]);

  return (
    <div className='login-popup'>
      <form onSubmit={onLogin} className='login-popup-container'>
        <div className='login-popup-title'>
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt='Close' />
        </div>
        <div className='login-popup-inputs'>
          {currState === "Sign Up" && (
            <input
              name='name'
              onChange={onChangeHandler}
              value={data.name}
              type='text'
              placeholder='Your name'
              required
            />
          )}
          <input
            name='email'
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            placeholder='Email'
            required
          />
          <input
            name='password'
            onChange={onChangeHandler}
            value={data.password}
            type='password'
            placeholder='Password'
            required
          />
        </div>
        <button type='submit'>{currState === "Sign Up" ? "Create Account" : "Login"}</button>
        <div className='login-popup-condition'>
          <input type='checkbox' required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {currState === 'Login' ? (
          <p> Create a new Account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>
        ) : (
          <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
        )}
      </form>
    </div>
  );
};

export default LoginPop;
