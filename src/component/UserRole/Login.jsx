
import React, {useState} from "react";
import { TextField, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import loginbg from '../../assests/image/loginbg.jpg'
 
const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    // const [emailError, setEmailError] = useState(false)
    // const [passwordError, setPasswordError] = useState(false)


  const handleSubmit =  (e) => {
    e.preventDefault();
    axios.get('https://65a8d210219bfa371867b1d0.mockapi.io/api/fakeapi')
    .then(response => {
      console.log(response.data);
      const loginData = response.data.find(user => user.email === email );
      if (loginData) {
        console.log("logged in")
        navigate('/admin')
        

      } else {
        console.log("User not found");
      }
    })
    .catch(error => {
      console.error("An error occurred:", error);
    });
  };
    return ( 
        <React.Fragment>
          <div className="align_page">
        <form autoComplete="off" onSubmit={handleSubmit} className="form_container">
            <h2>Login Form</h2>
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
                 <Button variant="outlined" color="secondary" type="submit">Login</Button>
             
        </form>
      
        <medium>Need an account? <Link to="/">Register here</Link></medium>
        </div>
        </React.Fragment>
     );
}
 
export default Login;