import React,{useState} from "react";
import "../screens/loginstyle.css";
import { useNavigate } from "react-router-dom";
function Signup(){
    const [firstname,setFirstname]=useState('');
    const [lastname,setLastname]=useState('');
    const [Email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [passwordError,setPasswordError]=useState('');
    const navigate=useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
      
        // Define the passwordPattern here (this line was added)
        const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
      
        if (!passwordPattern.test(password)) {
          setPasswordError('Password must be at least 8 characters, include one uppercase letter, one lowercase letter, and one number.');
          return;
        }
      
        alert("Signed Up Successfully");
      
        // Clear form fields
        setFirstname('');
        setLastname('');
        setEmail('');
        setPassword('');
        setPasswordError('');
      
        // Navigate back to login page
        navigate('/');
      };
      
    return (
       
       
       
        <div className='form-container'>
            
            <h1>SignUp</h1>
            <hr className="sep"  />
            
            <div className="card">
            <h1>REGISTER HERE </h1>
            <hr className="sep" />
            <form className="a" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label> Firstname:</label>
                    <input type="text" value={firstname} onChange={(e)=>setFirstname(e.target.value)} required  />
                </div>
                <div className="form-group">
                    <label> Lastname:</label>
                    <input type="text" value={lastname} onChange={(e)=>setLastname(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label> Email:</label>
                    <input type="email" value={Email} onChange={(e)=>setEmail(e.target.value)} required  />
                </div>
                <div className="form-group">
                    <label> Password:</label>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="password must be 8 character with atleast one digit,upper and lowercase"  />
                </div>
                {passwordError && <p style={{color:"red"}}>{passwordError}</p>}
                <div className="form-button">
                    <button type="submit" >Sign Up</button>
                </div>
            </form>
        </div>
        </div>
    )
    }
export default Signup;