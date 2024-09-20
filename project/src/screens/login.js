import React,{useState} from 'react';
import "./loginstyle.css";
import {Link} from 'react-router-dom';

function Hi() {
  const[Email,setEmail]=useState('');  
  const[password,setPassword]=useState(''); 
  const[passwordError,setPasswordError]=useState(''); 
  const[error,setError]=useState('');
  function handleSubmit(event) {

      event.preventDefault();
    
      const isValidEmail = (Email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Email);
      };
    
      if (!isValidEmail(Email)) {
        setError('Email must be a valid address');
        return;
      } else {
        setError(''); // Clear error when valid
      }
    
      const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    
      if (!passwordPattern.test(password)) {
        setPasswordError('Incorrect Password');
        return;
      } else {
        setPasswordError(''); // Clear password error when valid
      }
    
      alert("Successfully submitted");
      setEmail('');
      setPassword('');
    }
    
  return (
   <div className='form-container'>

      <h1>Login</h1>
      <hr className='sep'  /> 
      <div className='card'>
        <h1>User Login </h1>
        <hr className='sep' />
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-grp'><label>Email :</label>
        <input type='email' value={Email} onChange={(e)=>setEmail(e.target.value)} required />
        {error && <p style={{color:"red"}}>{error}</p>}
        </div>
        <div className='form-grp'> <label>Password :</label>
        <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} required pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}' title='Incorrect Password' /></div>
        {passwordError && <p style={{color:"red"}}>{passwordError}</p>}
        <div className='form-button'> 
            <button type="submit">submit</button>
        </div>
    
      </form>   
      </div>
      <div className='p'>
        <p>Don't have an account ? <Link to="/signup">Sign Up</Link></p>
      </div>
    </div>
  );
}

export default Hi;
