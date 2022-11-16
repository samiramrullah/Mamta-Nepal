import React from 'react'
import { useParams } from 'react-router-dom';
import LoginCard from './Login/LoginCard';
import SignupCard from './Login/SignupCard';
const Login = () => {
    const {login}=useParams();
    if(login==="true")
    {
        return(
            <LoginCard/>
        )
    }
    else
    {
        return(
            <SignupCard/>
        )
    }
}

export default Login