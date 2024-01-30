
import React, {useState} from "react";
import { TextField, Button } from "@mui/material";
import { Link , useNavigate } from "react-router-dom";
import axios from 'axios';
 
const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name , setName] = useState("")
    const navigate = useNavigate()
    // const [emailError, setEmailError] = useState(false)
    // const [passwordError, setPasswordError] = useState(false)


  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.post(`https://65a8d210219bfa371867b1d0.mockapi.io/api/fakeapi`, {
      name,
      email,
      password,
  }).then(()=>{
   navigate('/login')
  })
  };
    return ( 
       <React.Fragment>
         <div className="loginbg">
        <div className="align_page">
        <form autoComplete="off" onSubmit={handleSubmit} className="form_container">
            <h2>Register</h2>
                 <TextField 
                    label="Name"
                    onChange={e => setName(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    type="name"
                    sx={{mb: 3}}
                    fullWidth
                    value={name}
                    // error={emailError}
                 />
                <TextField 
                    label="Email"
                    onChange={e => setEmail(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    type="email"
                    sx={{mb: 3}}
                    fullWidth
                    value={email}
                    // error={emailError}
                 />
                 <TextField 
                    label="Password"
                    onChange={e => setPassword(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    type="password"
                    value={password}
                    // error={passwordError}
                    fullWidth
                    sx={{mb: 3}}
                 />
                 <Button variant="outlined" color="secondary" type="submit">Register</Button>
             
        </form>
        <medium>Already having account? <Link to="/login">Login</Link></medium>
        </div> 
        </div>
        </React.Fragment>
     );
}
 
export default Register;